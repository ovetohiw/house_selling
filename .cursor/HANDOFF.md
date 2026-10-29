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
- summary: Этап complexes готов — список трёх ЖК, пустая карта без ключа, переход на stub `/complexes/[id]`, 404 для неизвестного id. Сортировки витрины не в скоупе этапа.
- blockers: 
- written_at: 2026-10-29 / session-006-developer-complexes

## Payload

### Build → Verify (с plan)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: complexes
- stage_dod_summary: `/complexes` показывает 3 комплекса и сообщение «Карта недоступна» без ключа; ссылка/маршрут открывает stub комплекса; неизвестный id — понятный 404
- how_to_verify: `npm run build`; `npm run start` (свободный порт); GET `/complexes` и `/complexes/severny-kamen` без `YANDEX_MAPS_API_KEY` / с CHANGE_ME; GET `/complexes/no-such` → 404
- expected: три имени ЖК на списке; текст про недоступность карты; stub с именем комплекса; 404 без стека
