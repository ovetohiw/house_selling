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
- summary: Этап catalog готов — 3 ЖК, 9 квартир (1 недоступна), льготы, старты маршрута, медиа и Vitest зелёный. UI витрины/карты не в этом этапе.
- blockers: 
- written_at: 2026-10-29 / session-004-developer-catalog

## Payload

### Build → Verify (с plan)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: catalog
- stage_dod_summary: Каталог читается из data/; 3 комплекса; 9 квартир с ровно одной недоступной; available-фильтр скрывает её; медиа и ATTRIBUTION на месте
- how_to_verify: `npm test`
- expected: Vitest — 4 passed; нет fail по составу каталога
