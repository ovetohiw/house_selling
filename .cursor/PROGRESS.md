# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: слоты в AGENTS.md пока пусты (заполнит этап foundation)
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: security
- Фаза пайплайна: security
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: sync ok, `main` = `origin/main` (fetch 2026-10-29)
- Закрытие объёма: Spec pass → Security; commit документов без push
- Следующий лучший шаг: роль security — заполнить must/should по `.cursor/roles/templates/security-checklist.md`, перенести в FEATURE «Ограничения ИБ», hop Security→Build

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 001

- Дата: 2026-10-29
- Цель: bootstrap analyst — контракт витрины «Каменный двор» и big-task план
- Роль / фаза: analyst / spec → hop Security
- Сделано:
  - sync remote (чисто, не behind/ahead)
  - STACK: монолит TypeScript Next.js Tailwind Route Handlers REST SQLite Docker Compose npm Vitest Playwright ESLint Prettier
  - FEATURE `house-showcase`: скоуп, поведение, AC1–AC11, уровни verify; Exec plan путь
  - big-task plan + decompose: этапы foundation…motion-widths, все в очереди; текущий шаг foundation
  - HANDOFF Spec→Security pass
- Запущенная верификация: N/A (код не писался)
- Известный риск: слоты AGENTS пусты до foundation; проверка метки карты без ключа ограничена AC4
- Осталось: security must/should; затем build с этапа foundation
- Следующий лучший шаг: security заполняет must/should и передаёт Build
- Delivered: документы контракта/плана закоммичены локально (без push)
