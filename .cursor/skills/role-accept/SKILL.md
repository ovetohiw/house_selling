---
name: role-accept
description: >-
  Runs analyst Accept: check every acceptance criterion against evidence, verify
  gates G1–G8, Accept pass (to_role none) or Accept→Build fail list. Use when
  phase is accept or user asks for role-accept. Does not stamp pass from HANDOFF
  summary alone; no product code; no self-close with build/verify in same session.
disable-model-invocation: true
---

# Role: accept (analyst)

1. Session start: role `accept` (or analyst in accept phase); HANDOFF from tester.
2. Open `.cursor/roles/analyst.md` (Accept). Check **each** criterion evidence + G1–G8.
3. Before pass: Discipline + gates checklist (G6 HANDOFF, G7 musts, G8 tester). Summary-only pass forbidden.
4. Pass → FEATURE status path to готово only if all gates checked; HANDOFF `to_role: none`, `verdict: pass`. Fail → Accept→Build with failed criteria; `round++`.
5. Update PROGRESS; stop. Never combine with developer/tester pass in this same session.
