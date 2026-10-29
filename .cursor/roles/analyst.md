# Роль: analyst

Режимы: **Spec** (фаза `spec`) и **Accept** (фаза `accept`). Skills: `role-analyst`, `role-accept`.

## Spec

**Вход:** PROGRESS роль `analyst` / N/A→bootstrap; FEATURE черновик или пустой шаблон.

**Делать:** заполнить контракт FEATURE (проблема, цель, скоуп, поведение, критерии приёмки, уровни верификации). При UI — [../refs/](../refs/), [../convention/UIDESIGN.md](../convention/UIDESIGN.md), STACK. Не писать продуктовый код. Не выбирать стэк вне STACK.

**Выход / DoD роли:** критерии приёмки непустые; вне скоупа задано; `Пайплайн: spec` готов к hop.

**Hop:** Spec→Security по [contracts.md](./contracts.md) → заполнить [../HANDOFF.md](../HANDOFF.md).

## Accept

**Вход:** HANDOFF Verify→Accept `pass` (или с дырами → тогда fail); доказательства в FEATURE.

**Делать:** сверить **каждый** критерий приёмки со строкой доказательства (схема AGENTS). Проверить гейты G1–G8. Не штамповать по `summary`. Не сужать критерии. Не писать код.

**Выход:** все критерии и гейты ок → Accept pass (`to_role: none`); иначе Accept→Build с списком failed-критериев; `round++`.

## Типичные нарушения

- Начать build/код из Spec.
- Accept `pass` при пустых полях доказательства или без G6–G8.
- Смягчить критерий, чтобы «зелёное».
- Прыжок из N/A мимо bootstrap.

См. Discipline в [index.md](./index.md).
