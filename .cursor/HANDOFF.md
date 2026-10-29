# HANDOFF

Актуальный контракт передачи между ролями (одна передача «сейчас»). Канон — [roles/contracts.md](./roles/contracts.md). Шаблоны payload — [roles/templates/handoff.md](./roles/templates/handoff.md).

Неполный конверт → hard; фазу/`to_role` не менять.

## Конверт

- from_role: developer
- to_role: tester
- feature_id: house-showcase
- phase: verify
- round: 0
- verdict: pass
- summary: Этап motion-widths закрыт (анимация шага + Playwright 4/4 на двух ширинах и reduced-motion). Нужен независимый verify AC11 и оставшихся дыр; не Accept.
- blockers: 
- written_at: 2026-10-29 / session-016-developer-motion-widths

## Payload

### Build → Verify (с plan)

- plan: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`
- stage_id: motion-widths
- stage_dod_summary: e2e зелёный на desktop (1280) и mobile (390); reduced-motion не ломает дорожку; короткая анимация смены шага; слот AGENTS `npm run test:e2e`
- how_to_verify: `npm run test:e2e` (build + Playwright webServer :3012, VISIT_TODAY=2026-10-26); при желании визуально `/` → visit с/без prefers-reduced-motion; сверить AC11
- expected: 4 passed (journey ×2 widths + reduced-motion ×2); при reduced-motion смена шага без задержки анимации; заявка сохраняется до конца дорожки
