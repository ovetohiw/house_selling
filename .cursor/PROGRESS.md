# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; `/` и `/complexes`
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: developer
- Фаза пайплайна: build
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `1e37af0` pushed to `origin/main`
- Этап complexes: `готово` + tester pass (AC4); plan → `showcase` / в очереди
- Soft: mid-stage Verify→developer; foundation без независимого tester; метка карты без ключа не проверена
- Следующий лучший шаг: роль developer / build — этап `showcase`

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 007

- Дата: 2026-10-29
- Цель: tester — verify этапа complexes
- Роль / фаза: tester / verify → hop Build (showcase)
- Сделано: build+start :3002 без ключа; AC4 evidence; HANDOFF → developer
- Запущенная верификация: `/complexes` 3 ЖК + пустая карта; stub; 404; health 200
- Известный риск: AC3 метка карты; foundation без независимого tester
- Осталось: developer — showcase
- Следующий лучший шаг: developer этап showcase
- Delivered: commit+push `1e37af0` на `origin/main`

### Сессия 006

- Delivered: complexes `bf4f195` / `cac7bc5`

### Сессия 005–001

- tester catalog; catalog; foundation; security; analyst
