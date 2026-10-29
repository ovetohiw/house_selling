# Контракты handoff между ролями

Канон типов передачи. Актуальный экземпляр — [../HANDOFF.md](../HANDOFF.md). Шаблоны payload — [templates/handoff.md](./templates/handoff.md). Неполный конверт или пустой обязательный payload → **не менять** фазу/`to_role`; hard в [../PROGRESS.md](../PROGRESS.md).

## Общий конверт

| Поле | Требование |
|------|------------|
| `from_role` | analyst \| security \| developer \| tester \| accept |
| `to_role` | роль-получатель или `none` (пайплайн закрыт) |
| `feature_id` | ID из FEATURE |
| `phase` | spec \| security \| build \| verify \| accept |
| `round` | счётчик для лимитируемых hop’ов (verify↔build, accept↔build) |
| `verdict` | `pass` \| `fail` \| `blocked` |
| `summary` | 1–3 предложения (не заменяет payload) |
| `blockers` | пусто или список |
| `payload` | поля hop ниже |
| `written_at` | дата / сессия |

## Hop → payload

| Hop | from → to | Обязательный payload |
|-----|-----------|----------------------|
| Spec → Security | analyst → security | FEATURE готов: цель, скоуп, поведение, критерии приёмки непустые; вне скоупа задано |
| Security → Build | security → developer | must[] / should[]; `pass` или `blocked` + причина; ссылки на convention |
| Build → Verify | developer → tester | **с plan:** этап id, DoD этапа, как проверить, ожидаемое; **без plan:** `plan: none`, скоуп FEATURE/diff, как проверить, ожидаемое |
| Verify → Build | tester → developer | bug-report ([templates/bug-report.md](./templates/bug-report.md)); `round++` |
| Verify → Accept | tester → accept | доказательства по критериям **или** список дыр; роль/сессия `tester` |
| Accept → Build | accept → developer | failed-критерии (id/текст + что не доказано); `round++` |
| Accept pass | accept → none | гейты G1–G8 в FEATURE отмечены; `verdict: pass`, `to_role: none` |

## Правила

- Summary без полного payload = невалидный hop.
- `blocked` / `fail` не двигают пайплайн вперёд.
- После успешного hop: обновить PROGRESS (`Текущая роль` = `to_role`, фаза), FEATURE `Пайплайн:`, стоп сессии.
- Нет task-backlog и архива handoff-файлов: только HANDOFF.md + строка в логе PROGRESS.
