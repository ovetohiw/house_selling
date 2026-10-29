# Результат: Витрина «Каменный двор»

## Мета

- Дата завершения: 2026-10-29
- Тип: big-task
- ID: house-showcase
- Название: Витрина «Каменный двор»

## Цель

Публичный сегментированный сайт продажи квартир с дорожкой шагов от прибытия до записи на просмотр, каталогом, картой, льготами, оценкой такси и Docker-развёртыванием.

## Принятые решения

- Стек Next.js 15.5.7 + Tailwind + SQLite better-sqlite3 + Vitest + Playwright + Docker Compose
- Язык UI «Ночной камень»; телефон `+7 (495) 120-40-40`
- Такси `250 + 45×ceil(km)`; даты записи 21 день без сб/вс/ср
- Карта Яндекса только при ключе из env; иначе пустое состояние
- Dockerfile deps: apt через `mirror.yandex.ru` + retry (deb.debian.org был недоступен)

## Hot-fixes

- ID / название: ac10-compose-apt-mirror
  - Этап родителя: Accept→Build round 1 (после motion-widths)
  - Суть решения: заменить источники apt на mirror.yandex.ru с retry, чтобы `docker compose up --build` собирал better-sqlite3
  - Верификация: Compose Up healthy; GET `/api/health` 200; GET `/complexes` 200 с тремя ЖК (session-017-tester-ac10)

## Верификация

- Гейты AGENTS G1–G8 пройдены: да
- Источник доказательств FEATURE: `.cursor/FEATURE.md` «Доказательства DoD»
- Критерий / уровень: AC1–AC11 + Unit/Интеграция/Сквозной/Health/Базовая + M1–M5
  - Команда / действие: см. строки доказательств FEATURE (tester sessions 007–017)
  - Результат: все критерии отмечены; e2e 4/4; Vitest 15/15; Compose healthy
  - Артефакт: FEATURE.md; Playwright; Vitest; docker house_selling-web-1
  - Дата / сессия: 2026-10-29 / session-017-accept
  - Роль: tester (прогоны) / accept (сверка гейтов)

## Пайплайн ролей

- G6 (пайплайн / HANDOFF pass): да
- G7 (security must): да
- G8 (tester verify): да
- Круги verify↔build: 0 (mid-stage soft hops по этапам; финальный fail не было)
- Круги accept↔build: 1 (AC10 Compose)

## Оценка качества

- Итог: B
- Верификация: полные схемы доказательств; сквозной и health зелёные; остаточные риски записаны (метка карты без ключа; пустой календарь)
- Пайплайн ролей: G6–G8 закрыты; 1 круг Accept→Build по AC10
- Архитектура / границы: в рамках STACK/convention; без второго каркаса
- Читаемость для агента: plan/decompose/FEATURE/PROGRESS достаточны
- Стабильность тестов: Vitest 15/15; Playwright 4/4 без skip
- Ключевые пробелы: нет прогона клика по метке карты; Dockerfile завязан на зеркало apt
- Запись в ranking: .cursor/exec-plans/ranking/index.md

## Остаточные риски

- Метка Яндекс.Карт не проверена без реального ключа
- Ветка UI пустого календаря не достигнута при горизонте 21 день
- Сборка Docker зависит от доступности apt-зеркала

## Источники inprogress

- `.cursor/exec-plans/inprogress/big-task/2026-10-29-house-showcase/` (удалена при закрытии)
