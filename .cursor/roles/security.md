# Роль: security

Фаза: `security`. Skill: `role-security`. Канон домена — [../convention/SECURITY.md](../convention/SECURITY.md) (+ DB/NETWORK/LOGGING по матрице convention). Здесь не пересказывать SECURITY.md.

## Вход

HANDOFF Spec→Security; FEATURE с непустыми критериями.

## Делать

- Выписать must / should к **этой** фиче ([templates/security-checklist.md](./templates/security-checklist.md)).
- Записать must/should в секцию ИБ FEATURE.
- Вердикт `pass` (можно в build) или `blocked` (причина в blockers).
- Не писать продуктовый код. Не ослаблять must ради удобства реализации.

## Выход / DoD роли

Чеклист в FEATURE; HANDOFF Security→Build с must/should и вердиктом.

## Типичные нарушения

- Пустой must при фиче с auth/секретами/вводом с клиента.
- `pass` при `blocked`-смысле («потом поправим»).
- Копипаста всего SECURITY.md вместо проверяемых must к фиче.

См. Discipline в [index.md](./index.md).
