# Global Rules for All Code Projects

Single source of truth for cross-project standards. Read this file alongside the repo's CLAUDE.md.

Master: `~/Library/CloudStorage/Dropbox/AI Cowork Hub/code-standards/GLOBAL-RULES.md`. Sync to repos: `bash ~/Library/CloudStorage/Dropbox/AI\ Cowork\ Hub/code-standards/sync-global-rules.sh`. Worktrees inherit via symlink.

Style: bullets and facts. Claude-to-Claude. No narrative.

---

## Quality Standards (NEVER)

1. **Half-wired features.** Every sprint ships UI + backend + error handling + smoke test together. No orphaned schema, no half-wired buttons, no unresolved merge fields.
2. **Kill a live app.** Existing version keeps working through any rebuild. New ports for new versions. Don't push to Railway deploy branch unless Nick says.
3. **Overwrite user-edited files.** Version up (v1 -> v2). When in doubt, version.
4. **Punt setup to Nick.** Sprint that introduces an integration completes the setup or flags it as a hard blocker.
5. **Create new Notion databases.** Use existing ones via IDs in `.env.local`:

   | Database | ID |
   |----------|----|
   | Tasks | `76de0711-20a9-4198-bedc-6e85c692e8b4` |
   | Projects | `80ad5501-78d7-4ce6-9809-ff15caa6ea4f` |
   | Cowork Queue | `90aa78e1-c54d-45f6-b76d-f56c168ecf2e` |
   | Inbox | `ffed44df-b740-40e8-b5b6-d83c41ff092f` |
   | Notes | `23566166-a6fd-46fc-8d8d-faa6fbc4e7e7` |

---

## Working with Nick

- Nick is not a coder. Reviews in a browser. Nothing else counts as review.
- Decisions land in chat in seconds. No committee, no PM, no overnight. G4 escalation = 30s ping.
- A 6-phase plan a human team scopes across a quarter usually fits in a day for one Claude.
- DIY first: run tests, curl endpoints, read logs, query DB, restart PM2. Say what you tried before asking.
- Default: push to default branch. Railway redeploys, PM2 restarts. Tell Nick the URL. If it breaks main, revert.
- Branch on a spare Mini port only for genuine side-by-side comparison. Reverting is the safety net.

### Never ask
- "Try this locally?" / "Run this command?"
- "Shall I merge?" / "Ready to ship?" / "Want me to push?"

If self-check passes, push.

---

## Build-time estimates: divide first instinct by 10x

Calendar pauses (G4 escalations, design decisions) are flagged separately, never baked in.

Worked examples + heuristics: `code-standards/Build Estimation Reference, 2026-04-24, v2.md`.

---

## Session Hygiene

May 2026 audit: $1,750 in 9 days, 96% cache reads, 92% Atlas. Single sessions ran 3.5-7 days continuously, ~480k cache_read tokens per turn mid-session.

### Exit any session >24 hours old
Carry-cost > re-prime cost beyond 24h. Cache reads grow ~50k early -> ~500k mid-session. Restart resets.

### One task = one session
Finish a task, exit before starting an unrelated one. Don't reuse a session as a workspace.

The 4-day beaver session ($750+) absorbed 5+ unrelated tasks across three repos. New task = new session, fresh prefix.

### Default Sonnet 4.6
Substrate work (CRUD, schema, extractor changes, tests, bug fixes, file ops) = Sonnet. ~5x cheaper than Opus.

Opus only for: architecture decisions, scope review, multi-file refactors with dependency chains, anything Sonnet failed on twice.

### Default context 200k
200k forces auto-compaction roughly every 150k tokens, breaking geometric cache-read growth. 1M lets history grow unbounded across days.

1M only when deliberately needed (huge codebase end-to-end, deep cross-file analysis, scope review across many docs).

### Hard cap 8 concurrent shells
4 soft target. Each shell's output stays in context after return.

### /compact before backgrounding any task >5 min
Without this, session carries pre-background context PLUS the long-running task's output forever. Produced the $896 wozniak and $750+ beaver sessions.

