# PROGRESS.md

Handoff между сессиями: проверенное состояние, роль, фаза, блокер, следующий шаг, краткий лог.
Не дублируйте контракт фичи ([FEATURE.md](FEATURE.md)), этапы плана (`.cursor/exec-plans/`) и оценки качества ([ranking](exec-plans/ranking/index.md)).
Актуальный hop — [HANDOFF.md](HANDOFF.md); канон ролей — [roles/index.md](roles/index.md).

## Текущее проверенное состояние

- Стандартный путь старта: по AGENTS.md (sync → PROGRESS → HANDOFF → FEATURE → роль → [developer+build] plan/этап); карта — [INDEX.md](INDEX.md); роли — [roles/index.md](roles/index.md); convention — [convention/index.md](convention/index.md)
- Стандартный путь верификации: `docker compose up --build`; `GET /api/health`; `/` прибытие (см. AGENTS слоты)
- Текущая незавершённая фича с наивысшим приоритетом: house-showcase — Витрина «Каменный двор»
- Текущая роль: tester
- Фаза пайплайна: verify
- HANDOFF round (verify↔build / accept↔build): 0 / 0
- Текущий блокер: нет
- Remote: `main` @ `aaf5ef2` pushed to `origin/main`
- Этап foundation: `готово` (DoD заполнен); указатель plan → `catalog` / в очереди (не стартовать до Verify foundation и следующего Build)
- Следующий лучший шаг: роль tester — проверить DoD этапа foundation по HANDOFF (Compose, health, `/`)

### Обязательный минимум конца сессии

При активной работе заполнить перед стопом: роль и фаза; mid-stage developer — этап id, статус, **осталось**; HANDOFF при смене роли (или mid-stage с `to_role` = текущая); следующий шаг одной строкой. Пустой следующий шаг при активной фиче = негоден handoff → hard на старте следующей сессии.

## Лог сессий

### Сессия 003

- Дата: 2026-10-29
- Цель: developer — этап foundation
- Роль / фаза: developer / build → hop Verify
- Сделано:
  - Next.js App Router + Tailwind + ESLint + Prettier; Next 15.5.7
  - токены «Ночной камень», Fraunces/Outfit + Noto fallback, шапка с телефоном
  - `/` прибытие; `GET /api/health`; Dockerfile + Compose + `.env.example` CHANGE_ME
  - слоты AGENTS и README; DoD foundation зелёный
- Запущенная верификация: `docker compose up --build` → healthy; health 200; HTML `/` с брендом/телефоном/CTA; `npm run lint` exit 0
- Известный риск: npm warn о следующем advisory поверх 15.5.7; фото Unsplash отложены на catalog (SVG-герой)
- Осталось: tester verify foundation; затем Build catalog
- Следующий лучший шаг: tester проверяет foundation по HANDOFF
- Delivered: commit+push `aaf5ef2` на `origin/main`

### Сессия 002

- Дата: 2026-10-29
- Цель: security — must/should ИБ для house-showcase, hop Build
- Роль / фаза: security / security → hop Build
- Сделано: must M1–M5, should S1–S3; FEATURE ИБ; HANDOFF Security→Build pass
- Delivered: документы ИБ (вошли в commit foundation)

### Сессия 001

- Дата: 2026-10-29
- Цель: bootstrap analyst — контракт витрины «Каменный двор» и big-task план
- Роль / фаза: analyst / spec → hop Security
- Delivered: документы контракта/плана
