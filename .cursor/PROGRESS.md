# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; дорожка до benefits
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: developer
- Фаза пайплайна: build
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `d92ac5d` pushed to `origin/main`
- Этап unit-benefits: `готово` + tester pass (AC7); plan → `route-taxi` / в очереди
- Soft: mid-stage Verify→developer; foundation без независимого tester
- Следующий лучший шаг: роль developer / build — этап `route-taxi`

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 011

- Дата: 2026-10-29
- Цель: tester — verify этапа unit-benefits
- Роль / фаза: tester / verify → hop Build (route-taxi)
- Сделано: build+start :3007; AC7 evidence; HANDOFF → developer
- Запущенная верификация: unit plan/desc; benefits ×3; 404
- Осталось: developer — route-taxi
- Следующий лучший шаг: developer этап route-taxi
- Delivered: commit+push `d92ac5d` на `origin/main`

### Сессия 010–001

- unit-benefits … analyst
