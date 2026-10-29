# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; `/`, `/complexes`, витрина
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: developer
- Фаза пайплайна: build
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `e5b87a4` pushed to `origin/main`
- Этап showcase: `готово` + tester pass (AC5–AC6); plan → `unit-benefits` / в очереди
- Soft: mid-stage Verify→developer; foundation без независимого tester
- Следующий лучший шаг: роль developer / build — этап `unit-benefits`

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 009

- Дата: 2026-10-29
- Цель: tester — verify этапа showcase
- Роль / фаза: tester / verify → hop Build (unit-benefits)
- Сделано: npm test 7/7; build+start :3005; AC5–AC6 evidence; HANDOFF → developer
- Запущенная верификация: sort/discount/hidden unit на HTML
- Осталось: developer — unit-benefits
- Следующий лучший шаг: developer этап unit-benefits
- Delivered: commit+push `e5b87a4` на `origin/main`

### Сессия 008–001

- showcase; tester complexes; complexes; catalog; foundation; security; analyst
