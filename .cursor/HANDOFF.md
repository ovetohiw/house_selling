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
- summary: Этап route-taxi верифицирован (AC8: три старта меняют оценку, подпись оценки, Vitest 9/9). Следующий Build — visit. Не Accept.
- blockers: 
- written_at: 2026-10-29 / session-013-tester-route-taxi

## Payload

### Verify → Build (next stage, soft mid-pipeline)

- verify_verdict: pass
- stage_id: route-taxi
- next_stage_id: visit
- evidence:
  - criterion: AC8
    role: tester
    command: npm test; npm run build; npm run start -p 3009; GET route with three from values
    result: 9/9; prices 835/925/880 differ; three starts; «Оценка, не вызов такси»
    artifact: Vitest + HTML localhost:3009 session-013-tester-route-taxi
    session: 2026-10-29 / session-013-tester-route-taxi
- gaps:
  - foundation: независимый tester Compose/`/` не прогнан
  - AC1–AC3, AC9–AC11; интеграция/сквозной/health/базовая — открыты
