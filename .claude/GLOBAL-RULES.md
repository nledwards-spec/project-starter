# Global Rules for All Code Projects

> **Single source of truth for cross-project standards.**
> Referenced from every repo's CLAUDE.md. Read this file at the start of every session.
> Maintained by Cowork. Lives at: `~/Library/CloudStorage/Dropbox/AI Cowork Hub/code-standards/GLOBAL-RULES.md`

Last updated: 2026-04-22

---

## Working with Nick (read this first)

Nick is not a coder. He reviews in a browser. Nothing else counts as review.

### Do it yourself first.

Run the tests, curl the endpoint, read the logs, query the DB, restart PM2. The Mini tools cover almost everything. Nick CAN open a terminal, paste a Railway log, or set an API key, but only after you've exhausted your DIY options. Say what you tried.

### Showing Nick a change

**Default: push to default branch.** Railway redeploys, PM2 restarts. Tell Nick the URL and what to look at. If it breaks main, revert. Don't engineer around the possibility.

**Exception: run the branch on a spare Mini port.** Only for genuine critical forks where two approaches need side-by-side comparison. Reverting is the safety net, not branch hosting.

### Never ask

- "Can you try this locally?" / "Run this command?"
- "Shall I merge?" / "Ready to ship?" / "Want me to push?"

If your self-check passes, push. That's the gate.

---

## Build-time estimates

**Claude time is 10% of human-coding instinct.** Don't pad. G4 / Cowork-decision escalations pause Claude time but add calendar time — flag separately, never bake into the estimate.

---

## Quality Standards

1. **Right first time.** Every sprint ships complete, working features. No half-wired buttons (UI without backend), no orphaned database fields (schema without UI), no unresolved merge fields, no silent failures. If a sprint adds a UI element that triggers an action, the backend route, error handling, user feedback, and smoke test must all ship in the same sprint. A half-built feature is worse than no feature.

2. **Never kill a live app.** The existing version must keep working throughout any rebuild. Run new versions on different ports. Don't delete, overwrite, or break any file the current app depends on until the rebuild has full feature parity AND Nick has signed it off. For Railway-deployed projects, never push to the deploy branch unless Nick explicitly says to.

3. **Never overwrite user-edited files.** Always version up (v1, v2, v3). If uncertain whether Nick has edited a file, create a new version.

4. **Never punt setup to the user.** If a sprint introduces an integration (API key, database connection, OAuth token, service config), that sprint must also complete the setup or flag it as a hard blocker. Shipping a "setup endpoint" or leaving a curl command in the README is not acceptable.

5. **Never create new Notion databases.** Nick has existing databases. All Code projects that need Notion data must connect to these via IDs in `.env.local`. If a feature needs a field that doesn't exist, add a property to the existing database. Database IDs:

   | Database | ID |
   |----------|----|
   | Tasks | `76de0711-20a9-4198-bedc-6e85c692e8b4` |
   | Projects | `80ad5501-78d7-4ce6-9809-ff15caa6ea4f` |
   | Cowork Queue | `90aa78e1-c54d-45f6-b76d-f56c168ecf2e` |
   | Inbox | `ffed44df-b740-40e8-b5b6-d83c41ff092f` |
   | Notes | `23566166-a6fd-46fc-8d8d-faa6fbc4e7e7` |

## Shared App Disciplines

Three principles emerged as universal across the north-star walk (2026-04-22). Every Code project must embody these. They are product-level disciplines, not build-process rules.

### 1. Data integrity over cleverness

Applies to every project that surfaces, stores, or acts on data (which is all of them).

- Never invent. If a source is uncertain, say so. Missing data is always preferable to fabricated data.
- Never guess at things that matter: contact details, renewal dates, exclusions, stages, warmth signals, tax figures, expert statuses, relationships.
- Never auto-action on thin data. If confidence is low, surface for a human decision rather than proceed silently.
- Every number, fact, or recommendation the app shows should trace back to a real source: a statement, a record, a search result, a rule. Hallucinated filler is a bug, not a feature.

### 2. Modular by design

Applies especially to multi-scenario tools (Nurture Hub, CG Tool, Inner Circle), but is a healthy default for any app that might serve more than one use case.

- Different scenarios (recruitment types, BD plays, outreach patterns) are supported by configuration or swappable modules, not by forking the code.
- Naming, schema, and structure should stay neutral enough to extend without a rewrite. Don't bake a specific scenario's language into the core.
- Inner Circle's forward-compatibility with Halcyon module B2 is the canonical example: the data model must fold in without structural rework.

