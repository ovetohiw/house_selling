# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; `npm run test:e2e`
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: tester
- Фаза пайплайна: verify
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `27e7037` pushed to `origin/main`
- Этап motion-widths: `готово` (developer DoD); все этапы plan `готово`; ждёт независимого tester
- Soft: mid-stage Verify→developer на прошлых этапах; foundation без независимого tester
- Следующий лучший шаг: роль tester / verify — этап motion-widths (AC11 + e2e)

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 016

- Дата: 2026-10-29
- Цель: developer — этап motion-widths
- Роль / фаза: developer / build → hop Verify
- Сделано: StepTransition + CSS; reduced-motion; Playwright journey 2 widths + reduced-motion; AGENTS `test:e2e`; DoD 4/4; HANDOFF → tester
- Запущенная верификация: `npm run test:e2e` — 4 passed, exit 0
- Осталось: tester verify motion-widths / AC11
- Следующий лучший шаг: tester — verify motion-widths (AC11)
- Delivered: commit+push `27e7037` на `origin/main`

### Сессия 015–001

- visit … analyst
