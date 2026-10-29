# План: Витрина «Каменный двор»

## Мета

- ID: house-showcase
- Тип: big-task
- Название: Витрина «Каменный двор»
- Дата: 2026-10-29
- FEATURE: `.cursor/FEATURE.md` (ID `house-showcase`)
- Путь папки: `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/`

## Цель

Публичный сегментированный сайт продажи квартир с дорожкой шагов от прибытия до записи на просмотр, каталогом с сортировками и скидками, картой комплексов, льготами, оценкой такси и Docker-развёртыванием.

## Скоуп

В скоупе:

- Дорожка UI-шагов и контракт поведения из FEATURE
- Каталог JSON + медиа в репо; заявки в SQLite
- Яндекс.Карта при ключе; пустое состояние без ключа
- Docker Compose + health
- Unit / интеграция / сквозной / health по уровням FEATURE

Вне скоупа:

- Оплата, бронь, кабинет, админка, CRM, почта
- Живой вызов такси и routing API Яндекса
- Ипотечный калькулятор, auth

## Карта контекста

Заполняется в фазе планирования. Обновлять только осознанным решением или через hot-fix.

- Ключевые файлы и границы модулей:
  - App Router Next.js: `/`, `/complexes`, `/complexes/[id]`, `/complexes/[id]/units/[unitId]`, `.../benefits`, `.../route`, `.../visit`
  - API: `GET /api/health`, эндпоинты каталога/дат/заявок по мере этапов (Route Handlers)
  - Каталог: `data/` (JSON комплексов, квартир, льгот, стартов маршрута)
  - Медиа: `public/` (фото Unsplash + `ATTRIBUTION.md`; SVG-планы)
  - UI-токены / шрифты: глобальные стили Tailwind + CSS-переменные языка «Ночной камень»
  - Шапка: телефон `+7 (495) 120-40-40`, `tel:+74951204040`
  - SQLite: файл заявок на томе Compose; доступ `better-sqlite3`
  - Docker: `Dockerfile`, `docker-compose.yml`, `.env.example` с `YANDEX_MAPS_API_KEY=CHANGE_ME`
- Контракты поведения (ссылка на FEATURE, не копия ТЗ): AC1–AC11 в `.cursor/FEATURE.md`
- Принятые решения по реализации:
  - Стек: монолит TypeScript + Next.js + Tailwind + Route Handlers + REST + SQLite + Docker Compose + npm + Vitest + Playwright + ESLint + Prettier (см. STACK)
  - Такси: `250 + 45 * ceil(km)` по прямой между стартом и комплексом
  - Даты записи: 21 день от переданной «сегодня»; исключить сб, вс, ср
  - Витрина: только `available`; в сиде 9 квартир, 1 недоступна
  - Сортировка по цене использует цену со скидкой, если скидка есть
  - Анимация: короткое появление при смене шага; при `prefers-reduced-motion` — мгновенно
- Ограничения стэка / конвенций, влияющие на этапы:
  - Не добавлять ORM/auth/очереди вне STACK
  - Секреты не в репо ([convention/SECURITY.md](../../../convention/SECURITY.md))
  - UI: refs пуст → язык «Ночной камень» уже зафиксирован; [UIDESIGN.md](../../../convention/UIDESIGN.md)
  - Слоты AGENTS заполняет foundation, когда команды реально работают

## Текущий шаг

Один этап. Id из decompose.

- Этап id: foundation
- Статус: в очереди

## Путь верификации

Сквозные проверки (команды из AGENTS.md, когда заполнены):

- После foundation: поднять Compose, `GET /api/health` → 200
- Unit: каталог, формула такси, генерация открытых дат (этапы catalog / route-taxi / visit)
- Интеграция: POST заявки, отказ на закрытую дату
- Сквозной: Playwright от `/` до сохранённой заявки, две ширины (этап motion-widths)
- Health-check: слот AGENTS

## Риски и блокеры

- Без реального ключа Яндекс.Карт AC3 (метка) проверяется только при ключе в среде; иначе AC4
- better-sqlite3 в Docker требует native build в образе
- Слоты AGENTS пусты до foundation

## Лог прогресса

- Сессия: 2026-10-29 analyst spec
  - Этап id: —
  - Сделано: plan + decompose созданы; FEATURE заполнен; hop Spec→Security
  - Осталось: исполнение с foundation после Security→Build

## Открытые решения

- Язык «Ночной камень» без refs — принято (см. FEATURE риски)
- Демо-телефон и мок-координаты — принято
- better-sqlite3 без ORM в STACK — принято
