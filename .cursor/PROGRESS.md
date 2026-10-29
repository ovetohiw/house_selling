# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; дорожка `/` → витрина → unit → benefits
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: tester
- Фаза пайплайна: verify
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `83dc1f6` pushed to `origin/main`
- Этап unit-benefits: `готово`; plan → `route-taxi` / в очереди
- Soft: mid-stage Verify→developer; foundation без независимого tester
- Следующий лучший шаг: роль tester — проверить DoD этапа unit-benefits по HANDOFF

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 010

- Дата: 2026-10-29
- Цель: developer — этап unit-benefits
- Роль / фаза: developer / build → hop Verify
- Сделано: unit page (план+описание); benefits ×3; resolveAvailableUnit; 404
- Запущенная верификация: build; HTML unit/benefits; hidden/wrong 404
- Осталось: tester unit-benefits; затем route-taxi
- Следующий лучший шаг: tester проверяет unit-benefits
- Delivered: commit+push `83dc1f6` на `origin/main`

### Сессия 009–001

- tester showcase … analyst
