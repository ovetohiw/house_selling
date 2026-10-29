# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; дорожка до visit
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: developer
- Фаза пайплайна: build
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `f797f93` pushed to `origin/main`
- Этап visit: `готово` + tester pass (AC9); plan → `motion-widths` / в очереди
- Soft: mid-stage Verify→developer; foundation без независимого tester
- Следующий лучший шаг: роль developer / build — этап `motion-widths`

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 015

- Дата: 2026-10-29
- Цель: tester — verify этапа visit
- Роль / фаза: tester / verify → hop Build (motion-widths)
- Сделано: npm test 15/15; POST/UI AC9; HANDOFF → developer
- Запущенная верификация: calendar/confirm/form; POST 201/400/400
- Осталось: developer — motion-widths
- Следующий лучший шаг: developer этап motion-widths
- Delivered: commit+push `f797f93` на `origin/main`

### Сессия 014–001

- visit … analyst
