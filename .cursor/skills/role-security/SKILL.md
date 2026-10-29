---
name: role-security
description: >-
  Runs the security role: feature must/should checklist, FEATURE ИБ section,
  Security→Build HANDOFF (pass or blocked). Use when pipeline phase is security
  or user asks for role-security / ИБ gate before build.
disable-model-invocation: true
---

# Role: security

1. Session start: PROGRESS role `security`; HANDOFF `to_role: security`.
2. Open `.cursor/roles/security.md` and `.cursor/convention/SECURITY.md` (do not rewrite SECURITY into FEATURE).
3. Fill must/should via `.cursor/roles/templates/security-checklist.md` into FEATURE «Ограничения ИБ».
4. No product code. Verdict `pass` or `blocked` with reason.
5. Write HANDOFF Security→Build; update PROGRESS; stop.
