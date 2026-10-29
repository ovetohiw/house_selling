# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; `/` прибытие
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: tester
- Фаза пайплайна: verify
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: push после catalog (см. лог)
- Этап catalog: `готово`; указатель plan → `complexes` / в очереди
- Soft: mid-stage Verify foundation ранее отложен пинком; G8 фичи не закрыт
- Следующий лучший шаг: роль tester — `npm test` по HANDOFF этапа catalog

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 004

- Дата: 2026-10-29
- Цель: developer — этап catalog
- Роль / фаза: developer / build → hop Verify
- Сделано:
  - data: complexes, units (9/1 hidden), benefits, route-starts
  - public/media Unsplash + SVG plans + ATTRIBUTION
  - lib/catalog + Vitest 4/4; AGENTS slot `npm test`
- Запущенная верификация: `npm test` pass; `npm run build` exit 0
- Известный риск: Verify foundation по-прежнему без независимого tester (отложен пинком)
- Осталось: tester catalog; затем Build complexes
- Следующий лучший шаг: tester проверяет catalog
- Delivered: commit+push (SHA ниже)

### Сессия 003

- Delivered: foundation `aaf5ef2` / PROGRESS `a7c547b`

### Сессия 002–001

- security → Build; analyst spec
