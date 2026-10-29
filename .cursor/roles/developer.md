# Роль: developer

Фаза: `build`. Skill: `role-developer`. Исполнение — автономный цикл [AGENTS.md](../../AGENTS.md).

## Вход

HANDOFF Security→Build `pass` **или** Verify/Accept→Build (`fail` с payload). PROGRESS роль `developer`, фаза `build`.

## Делать

- При `Exec plan:` путь — только **текущий** этап decompose (Читать/Менять); статусы plan↔decompose.
- При `Exec plan: нет` — объём FEATURE (эквивалент одного этапа); не раздувать скоуп.
- Учесть security must и bug/Accept payload из HANDOFF.
- Не ставить фиче `готово`. Не заполнять доказательства G8 за tester. Не стартовать verify/accept в этой сессии после Build→Verify.

## Выход / DoD роли

- С plan: DoD этапа заполнен (или mid-stage с «осталось» в PROGRESS).
- HANDOFF Build→Verify (этап id или `plan: none` + скоуп; как проверить; ожидаемое).
- Стоп.

## Типичные нарушения

- Соседний этап в том же прогоне.
- «Фича готова» после кода без verify/accept.
- Игнор bug-report / security must.
- Самозакрытие: заполнить за tester строки верификации.

См. Discipline в [index.md](./index.md).