### 3. The workflow can't break

Applies most critically to Railway-deployed projects (Nurture Hub, CG Tool) and any app with live users or active campaigns.

- Once a workflow is live, no bug, deploy, or edge case should silently drop data, lose messages, corrupt state, or double-action.
- Stability beats new features. A flashier but flakier version is a regression.
- Every change that touches a live flow must pass the pre-merge self-check (see Git Rules section). Revert is the safety net, not a recovery plan.

These three are checked in every `project-check` audit as drift indicators. If the app stops embodying them, the audit flags it.

## Working Mode

### Interactive by default, dispatch by fit

Default: Nick and one Claude, co-building in a live session. This is the working mode for features, debugging, UX work, Railway-deployed changes needing mid-flight verification, and anything under ~20 minutes. Direct decisions happen in chat; no written brief.

Claude MAY dispatch work without asking when ALL of:
- **Mechanical** — execution-heavy, decision-light (bulk sweeps, mass renames, migrations with clear spec, dependency updates across many files, repetitive fixes)
- **Long** — would leave Nick idle for >~20 min if he watched interactively
- **Scoped** — "done" is clear at outset; no mid-flight design decisions expected
- **Safe** — no irreversible touches to production data
- **Pre-dispatch-check passes on the target machine** (clean tree, free RAM ≥4GB, no other `claude` process running)

Claude MUST stay interactive (never dispatch) when:
- Design or feature shaping, UX work — decisions emerge during build
- Debugging — iterative reasoning with Nick
- Railway-deployed changes needing mid-flight verification

Claude MUST surface to Nick before dispatching when:
- Unsure whether criteria are met (default: interactive)
- Pre-dispatch-check fails — say why, suggest an alternative
- First time running a novel dispatch pattern

### One Sonnet per machine

Hard cap. `pre-dispatch-check.sh` enforces it via `pgrep`. No same-machine fanout. If you'd need two Sonnets on one machine to make a plan work, the plan is wrong.

### No sprint briefs

Interactive work happens in chat: discuss, decide, build. For rare dispatched work, a one-paragraph problem statement is the maximum; if it needs more context than that to dispatch safely, it shouldn't be dispatched. UI work with visual intent goes via HTML mockup; the mockup IS the spec. Architectural design docs live in `.claude/scope/` and are rare, reference material, not dispatch artifacts.

Sprint-brief templates, "Detailed Instructions" sections, and "Suggested Approach" fields are dispatch-era infrastructure. Do not produce them.

### Direct feedback is tracked, not implied

When Nick gives a list of fixes in a session, create explicit TodoWrite items, one per request. Work through them visibly. Before any merge or wrap:
- Re-read the session for Nick's explicit fix requests.
- Verify each against the actual code change, not "I made a plausible edit".
- Any item not verified doesn't count as done.

"Verified" means a specific act:
- **Code fix**: re-read the changed code after edit, confirm it implements the ask.
- **UI fix**: inspect the rendered output (DOM / screenshot) — fix is visible.
- **Backend fix**: smoke test passes OR trace data flow manually.
- **Bug fix**: reproduce the bug against pre-fix state if possible, confirm the fix breaks the repro.

## Git Rules

Nick cannot meaningfully code-review diffs. That shapes the whole model. The gate is Railway + use, not review ceremony.

### Ship direct. One path for every repo.

Every repo ships directly to its default branch (`main` or `master`). Every commit, interactive or dispatched, goes to the default branch and pushes. No feature branches. No PRs as a default. No "should I merge?" questions.

Exception: use a feature branch ONLY when two sprints genuinely need to work on the same files in parallel. The branch is ephemeral, merge back to the default branch when the conflict window closes. Don't persist it.

When something breaks: `git revert <sha>` and push. Revert is the rollback mechanism.

### Pre-merge self-check (Railway-deployed repos: `nurture-hub`, `expert-recruitment`)

Before pushing to the default branch on any Railway-deployed repo, Claude runs through this check:

- **New HTTP endpoints**: access control applied? (auth required, correct scope)
- **New tests with mocks**: every mock has explicit `assert_called` / `assert_called_once_with` OR returns a distinctive sentinel only the mock path can produce? (See Testing section.)
- **Smoke tests**: no live external API calls? Route-existence checks only?
- **New DB columns/indexes**: migration ordering correct? Backfill behaviour documented?
- **Constants**: no duplicated definitions? (If one already exists, use it.)
- **Nick's asks this session**: every explicit fix request verified per the rules above?

