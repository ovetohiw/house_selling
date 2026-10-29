---
name: role-analyst
description: >-
  Runs the analyst Spec role: fill FEATURE contract (goal, scope, behavior,
  acceptance criteria), set pipeline to spec, write Spec→Security HANDOFF.
  Use when bootstrapping a feature, current role is analyst/N/A, or user asks
  for role-analyst / ТЗ / spec phase.
disable-model-invocation: true
---

# Role: analyst (Spec)

1. Follow session start in AGENTS.md and `.cursor/roles/index.md` (bootstrap if role N/A).
2. Open `.cursor/roles/analyst.md` (Spec). Do **not** write product code.
3. Fill `.cursor/FEATURE.md` until acceptance criteria and out-of-scope are non-empty. UI → refs + UIDESIGN + STACK.
4. Set `Пайплайн: spec`, PROGRESS `Текущая роль: analyst`.
5. Before hop pass: Discipline checklist (no invented success; no silent gaps).
6. Write `.cursor/HANDOFF.md` Spec→Security from `.cursor/roles/contracts.md` / templates/handoff.md.
7. Update PROGRESS next step → security; stop. Do not start security in this run.
