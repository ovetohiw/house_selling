# Использование этого шаблона

Репозиторий — каркас AI-процесса для новых проектов (GitHub/Cursor template), не описание конкретного продукта.

## Что копируется

- `AGENTS.md` — операционка агента (корень репо)
- `.cursor/` — FEATURE, PROGRESS, HANDOFF, STACK, roles, convention, exec-plans, refs
- `README.md` — **заглушка продукта** (её заполняет уже целевой проект)

Карта процесса после клонирования: [INDEX.md](./INDEX.md).

## После создания проекта из шаблона

1. Заполнить корневой `README.md` под продукт (имя, запуск, деплой). Не переносить туда роли/DoD/пайплайн.
2. Заполнить [STACK.md](./STACK.md).
3. Заполнить слоты verify в `AGENTS.md`, когда появятся команды.
4. Bootstrap первой фичи: роль `analyst`, `Пайплайн: spec` — см. [roles/index.md](./roles/index.md).

## Где канон процесса

- Операционка и DoD — `AGENTS.md`
- Карта документов — [INDEX.md](./INDEX.md)
- Роли и handoff — [roles/index.md](./roles/index.md), [HANDOFF.md](./HANDOFF.md)

Процесс через README не правят.

## Этот файл

`TEMPLATE.md` можно оставить в `.cursor/` у потомка (справка) или удалить — на работу агента не влияет.
