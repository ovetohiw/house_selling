# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; `/` прибытие
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: developer
- Фаза пайплайна: build
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `25f5c23` pushed to `origin/main`
- Этап catalog: `готово` + tester pass; plan указатель → `complexes` / в очереди
- Soft: mid-stage Verify→developer (не Accept), пока план не закрыт; foundation без независимого tester
- Следующий лучший шаг: роль developer / build — этап `complexes`

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 005

- Дата: 2026-10-29
- Цель: tester — verify этапа catalog
- Роль / фаза: tester / verify → hop Build (complexes)
- Сделано:
  - `npm test` 4/4
  - spot-check: 3 ЖК, 9 квартир, hidden `lk-45`, 8 available; media+ATTRIBUTION
  - FEATURE Unit + доказательства `Роль: tester`; HANDOFF pass → developer
- Запущенная верификация: `npm test` pass
- Известный риск: foundation без независимого tester; G8 фичи частичный (только Unit/catalog)
- Осталось: developer — complexes
- Следующий лучший шаг: developer этап complexes
- Delivered: доказательства + handoff `25f5c23` на `origin/main`

### Сессия 004

- Delivered: catalog `883a3e9` / PROGRESS `ad8d0cb`

### Сессия 003–001

- foundation; security; analyst spec
