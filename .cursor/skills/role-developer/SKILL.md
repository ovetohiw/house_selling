---
name: role-developer
description: >-
  Runs the developer role in build phase: one exec-plan stage (or FEATURE scope
  if no plan), honor security/bug HANDOFF payload, Build→Verify HANDOFF. Use when
  current role is developer or user asks for role-developer / build phase.
disable-model-invocation: true
---

# Role: developer

1. Session start: role `developer`, phase `build`; HANDOFF matches; read security/bug payload.
2. Open `.cursor/roles/developer.md`. If Exec plan path set → only current stage (Читать/Менять). If `Exec plan: нет` → FEATURE scope only.
3. Do not mark feature `готово`. Do not fill G8 evidence as tester. Do not start verify/accept after handoff in this run.
4. On stage DoD green: commit+push per AGENTS; write Build→Verify HANDOFF; PROGRESS next → tester; stop.
5. Mid-stage: leave stage status, **осталось** bullets, HANDOFF `to_role: developer` if not hopping.
