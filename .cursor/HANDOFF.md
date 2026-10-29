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
- summary: Этап visit верифицирован (AC9 + Unit 15/15 + интеграция POST 201/400). Следующий Build — motion-widths. Не Accept.
- blockers: 
- written_at: 2026-10-29 / session-015-tester-visit

## Payload

### Verify → Build (next stage, soft mid-pipeline)

- verify_verdict: pass
- stage_id: visit
- next_stage_id: motion-widths
- evidence:
  - criterion: AC9
    role: tester
    command: npm test; VISIT_TODAY=2026-10-26 build+start :3011; GET visit steps; POST bookings
    result: calendar/confirm/form OK; POST 201/400/400; Vitest 15/15
    artifact: Vitest + HTTP localhost:3011 session-015-tester-visit
    session: 2026-10-29 / session-015-tester-visit
- gaps:
  - foundation: независимый tester Compose/`/` не прогнан
  - empty-calendar UI branch not exercised under normal 21-day rules
  - AC1–AC3, AC10–AC11; сквозной/health/базовая — открыты
