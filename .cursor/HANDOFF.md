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
- summary: Этап route-taxi готов — три старта, оценка 250+45×ceil(км), смена старта меняет сумму, подпись «оценка, не вызов такси», Vitest зелёный.
- blockers: 
- written_at: 2026-10-29 / session-012-developer-route-taxi

## Payload

### Build → Verify (с plan)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: route-taxi
- stage_dod_summary: На `/.../route` три старта; смена `from` меняет оценку; видна подпись «Оценка, не вызов такси»; unit формулы зелёный
- how_to_verify: `npm test`; `npm run build`; `npm run start`; GET `...?from=red-square` и `...?from=sheremetyevo` — сравнить суммы
- expected: разные ₽; три названия стартов; подпись оценки; Vitest taxi pass
