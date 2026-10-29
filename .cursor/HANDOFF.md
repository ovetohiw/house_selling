# HANDOFF

Актуальный контракт передачи между ролями (одна передача «сейчас»). Канон — [roles/contracts.md](./roles/contracts.md). Шаблоны payload — [roles/templates/handoff.md](./roles/templates/handoff.md).

Неполный конверт → hard; фазу/`to_role` не менять.

## Конверт

- from_role: developer
- to_role: tester
- feature_id: house-showcase
- phase: build
- round: 0
- verdict: pass
- summary: Этап showcase готов — витрина квартир в наличии, три сортировки (цена со скидкой), скидки видны, недоступная скрыта, ссылки на unit. Страница квартиры — следующий этап.
- blockers: 
- written_at: 2026-10-29 / session-008-developer-showcase

## Payload

### Build → Verify (с plan)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: showcase
- stage_dod_summary: На `/complexes/[id]` только available; сортировки price/area/rooms меняют порядок (цена — effective); скидка отображается; ссылка ведёт на `/units/[unitId]`
- how_to_verify: `npm test`; `npm run build`; `npm run start`; GET `/complexes/latunny-kvartal?sort=price` (нет `lk-45`, есть скидки); GET `...?sort=area` / `rooms` и сравнить порядок id
- expected: Vitest sort зелёный; hidden unit отсутствует; discount и sort-ссылки в HTML