### Burn alerts (live)
- `burn-monitor-live` LaunchAgent: every 15 min, iMessage at $200/session.
- Daily briefing surfaces red alerts from `memory/burn-log.md`.
- ccusage CLI: `ccusage` for current session totals.

---

## Claude-to-Claude Terseness

**Applies to** (terse mandatory): CLAUDE.md, GLOBAL-RULES.md, skill files, memory files, sub-agent prompts, dispatch briefs, scheduled-task briefs, Next Session Orientation files, repo `.claude/scope/` docs, code comments only Claude reads. Anything one Claude reads from another.

**Does NOT apply to** (write for comprehension): anything Nick reads as output. Briefings, status reports, audit findings, project reviews, session summaries, design rationale shown to Nick, chat responses. If Nick needs to understand it, write it for him, not for token efficiency.

Style for in-scope files: bullets and facts. No "context", "why this matters", "background paragraph", "let me explain my thinking". State only:
- What to do
- What's already done
- What's off-limits
- Success criterion

Verbose Claude-to-human writing has a place. Verbose Claude-to-Claude writing is wasted tokens.

---

## Working Mode

### Interactive by default, dispatch by fit

Default: Nick + one Claude, live session. For features, debugging, UX, Railway changes needing mid-flight verification, anything <~20 min. No written brief.

Dispatch when ALL of:
- **Mechanical** (decision-light, execution-heavy)
- **Long** (>~20 min if watched)
- **Scoped** ("done" clear at outset, no mid-flight design)
- **Safe** (no irreversible production touches)
- **Pre-dispatch-check passes** on target machine (clean tree, ≥4GB free RAM, no other `claude` running)

Stay interactive (never dispatch) for:
- Design / feature shaping / UX
- Debugging
- Railway changes needing mid-flight verification

Surface to Nick before dispatching when:
- Unsure criteria are met (default: interactive)
- Pre-dispatch-check fails
- First time running a novel dispatch pattern

### Verifying dispatched work

Parent session owns the outcome. Before "done":
- **Technically correct.** Tests pass, smoke green, PM2 logs clean, no regressions on adjacent surfaces.
- **Did the job actually asked.** Re-read the brief, look at what came back. Does it solve the problem, or is it a plausible-looking shell?

If either fails, fix before "done". Minutes, not hours. No QA ceremony, no separate review step.

### One Sonnet per machine
Hard cap. `pre-dispatch-check.sh` enforces via `pgrep`. No same-machine fanout.

### No sprint briefs
One-paragraph problem statement is the maximum. UI work goes via HTML mockup (mockup IS the spec). Architectural design docs in `.claude/scope/` are reference, not dispatch artifacts.

Sprint-brief templates, "Detailed Instructions" sections, "Suggested Approach" fields are dispatch-era infrastructure. Don't produce them.

### Direct feedback is tracked, not implied
- TodoWrite item per fix request
- Re-read session for explicit asks before merge or wrap
- Verify each against actual code change
- Unverified = not done

"Verified" means:
- **Code fix**: re-read changed code, confirm implementation
- **UI fix**: inspect rendered output (DOM / screenshot)
- **Backend fix**: smoke test passes OR trace data flow manually
- **Bug fix**: reproduce against pre-fix state, confirm fix breaks the repro

---

## Shared App Disciplines

Three principles every Code project must embody. Checked in `project-check` audits as drift indicators.

### 1. Data integrity over cleverness
- Never invent. Missing data > fabricated data.
- Never guess on contact details, dates, exclusions, stages, warmth signals, tax figures, expert statuses, relationships.
- Never auto-action on thin data. Low confidence = surface for human decision.
- Every number/fact/recommendation traces to a real source. Hallucinated filler = bug.

### 2. Modular by design
- Different scenarios = configuration or swappable modules, not forks.
- Naming/schema/structure stays neutral. Don't bake a specific scenario's language into core.
- Inner Circle's forward-compatibility with Halcyon module B2 is the canonical example.

### 3. Workflow can't break
- Live workflow = no bug/deploy/edge case silently drops data, loses messages, corrupts state, or double-actions.
- Stability beats new features. Flashier-but-flakier = regression.
- Every change touching live flow passes pre-merge self-check. Revert is the safety net.