Unverified items block the push. Fix them in the session, then push.

Pre-merge tag before any push to default on Railway-deployed repos: `pre-merge-{short-desc}`. Makes "ship it, we can revert" cheap and credible.

### Before any commit (universal)

Run `git status --porcelain`. If the tree is dirty with changes YOU did not make this session: STOP. Surface to Nick. Options:
- Commit the pre-existing changes first (with Nick's guidance).
- Stash with a descriptive name.
- Abandon your change until the tree is clean.

Silently auto-stashing or blindly `git add .`-ing pre-existing work is how the 20-repo triage happened. Don't repeat it.

### `/review-pr` as optional escape hatch

`/review-pr {N}` survives as a manual tool. Use it when Nick (or Claude) wants a second pair of eyes on something spicy: big migration, new auth flow, code that touches money or permissions. Not part of any automation. Never required.

### What Claudes must NEVER ask Nick

- "Should I use a branch for this?" No. Ship direct.
- "Should I open a PR?" No, unless a conflict window genuinely requires one.
- "Is this ready to ship?" Just ship. If it's wrong, Nick finds out by using the app.

Claudes SHOULD surface:
- "Pre-merge self-check flagged [specific issue]." (Fix it, then push.)
- "This change touches production data or is irreversible, confirm before I proceed?"
- "Two sprints are about to collide on these files, serialise or branch temporarily."
- "Your ask [X] isn't fully verified, here's what I did, here's what's outstanding."

### Update each repo's CLAUDE.md

If a change contradicts this file, update the repo's CLAUDE.md in the same commit.

## Testing

### Test Authoring — mocks must be verified to intercept

When a sprint test mocks a method on a client class, the class's `__init__` must be reachable first. If the constructor has pre-flight checks (API keys, DB URLs, env guards), the test file MUST set the required env vars before the mock takes effect.

Do this at the top of every new `tests/sprints/test_sprint_*.py`:

```python
import os
os.environ.setdefault("ANTHROPIC_API_KEY", "test-fake-key")
os.environ.setdefault("APOLLO_API_KEY", "test-fake-key")
os.environ.setdefault("HEYREACH_API_KEY", "test-fake-key")
# plus DATABASE_URL if the test hits db.py
```

**Tests that pass for the wrong reason are worse than tests that fail.** Every mock in a sprint test must be verified to have actually intercepted: either assert `mock.assert_called()` / `mock.assert_called_once_with(...)`, or return a distinctive sentinel from the mock that only the mock path can produce. A bare `assert response.ok == True` does not prove the mock ran, a constructor exception caught by a try/except can produce the same response shape via the error path.

### Smoke tests

- Smoke tests for new features go in `tests/sprints/test_sprint_{name}.py`.
- Run existing smoke tests before pushing.
- No live external API calls in smoke tests. Use mocks with the verification rule above, or route-existence checks.
- **Acceptance criteria describe production behaviour**, not localhost. "Verified on localhost" is not sufficient evidence for Railway-deployed projects.

## Port Allocation

Every project has an assigned port block. Never use framework defaults (Vite 5173, Streamlit 8501, Next.js 3000). Pin ports in config files.

| Block | Project | Frontend | Backend | Stack |
|-------|---------|----------|---------|-------|
| 3100-3109 | Roci / The Bridge | 3100 | - | Next.js |
| 3200-3209 | Halcyon | 3200 | 3201 | Vite + FastAPI |
| 3300-3309 | Wealth Compass | 3300 | 3301 | Vite + FastAPI |
| 3400-3409 | Armchair Saver | 3400 | 3401 | Vite + FastAPI |
| 3500-3509 | Event Scout | 3500 | - | Streamlit |
| 3600-3609 | Holiday Planner | 3600 | - | Streamlit |
| 3700-3709 | Inner Circle | 3700 | - | Next.js |
| 8506 | Nurture Hub | 8506 | - | Streamlit on Railway |
| 8514 | CG Tool (expert-recruitment) | 8514 | - | Streamlit on Railway |

Convention: x0 = frontend, x1 = backend/API, x2-x9 = spare. Full map at `~/Library/CloudStorage/Dropbox/AI Cowork Hub/Technical/port-map.md`.

## Local vs Railway Testing (Railway-deployed projects only)

Applies to `nurture-hub` and `expert-recruitment` (CG Tool).

- **Local = visuals and click-throughs only.** Navigate pages, test form interactions, check layout.
- **Railway = everything else.** Bug diagnosis, fix verification, data assertions, integration checks.
- Findings that only reproduce on localhost are noise unless confirmed on Railway.

## Style & Preferences

- **UK English** spelling throughout.
- **No em dashes** anywhere. Use commas or short hyphens. En dashes in number ranges (e.g. 2021-2026) are fine.
- **Desktop-only** for all projects except Roci/The Bridge (which has full mobile responsive).
- **No hedging, no preamble.** Be direct.
- **Challenge bad assumptions** rather than implementing them.

## Cross-Project Patterns

These patterns exist across multiple repos. Follow the established pattern when adding similar features.

- **In-app feedback widget:** Nurture Hub has one at `/admin/feedback`. Pattern: `feedback` table in Postgres, admin UI with type (bug/feature) and status (new/triaged/resolved/wontfix) filters.
- **Smoke test structure:** `tests/sprints/test_sprint_{name}.py` with baseline comparison.
- **Design targets:** When UI work needs a visual spec, match the HTML mockup pixel-for-pixel. The mockup is the spec.

## Process Management

- **All process management through PM2.** Never kill app server processes directly (`kill`, `pkill`, `lsof | kill`). Always use PM2 commands: `pm2 restart {name}`, `pm2 stop {name}`, `pm2 logs {name}`. This ensures clean shutdowns, restart tracking, and log continuity. If a port is stuck after a crash, use `pm2 stop` first, then clear the port, then `pm2 restart`.
- **PM2 ecosystem config** lives at `/Users/nickedwards/Code/mac-mini-ops/ecosystem.config.js`. All always-on apps are defined there.

## Infrastructure

Three machines in rotation. Each has a distinct role; don't confuse them.

### Mac Mini (the hub)
- **Mac Mini M4** — 10-core, 16GB RAM, always-on
- Hostname: `nicks-mac-mini` (Tailscale MagicDNS)
- User: `nickedwards`, home `/Users/nickedwards/`
- Runs PM2 with all always-on apps. PM2 ecosystem config at `/Users/nickedwards/Code/mac-mini-ops/ecosystem.config.js`
- All 20 repos cloned to `/Users/nickedwards/Code/{project-name}`
- Apps accessed via Tailscale MagicDNS: `http://nicks-mac-mini:{port}`
- Dropbox at `/Users/nickedwards/Library/CloudStorage/Dropbox/`

### PC Desktop (primary coding workstation)
- Windows 11 Pro. Hostname: `DESKTOP-QB7JPGN`. User: `Edwards`
- Shell: Git Bash (MSYS2/MINGW64), `bash 5.2.37`
- Home: `C:\Users\Edwards\` (`/c/Users/Edwards/` in Git Bash)
- 12 repos cloned at `C:\Users\Edwards\Code\`
- Dispatches to Mini via `mac-mini-dc` MCP server (Desktop Commander) when dispatch criteria are met
- Dropbox at `C:\Users\Edwards\Dropbox\`

### Work Laptop (mobile / work-scoped)
- Windows 11 Pro. Hostname: `Nick_HP_Laptop`. User: `Nick.Edwards`
- Shell: Git Bash (MSYS2/MINGW64), `bash 5.2.37`
- Home: `C:\Users\Nick.Edwards\` (`/c/Users/Nick.Edwards/` in Git Bash)
- Only 2 repos cloned: `nurture-hub` and `expert-recruitment`. Scoped to work projects only.
- Does NOT dispatch to Mini (no Desktop Commander access from here)
- Dropbox at `C:\Users\Nick.Edwards\Dropbox\`

### Shared
- GitHub org: `nledwards-spec` (private repos, HTTPS auth)
- **Railway-deployed:** Nurture Hub (main branch), CG Tool / expert-recruitment (master branch)
- AI Cowork Hub lives on Dropbox, synced to all three machines
- `~/.claude/commands/`, `~/.claude/hooks/`, and `~/.claude/skills/` on each machine are symlinked (Mac) or junctioned (Windows) to `{Dropbox}/AI Cowork Hub/code-standards/claude-code-shared/{commands,hooks,skills}/`. A slash command or skill dropped on Mini appears on all machines within Dropbox sync latency.

## Claude Access Pattern

**Mandatory for any new Railway-deployed app.** Every app that goes on Railway must ship the full access pattern from day 1. This is non-negotiable - retrofitting it is harder than building it in.

### Tier 1 - Service API

**Route namespace:** `/api/claude/*`, exempted from SSO middleware, rate-limited to 1000 req/min.

**Auth:** `Authorization: Bearer {CLAUDE_API_KEY}` header. One key per app - not a shared secret. Narrower blast radius on a leak, cleaner rotation.

**Minimum endpoints every Railway app must have:**
- `GET /api/claude/health` - auth check, returns 200 if key valid
- `GET /api/claude/feedback?status=new,triaged` - unresolved feedback (if the app has a feedback table)
- `GET /api/claude/metrics` - row counts for primary entities

**Env var naming convention:**
- `CLAUDE_API_KEY` in the Railway app environment
- Mac Mini `~/.claude-env`: one entry per app, named `CLAUDE_API_KEY_NURTURE_HUB`, `CLAUDE_API_KEY_CG_TOOL`, etc.

### Tier 2 - Authenticated Browser (Mac Mini only)

**storage_state path:** `~/.claude-auth/{app-name}.json` on the Mac Mini. Never anywhere else.
- Directory: `chmod 700`
- Files: `chmod 600`
- Never in Dropbox. Never in git. Never off the Mac Mini.

**Bootstrap:** Run `python3 /Users/nickedwards/Code/infra-scripts/capture-auth.py <app-name>`.
Nick logs in once via SSO + MFA. Script captures cookies to storage_state file. Valid ~60-90 days.

**Refresh cadence:** when a Playwright script returns a 401 or login redirect, re-run `capture-auth.py` for that app. Proactively: once per quarter.

**Usage in scripts:**
```python
from authed_browser import get_authed_context
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser, context = get_authed_context(p, "nurture-hub")
    page = context.new_page()
    # ... authenticated work
    context.close()
    browser.close()
```

**Note on personal account:** auth state is captured using Nick's personal Microsoft Entra account (not a service account). This means the storage_state file contains admin-level session cookies. Treat it like a password. Service account migration is a v2 task.

**Auth scripts:** `~/Code/infra-scripts/capture-auth.py` (bootstrap), `~/Code/infra-scripts/authed_browser.py` (import helper), `~/Code/infra-scripts/AUTH-REFRESH.md` (runbook).

---

## Cross-Machine Notes

- **Machine identity is authoritative, not guessed.** Each machine's `~/.claude/CLAUDE.md` has a Machine Identity block at the top. When asked "which machine is this?", read that block, don't infer from hostname or context.
- **Git Bash path translation gotcha (Windows).** Invoking `cmd.exe //c '...'` from Git Bash mangles path arguments with spaces, backslashes, and nested quotes. Use `powershell.exe -Command '...'` for any Windows admin command instead, it's shell-agnostic. Specifically: `mklink /J` via cmd-through-bash FAILS; `New-Item -ItemType Junction` via PowerShell works cleanly.
- **Directory symlinks on Windows.** Use `New-Item -ItemType Junction` (via PowerShell) for directory junctions. Junctions don't require admin or Developer Mode. Regular symlinks (`mklink /D` or `-ItemType SymbolicLink`) do require one of those. Junctions are functionally identical for reading config files.
- **NEVER `rm` a junction on Windows via Git Bash.** `rm` on a junction either fails silently (plain `rm`) OR, critically, recurses into the target and deletes the real files (`rm -r` / `rm -rf`). A single `rm -rf ~/.claude/skills` would wipe the shared Dropbox folder for all three machines. The ONLY safe removal form: `powershell.exe -Command '(Get-Item "C:\Users\{user}\.claude\{junction}").Delete()'`. Same rule for `cmd.exe //c 'rmdir ...'`, broken by the path-translation bug above. Pattern: **everything junction-related on Windows goes through PowerShell, creation AND removal.**
- **Don't duplicate PM2 rule, port-map, or infrastructure facts into per-repo CLAUDE.md files.** They live HERE. Each repo's CLAUDE.md references this file via `.claude/GLOBAL-RULES.md` (kept in sync by `sync-global-rules.sh`).
- **`pre-dispatch-check.sh` lives at `/Users/nickedwards/Code/mac-mini-ops/scripts/pre-dispatch-check.sh`.** Runs on the target machine before any dispatch. Checks clean tree, free RAM ≥4GB, no other `claude` process running. Hard-fails the dispatch if any check fails.
