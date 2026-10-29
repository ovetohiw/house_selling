# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; дорожка до visit/API
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: tester
- Фаза пайплайна: verify
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `39c325d` pushed to `origin/main`
- Этап visit: `готово`; plan → `motion-widths` / в очереди
- Soft: mid-stage Verify→developer; foundation без независимого tester; VISIT_TODAY для детерминированных проверок
- Следующий лучший шаг: роль tester — проверить DoD этапа visit по HANDOFF (AC9)

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 014

- Дата: 2026-10-29
- Цель: developer — этап visit
- Роль / фаза: developer / build → hop Verify
- Сделано: visit UI; API bookings; SQLite; dates/booking tests; Compose volume; gitignore db
- Запущенная верификация: npm test 15/15; POST 201/400; календарь HTML
- Осталось: tester visit; затем motion-widths
- Следующий лучший шаг: tester проверяет visit
- Delivered: commit+push `39c325d` на `origin/main`

### Сессия 013–001

- tester route-taxi … analyst
