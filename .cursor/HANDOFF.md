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
- summary: Этап visit готов — календарь открытых дат, подтверждение, анкета, SQLite через параметризованный INSERT, отказы на закрытую дату и пустые поля, Vitest 15/15 + POST 201/400.
- blockers: 
- written_at: 2026-10-29 / session-014-developer-visit

## Payload

### Build → Verify (с plan)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: visit
- stage_dod_summary: Запись на открытую дату сохраняется; закрытая дата и пустые поля — понятный отказ; пустой календарь без анкеты; unit дат + POST зелёные
- how_to_verify: `npm test`; `VISIT_TODAY=2026-10-26` + `npm run build` + start; GET `/.../visit`; POST `/api/bookings` open/closed/empty
- expected: Vitest pass; open → 201; closed/empty → 400; HTML без среды в списке открытых дней