---

## Git Rules

Nick can't meaningfully review diffs. Gate is Railway + use, not review ceremony.

### Ship direct
Every repo to default branch (`main` or `master`). Every commit, interactive or dispatched. No feature branches as default. No PRs as default.

Exception: feature branch ONLY when two sprints work on same files in parallel. Ephemeral, merge back when conflict closes.

Break = `git revert <sha>` and push.

### Pre-merge self-check (Railway repos: nurture-hub, expert-recruitment)

- New HTTP endpoints: access control applied?
- New tests with mocks: explicit `assert_called*` OR distinctive sentinel?
- Smoke tests: no live external API calls? Route-existence only?
- New DB columns/indexes: migration ordering correct? Backfill documented?
- Constants: no duplicated definitions?
- Nick's asks this session: every fix verified per Direct Feedback rule?

Unverified items block push.

Pre-merge tag before push: `pre-merge-{short-desc}`.

### Before any commit (universal)

`git status --porcelain` first. Tree dirty with changes you didn't make this session = STOP, surface to Nick. Options:
- Commit pre-existing changes first (with Nick's guidance)
- Stash with descriptive name
- Abandon your change until tree is clean

Silent auto-stash or `git add .` of pre-existing work caused the 20-repo triage. Don't repeat.

### What Claudes NEVER ask Nick
- "Should I use a branch?" No. Ship direct.
- "Should I open a PR?" No, unless conflict window genuinely requires.
- "Is this ready to ship?" Just ship.

### What Claudes SHOULD surface
- "Pre-merge self-check flagged [issue]." (Fix it, push.)
- "This change touches production data or is irreversible, confirm?"
- "Two sprints about to collide on these files, serialise or branch?"
- "Your ask [X] isn't fully verified, here's done, here's outstanding."

### Update each repo's CLAUDE.md
If a change contradicts this file, update repo CLAUDE.md in the same commit.

---

## Testing

### Mocks must be verified to intercept

Tests that pass for the wrong reason are worse than tests that fail.

Top of every new `tests/sprints/test_sprint_*.py`:

```python
import os
os.environ.setdefault("ANTHROPIC_API_KEY", "test-fake-key")
os.environ.setdefault("APOLLO_API_KEY", "test-fake-key")
os.environ.setdefault("HEYREACH_API_KEY", "test-fake-key")
# plus DATABASE_URL if hitting db.py
```

Every mock must verify it intercepted: `mock.assert_called*()` OR distinctive sentinel only the mock can produce. Bare `assert response.ok == True` doesn't prove the mock ran.

### Smoke tests
- Live in `tests/sprints/test_sprint_{name}.py`.
- Run existing tests before push.
- No live external API calls.
- Acceptance criteria describe production. "Verified on localhost" insufficient for Railway repos.

---

## Port Allocation

Every project has a block. Never use framework defaults (Vite 5173, Streamlit 8501, Next.js 3000). Pin in config files.

Canonical map: `~/Library/CloudStorage/Dropbox/AI Cowork Hub/Technical/port-map.md`.

Personal projects: 3xxx blocks. Work apps (Railway): 85xx. Infrastructure: 9xxx.

---

## Local vs Railway Testing (nurture-hub, expert-recruitment)

- **Local = visuals + click-throughs only.** Layout, form interactions.
- **Everything else verified on Railway.** Bug diagnosis, fix verification, data assertions, integrations - against `https://{app}.whitespacestrategy.com`, never `localhost`.
- QA reports: "Local env only" findings go in a separate section, not findings.

---

## Style

- UK English.
- **No em dashes in client-facing or external outputs.** Things humans other than Nick will read: proposals, emails sent as Nick, UI strings, in-app copy, error messages, marketing copy, READMEs that ship to a team. Use commas or short hyphens (-). En dashes in number ranges (e.g. 2021-2026) fine.
- **Em dashes are fine in:** direct chat with Nick, internal CLAUDE.md / GLOBAL-RULES.md / skill files / memory files / commit messages and code comments only Nick or another Claude reads. Don't write around them in those.
- Desktop-only except Roci/The Bridge (full mobile responsive).
- No hedging, no preamble. Direct.
- Challenge bad assumptions, don't implement them.

---

## Cross-Project Patterns

- **In-app feedback widget:** Nurture Hub at `/admin/feedback`. `feedback` table in Postgres, admin UI with type (bug/feature) + status (new/triaged/resolved/wontfix) filters.
- **Smoke tests:** `tests/sprints/test_sprint_{name}.py` with baseline comparison.
- **Design targets:** UI work matches HTML mockup pixel-for-pixel. Mockup IS the spec.

---

## Process Management

- All app server processes via PM2. No direct `kill`, `pkill`, `lsof | kill`.
- `pm2 restart {name}`, `pm2 stop {name}`, `pm2 logs {name}`.
- Stuck port after crash: `pm2 stop` first, clear port, `pm2 restart`.
- PM2 ecosystem config: `/Users/nickedwards/Code/mac-mini-ops/ecosystem.config.js`.

---

## Infrastructure

Three machines. Each has a distinct role.

### Mac Mini (the hub)
- 10-core M4, 16GB RAM, 228GB SSD, headless, wired ethernet, never sleeps.
- Hosts: PM2 ecosystem (always-on apps), Code CLI, scheduled tasks, Cowork.
- Filesystem: `/Users/nickedwards/Code/{repo}/` for git, `~/Library/CloudStorage/Dropbox/{workspace}/` for content.
- Concurrency cap: 2 Mini CLI dispatches at a time.

### PC Desktop (primary coding workstation)
- Cowork PC (full local Cowork) + Claude desktop with remote MCP to Mini.
- File ops on PC: local Desktop Commander.
- File ops on Mini: `mac-mini-dc` MCP via supergateway (`http://nicks-mac-mini:9100/mcp`).
- Chrome on Mini: `mac-mini-chrome` MCP (`http://nicks-mac-mini:9101/mcp`).

### Work Laptop (mobile / work-scoped)
- Limited setup. Setup doc: `code-standards/WORK-LAPTOP-SETUP.md`.

### Shared
- All workspaces sync via Dropbox.
- Tailscale magic DNS: `nicks-mac-mini` resolves on every machine.
- ssh key auth between machines.

---

## Claude Access Pattern

Claude programmatic / browser access to SSO-gated Railway apps. Two tiers.

Full design: `Projects/infrastructure/Claude Access Pattern, 2026-04-24, v1.md`.

### Tier 1 - Service API
Programmatic API base URLs:
- nurture-hub: `https://nurture.whitespacestrategy.com/api/claude/` (env: `CLAUDE_API_KEY_NURTURE_HUB`)
- cg-tool: `https://cg.whitespacestrategy.com/api/claude/` (env: `CLAUDE_API_KEY_CG_TOOL`)

API keys: `~/.claude-env`, sourced by shell.

### Tier 2 - Authenticated Browser (Mac Mini only)
For UI flows the API doesn't cover.

`storage_state` paths:
- nurture-hub: `~/.claude-auth/nurture-hub.json`
- cg-tool: `~/.claude-auth/cg-tool.json`

Rules:
- `~/.claude-auth/` is Mac Mini only. Never Dropbox. Never git.
- Directory `chmod 700`. Files `chmod 600`.
- Refresh on 401: `python3 ~/Code/infra-scripts/capture-auth.py <app-name>`.
- Quarterly refresh runbook: `~/Code/infra-scripts/AUTH-REFRESH.md`.

Use in scripts: `from authed_browser import get_authed_context`.

---

## Cross-Machine Notes

- Mini hardcoded paths in scheduled tasks - don't move repos. Affected: `code-dispatch` skill, build-pipeline (paused), nurture-hub-sprint (paused), per-project sprint tasks (paused).
- PC sessions don't have direct Mini filesystem access without supergateway. Bridge is `mac-mini-dc` MCP.
- Cowork mounts (Dropbox folders) differ per session. Always use absolute paths in cross-machine scripts.
