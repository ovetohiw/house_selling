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
- summary: Этап unit-benefits готов — план и описание квартиры, три льготы без обещания банка, 404 для недоступной/чужой квартиры. Такси не в скоупе.
- blockers: 
- written_at: 2026-10-29 / session-010-developer-unit-benefits

## Payload

### Build → Verify (с plan)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: unit-benefits
- stage_dod_summary: `/complexes/[id]/units/[unitId]` показывает план SVG и описание; `/.../benefits` — три текстовых льготы без одобрения банка
- how_to_verify: `npm run build`; `npm run start`; GET `/complexes/severny-kamen/units/sk-214` и `.../benefits`; GET `.../lk-45` и unit чужого ЖК → 404
- expected: plan + описание + 3 льготы; отказ 404 без стека
