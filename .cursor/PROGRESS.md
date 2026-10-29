# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; страницы `/` и `/complexes`
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: tester
- Фаза пайплайна: verify
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `bf4f195` pushed to `origin/main`
- Этап complexes: `готово`; plan → `showcase` / в очереди
- Soft: foundation без независимого tester; AC3 клик по метке карты — только при реальном ключе
- Следующий лучший шаг: роль tester — проверить DoD этапа complexes по HANDOFF

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 006

- Дата: 2026-10-29
- Цель: developer — этап complexes
- Роль / фаза: developer / build → hop Verify
- Сделано: `/complexes` список 3 ЖК; карта при ключе / пустое без ключа; stub `[id]`; not-found; `lib/maps/config`
- Запущенная верификация: build ok; start :3001; HTML список+пустое+stub; 404; npm test 4/4
- Известный риск: метка карты не проверена без реального ключа
- Осталось: tester complexes; затем Build showcase
- Следующий лучший шаг: tester проверяет complexes
- Delivered: commit+push `bf4f195` на `origin/main`

### Сессия 005

- Delivered: tester catalog `25f5c23` / `94c6233`

### Сессия 004–001

- catalog; foundation; security; analyst
