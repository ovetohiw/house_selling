# HANDOFF

Актуальный контракт передачи между ролями (одна передача «сейчас»). Канон — [roles/contracts.md](./roles/contracts.md). Шаблоны payload — [roles/templates/handoff.md](./roles/templates/handoff.md).

Неполный конверт → hard; фазу/`to_role` не менять.

## Конверт

- from_role: developer
- to_role: tester
- feature_id: house-showcase
- phase: verify
- round: 1
- verdict: pass
- summary: AC10 fix — Dockerfile apt через mirror.yandex.ru; `docker compose up --build` зелёный; `/api/health` 200; `/complexes` 200 с тремя ЖК. Нужен независимый verify AC10 + базовая.
- blockers: 
- written_at: 2026-10-29 / session-017-developer-ac10

## Payload

### Build → Verify (без plan stage / Accept fix)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: ac10-compose-fix (Accept→Build round 1)
- stage_dod_summary: Compose rebuild успешен; health 200; полная дорожка в образе (`/complexes` есть)
- how_to_verify: `docker compose up --build`; `GET /api/health` → 200; `GET /` и `GET /complexes` → 200 с брендом/тремя ЖК; при возможности `npm run test:e2e` или базовая из AGENTS
- expected: контейнер healthy; health ok; complexes не 404; AC10 можно отметить с доказательством tester
