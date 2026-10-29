# Процесс AI-разработки

Шаблон процесса: одна активная фича, роли агентов, exec plans, доказательства готовности, оценка закрытой работы.

Карта документов ниже. Команды запуска и проверки — в [AGENTS.md](../AGENTS.md), когда заполнены. Корневой README — описание **продукта**, не процесса. Как развернуть этот шаблон в новый репо — [TEMPLATE.md](TEMPLATE.md).

## Карта документов

| Путь | Роль |
|------|------|
| [AGENTS.md](../AGENTS.md) | Операционка: sync, старт сессии (роль→HANDOFF→FEATURE→этап), soft/hard, DoD G1–G8, слоты verify |
| [PROGRESS.md](PROGRESS.md) | Handoff сессии: роль, фаза, блокер, следующий шаг, лог |
| [HANDOFF.md](HANDOFF.md) | Актуальный контракт передачи между ролями |
| [FEATURE.md](FEATURE.md) | Контракт фичи, пайплайн, ИБ must, доказательства DoD |
| [PLANS.md](PLANS.md) | Политика: когда нужен exec plan, где живёт, как закрывать |
| [STACK.md](STACK.md) | Выбранный стэк технологий |
| [roles/](roles/index.md) | Пайплайн ролей, Discipline, contracts, bootstrap (не domain convention) |
| [exec-plans/](exec-plans/index.md) | Шаблоны планов; этап только developer@build |
| [exec-plans/ranking/](exec-plans/ranking/index.md) | Оценка A–D + след пайплайна |
| [refs/](refs/README.md) | Визуальные референсы UI (пусто допустимо) |
| [convention/](convention/index.md) | Доменные ограничения (SECURITY, TEST, …); не путать с roles |
| [TEMPLATE.md](TEMPLATE.md) | Bootstrap репозитория из этого шаблона (не канон дневной работы) |

## Старт

1. Для агента — чеклист в [AGENTS.md](../AGENTS.md).
2. Для человека — README под продукт; STACK и слоты AGENTS; затем FEATURE / PLANS. Новый проект из шаблона — [TEMPLATE.md](TEMPLATE.md).
