# Роли агентов

Канон тонкого пайплайна и handoff. Доменные ограничения — [../convention/index.md](../convention/index.md). DoD фичи и «Не считается готовым» — [../../AGENTS.md](../../AGENTS.md). Контракты hop — [contracts.md](./contracts.md). Актуальная передача — [../HANDOFF.md](../HANDOFF.md).

## Пайплайн

Фазы: `spec` → `security` → `build` → `verify` → `accept`.

| Фаза | Роль | Файл |
|------|------|------|
| spec | analyst (Spec) | [analyst.md](./analyst.md) |
| security | security | [security.md](./security.md) |
| build | developer | [developer.md](./developer.md) |
| verify | tester | [tester.md](./tester.md) |
| accept | analyst (Accept) | [analyst.md](./analyst.md) |

Одна **роль** за сессию. Соседнюю роль в том же прогоне не стартовать. В `build` при наличии exec plan — только **текущий** этап ([../exec-plans/index.md](../exec-plans/index.md)).

**Лимиты (hard):** ≤2 полных круга Tester↔Developer на один и тот же fail; ≤2 на одно Accept-расхождение; далее блокер в [../PROGRESS.md](../PROGRESS.md).

**Границы:** Spec / Security / Tester / Accept не пишут продуктовый код. Tester не ставит фиче `готово`. Developer не закрывает фичу без `verify`+`accept` и гейтов G1–G8.

## Discipline / anti-patterns

Канон DoD и «Не считается готовым» — [AGENTS.md](../../AGENTS.md). Здесь — межролевые нарушения. Нарушение = hard или запрет hop `pass` (записать в PROGRESS / HANDOFF `blockers`).

1. **Код ≠ готово.** Diff / «реализовано» / «я так думаю» не закрывают этап, фичу и не дают Accept `pass`.
2. **Есть код ≠ verify/accept пройдены.** Developer максимум передаёт Build→Verify.
3. **Не выдумывай успех.** Нельзя прогнать / нет стенда / неизвестно → `verdict: blocked` или hard; не `pass` и не пустой payload.
4. **Не замалчивай.** Дыры, сомнения, flaky → `blockers` / открытые решения; молчаливый «потом» запрещён.
5. **Не подменяй проверку.** `pass` только если выполнено своё «как проверить»; чтение кода ≠ прогон, если роль требует прогон.
6. **Summary ≠ payload.** Обязательные поля контракта; эссе без payload невалидно.
7. **Границы роли.** Не чинить код «заодно» вне роли developer; Developer не закрывает критерии за tester/Accept.
8. **Не сужай контракт ради зелёного.** Не вычёркивать и не смягчать критерии FEATURE; смена смысла — hard к человеку.
9. **Однословные вердикты запрещены.** `ok` / `прогнано` / `зелёное` без команды, результата, артефакта.
10. **Раннер не выдумывай.** Команды только из AGENTS/STACK; пустые слоты — явная запись в доказательствах.

## Bootstrap

Когда `Текущая роль: N/A`:

1. Человек или skill `role-analyst` открывает/заполняет FEATURE.
2. Выставить `Пайплайн: spec`, `Текущая роль: analyst`.
3. Первая исходящая передача — Spec→Security после годного FEATURE.
4. Прыжок в `build` / `verify` / `accept` из N/A запрещён.

## Без exec plan

Если в FEATURE `Exec plan: нет`: фазы и роли те же; developer работает в объёме FEATURE (эквивалент одного этапа); Build→Verify без этап id (`plan: none`); гейт этапов plan (G5) N/A; G6–G8 обязательны.

## Приоритет конфликтов

1. Критерии и скоуп FEATURE  
2. Гейты DoD AGENTS (G1–G8) + «Не считается готовым»  
3. Security must / `blocked`  
4. Валидный HANDOFF payload  
5. Summary / мнение роли  

Конфликт → `blockers` или hard в PROGRESS; silent merge запрещён.

## Старт сессии (анти-додумывание)

Единый порядок с [AGENTS.md](../../AGENTS.md) и [../exec-plans/index.md](../exec-plans/index.md):

1. Sync remote (AGENTS).
2. PROGRESS — блокер; роль; фаза; непустой «следующий шаг» при активной работе; mid-stage: **осталось**.
3. HANDOFF — `to_role` = `Текущая роль` (или `none` при закрытом пайплайне); иначе hard.
4. FEATURE — `Пайплайн:` согласован с фазой.
5. Файл роли + Discipline.
6. Этап exec plan — **только** если роль `developer`, фаза `build`, HANDOFF не требует иной роли. Иначе этап не читать как задание.
7. DoD роли → HANDOFF + PROGRESS → **стоп**.

**Hard:** рассинхрон роль↔HANDOFF; пустой «следующий шаг» при активной фиче; угадывание роли; этап чужой роли; соседняя роль/этап в том же прогоне.

## Конец сессии

В PROGRESS обязательно: роль и фаза; для developer mid-stage — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой.

## Шаблоны

- [templates/handoff.md](./templates/handoff.md)
- [templates/security-checklist.md](./templates/security-checklist.md)
- [templates/bug-report.md](./templates/bug-report.md)
