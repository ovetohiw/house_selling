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
- summary: Этап complexes верифицирован без ключа карт (список 3 ЖК, пустая карта, stub, 404). AC4 отмечен. Следующий Build — showcase. Не Accept.
- blockers: 
- written_at: 2026-10-29 / session-007-tester-complexes

## Payload

### Verify → Build (next stage, soft mid-pipeline)

- verify_verdict: pass
- stage_id: complexes
- next_stage_id: showcase
- evidence:
  - criterion: AC4 / complexes DoD
    role: tester
    command: npm run build; YANDEX_MAPS_API_KEY=CHANGE_ME npm run start -p 3002; GET /complexes, /complexes/severny-kamen, /complexes/no-such, /api/health
    result: 3 ЖК + «Карта недоступна»; stub с именем; 404 без стека; health 200
    artifact: HTML localhost:3002 session-007-tester-complexes
    session: 2026-10-29 / session-007-tester-complexes
- gaps:
  - foundation: независимый tester Compose/`/` ещё не прогнан
  - AC3: клик по метке карты не проверен (нет реального ключа); полная витрина — этап showcase
  - AC1–AC3, AC5–AC11 и уровни интеграция/сквозной/health/базовая — не закрыты
