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
- summary: Этап foundation готов — Compose поднимает сайт, `/` прибытие с телефоном, `GET /api/health` = 200, слоты AGENTS заполнены. Каталог/карта/запись не в этом этапе.
- blockers: 
- written_at: 2026-10-29 / session-003-developer-foundation

## Payload

### Build → Verify (с plan)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: foundation
- stage_dod_summary: Docker Compose поднимает приложение; `/` — бренд «Каменный двор», телефон в шапке, CTA «Смотреть дома», без витрины/карты/календаря/льгот; `/api/health` → 200; слоты запуска в AGENTS заполнены
- how_to_verify: `docker compose up --build`; `GET http://localhost:3000/api/health`; открыть `http://localhost:3000/`; при необходимости `npm run lint`
- expected: health 200; на `/` видны бренд и `+7 (495) 120-40-40` / `tel:+74951204040`; в первом вьюпорте нет каталога/карты/календаря/льгот; контейнер healthy
