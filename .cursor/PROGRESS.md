# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; `npm run test:e2e`
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: developer
- Фаза пайплайна: build
- HANDOFF round (verify↔build / accept↔build): 0 / 1
- Текущий блокер: нет
- Remote: `main` @ `7de04e2` (локальные правки AC10 в работе)
- Этап: fix AC10 Compose image (вне decompose stage id — Accept→Build)
- Осталось: зелёный `docker compose up --build`; `/complexes` 200; health 200; handoff → tester
- Следующий лучший шаг: developer — добить Compose rebuild и hop Verify

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 017

- Дата: 2026-10-29
- Цель: tester — verify motion-widths + закрытие дыр AC/must
- Роль / фаза: tester / verify → hop Accept
- Сделано: `npm test` 15/15; `npm run lint`; `npm run test:e2e` 4/4; curl AC1–AC3 на :3013; Compose health 200; M1–M5 доказательства; FEATURE обновлён; HANDOFF → accept
- Запущенная верификация: e2e 4/4; unit 15/15; health Compose; AC1–3 HTML
- Осталось: Accept; закрыть AC10 (rebuild Compose)
- Следующий лучший шаг: accept — сверка; AC10 дыра
- Delivered: доказательства в FEATURE (commit после Accept hop / вместе с handoff)

### Сессия 016–001

- motion-widths … analyst
