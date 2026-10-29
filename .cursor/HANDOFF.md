# HANDOFF

Актуальный контракт передачи между ролями (одна передача «сейчас»). Канон — [roles/contracts.md](./roles/contracts.md). Шаблоны payload — [roles/templates/handoff.md](./roles/templates/handoff.md).

Неполный конверт → hard; фазу/`to_role` не менять.

## Конверт

- from_role: analyst
- to_role: security
- feature_id: house-showcase
- phase: spec
- round: 0
- verdict: pass
- summary: Контракт витрины «Каменный двор» заполнен (скоуп, поведение, AC1–AC11, уровни verify); big-task plan и decompose с восемью этапами в очереди; стэк отмечен. Продуктовый код не писался.
- blockers: 
- written_at: 2026-10-29 / session-001-analyst-spec

## Payload

### Spec → Security

- feature_ready: yes
- goal: Сегментированный сайт продажи квартир «Каменный двор» с дорожкой шагов до записи на просмотр, каталогом, картой, льготами, оценкой такси и Docker Compose
- scope_in: дорожка `/`→complexes→витрина→квартира→льготы→маршрут→запись; телефон в шапке; сортировки; скидки; Яндекс.Карта при ключе; SQLite заявки; анимация шага; Compose + health
- scope_out: оплата, бронь, кабинет, админка, CRM/почта, живой вызов такси, routing API Яндекса, ипотечный калькулятор, auth
- behavior_ok: yes
- acceptance_criteria_nonempty: yes
