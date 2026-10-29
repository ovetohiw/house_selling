# HANDOFF

Актуальный контракт передачи между ролями (одна передача «сейчас»). Канон — [roles/contracts.md](./roles/contracts.md). Шаблоны payload — [roles/templates/handoff.md](./roles/templates/handoff.md).

Неполный конверт → hard; фазу/`to_role` не менять.

## Конверт

- from_role: accept
- to_role: none
- feature_id: house-showcase
- phase: accept
- round: 1
- verdict: pass
- summary: Фича house-showcase принята. G1–G8 отмечены; AC1–AC11 и M1–M5 с доказательствами tester; plan перенесён в completed (оценка B).
- blockers: 
- written_at: 2026-10-29 / session-017-accept

## Payload

### Accept pass

- gates_g1_g8: checked
- feature_status: готово
