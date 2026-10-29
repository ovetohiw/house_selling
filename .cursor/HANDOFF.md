# HANDOFF

Актуальный контракт передачи между ролями (одна передача «сейчас»). Канон — [roles/contracts.md](./roles/contracts.md). Шаблоны payload — [roles/templates/handoff.md](./roles/templates/handoff.md).

Неполный конверт → hard; фазу/`to_role` не менять.

## Конверт

- from_role: tester
- to_role: developer
- feature_id: house-showcase
- phase: verify
- round: 0
- verdict: pass
- summary: Этап showcase верифицирован (Vitest 7/7, AC5–AC6). Следующий Build — unit-benefits. Не Accept.
- blockers: 
- written_at: 2026-10-29 / session-009-tester-showcase

## Payload

### Verify → Build (next stage, soft mid-pipeline)

- verify_verdict: pass
- stage_id: showcase
- next_stage_id: unit-benefits
- evidence:
  - criterion: AC5
    role: tester
    command: npm test; npm run build; npm run start -p 3005; GET latunny/severny with sort params
    result: 7/7; price/area/rooms/desc/discount visible; sort orders as expected
    artifact: Vitest + HTML localhost:3005 session-009-tester-showcase
    session: 2026-10-29 / session-009-tester-showcase
  - criterion: AC6
    role: tester
    command: GET /complexes/latunny-kvartal?sort=price
    result: lk-45 absent; only lk-12,lk-77
    artifact: HTML localhost:3005 session-009-tester-showcase
    session: 2026-10-29 / session-009-tester-showcase
- gaps:
  - foundation: независимый tester Compose/`/` не прогнан
  - AC3: метка карты без ключа не проверена
  - AC1–AC3, AC7–AC11; интеграция/сквозной/health/базовая — открыты
