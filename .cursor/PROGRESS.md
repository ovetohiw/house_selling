# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; `/`, `/complexes`, витрина
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: tester
- Фаза пайплайна: verify
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `90be1bd` pushed to `origin/main`
- Этап showcase: `готово`; plan → `unit-benefits` / в очереди
- Soft: mid-stage Verify→developer; foundation без независимого tester
- Следующий лучший шаг: роль tester — проверить DoD этапа showcase по HANDOFF

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 008

- Дата: 2026-10-29
- Цель: developer — этап showcase
- Роль / фаза: developer / build → hop Verify
- Сделано: витрина + sort + скидки + unit links + Vitest sort
- Запущенная верификация: npm test 7/7; build; HTML latunny без lk-45 со скидками
- Осталось: tester showcase; затем unit-benefits
- Следующий лучший шаг: tester проверяет showcase
- Delivered: commit+push `90be1bd` на `origin/main`

### Сессия 007–001

- tester complexes; complexes; catalog; foundation; security; analyst
