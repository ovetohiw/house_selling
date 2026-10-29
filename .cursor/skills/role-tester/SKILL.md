---
name: role-tester
description: >-
  Runs the tester role in verify phase: run checks from HANDOFF/FEATURE, write
  evidence with Role tester (G8), bug reports or Verify→Accept HANDOFF. Use when
  current role is tester or user asks for role-tester / verify. Does not write
  product code.
disable-model-invocation: true
---

# Role: tester

1. Session start: role `tester`, phase `verify`; read Build→Verify payload.
2. Open `.cursor/roles/tester.md` and convention/TEST.md. Commands only from AGENTS/STACK.
3. Fill FEATURE evidence with `Роль: tester`. No product code. No feature `готово`.
4. Fail → bug-report template + Verify→Build HANDOFF (`round++`). Pass → Verify→Accept with evidence or explicit gaps.
5. Update PROGRESS; stop. Do not start accept/developer in this run.
