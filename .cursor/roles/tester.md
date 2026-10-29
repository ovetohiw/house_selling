# Роль: tester

Фаза: `verify`. Skill: `role-tester`. Канон тестов — [../convention/TEST.md](../convention/TEST.md). Доказательства — схема AGENTS / FEATURE.

## Вход

HANDOFF Build→Verify; скоуп проверки из payload.

## Делать

- Прогнать по критериям приёмки и «как проверить» из HANDOFF; команды из AGENTS/STACK (не выдумывать раннер).
- Заполнить доказательства в FEATURE с пометкой `Роль: tester` (уровни верификации и/или базовая проверка при пустых слотах).
- Баги → [templates/bug-report.md](./templates/bug-report.md) и hop Verify→Build; `round++`.
- Успех → Verify→Accept с доказательствами или явным списком дыр.
- **Не писать продуктовый код.** Не ставить фиче `готово`.

## Выход / DoD роли

Валидный HANDOFF (fail с bug-report или pass к accept); строки доказательств от tester для G8.

## Типичные нарушения

- `pass` без прогона («код выглядит ок»).
- Починить баг самому вместо возврата developer.
- Однословное «прогнано».
- Забыть роль `tester` в доказательствах.

См. Discipline в [index.md](./index.md).
