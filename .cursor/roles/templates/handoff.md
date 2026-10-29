# Шаблоны payload hop

Скопировать нужную секцию в [../../HANDOFF.md](../../HANDOFF.md) как `payload`. Конверт — [../contracts.md](../contracts.md).

## Spec → Security

```markdown
- feature_ready: yes
- goal: 
- scope_in: 
- scope_out: 
- behavior_ok: yes
- acceptance_criteria_nonempty: yes
```

## Security → Build

```markdown
- must:
  - id: M1
    text: 
    convention_ref: 
- should:
  - id: S1
    text: 
- security_verdict: pass | blocked
- blocked_reason: 
```

## Build → Verify (с plan)

```markdown
- plan: <path>
- stage_id: 
- stage_dod_summary: 
- how_to_verify: 
- expected: 
```

## Build → Verify (без plan)

```markdown
- plan: none
- change_scope: 
- how_to_verify: 
- expected: 
```

## Verify → Build

```markdown
- bugs:
  - (см. bug-report.md — вложить поля сюда или ссылкой на блок ниже)
- round: 
```

## Verify → Accept

```markdown
- verify_verdict: pass | fail
- evidence:
  - criterion: 
    role: tester
    command: 
    result: 
    artifact: 
    session: 
- gaps:
  - 
```

## Accept → Build

```markdown
- failed_criteria:
  - id_or_text: 
    missing_evidence: 
- round: 
```

## Accept pass

```markdown
- gates_g1_g8: checked
- feature_status: готово
```
