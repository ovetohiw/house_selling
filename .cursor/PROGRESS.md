# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `npm test`; `npm run test:e2e`
- Текущая незавершённая фича с наивысшим приоритетом: нет (house-showcase `готово`)
- Текущая роль: N/A
- Фаза пайплайна: N/A
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `e2f6a3f` pushed to `origin/main`
- Следующий лучший шаг: bootstrap новой фичи (analyst / `Пайплайн: spec`) или ожидание задачи от человека

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 017

- Дата: 2026-10-29
- Цель: tester motion-widths → Accept fail AC10 → developer Compose fix → tester AC10 → Accept pass
- Роль / фаза: tester → accept → developer → tester → accept / closed
- Сделано: e2e AC11; AC1–3; M1–M5; Accept fail AC10; Dockerfile yandex mirror; Compose rebuild; AC10+базовая; G1–G8; completed+ranking B
- Запущенная верификация: e2e 4/4; Vitest 15/15; Compose healthy; health 200; /complexes 200
- Осталось: нет
- Следующий лучший шаг: N/A — ждать новую фичу / analyst bootstrap
- Delivered: commit+push `e2f6a3f` на `origin/main`

### Сессия 016–001

- motion-widths … analyst
