# Icon Vocabulary Standard

All Code projects adopting Lucide should use the semantic naming pattern below. Reference Lucide names are listed for lookup only — **app code should never reference them directly**.

This standard is synced to every repo alongside `GLOBAL-RULES.md`. First adopter: Atlas (2026-04-21). Next rollouts sign off with Nick per project.

## Standard sizes

- `sm` / 16px — inline with body text, dense tables
- `md` / 20px — nav items, buttons, default UI (use this unless you have a reason not to)
- `lg` / 24px — hero actions, empty states, section headers

A number is accepted as an escape-hatch (`<Icon name="..." size={13} />`) but prefer the preset scale.

## Standard stroke: 2px (Lucide default)

Override only when the design explicitly asks for it (e.g. a thicker glyph in a pill button).

## Vocabulary

### Navigation

| Semantic | Lucide |
|----------|--------|
| dashboard | LayoutDashboard |
| home | Home |
| recent | History |
| tasks | ListChecks |
| docs | FileText |
| methods | Layers |
| workflows | Workflow |
| data | Database |
| memory | Database |
| entities | Box |
| agents | Bot |
| tools | Wrench |
| people | Users |
| analytics | BarChart3 |
| settings | Settings |
| signals | Radio |
| reader | BookOpen |

### Module-specific (cross-project extensions)

| Semantic | Lucide | Notes |
|----------|--------|-------|
| designerClient | FileSignature | Atlas Designer → Client output |
| designerMarketing | Send | Atlas Designer → Marketing |
| pipeline | GitBranch | CRM pipeline |
| nurture | Mail | Nurture sequences / outreach |
| forecasting | LineChart | Scenarios over memory |
| benchmarks | BarChart3 | Cross-entity comparison |
| delivery | ListTree | Engagement / delivery tracking |
| community | Globe | Events / roundtables |

### Status

| Semantic | Lucide |
|----------|--------|
| inbox | Inbox |
| done | CheckCircle2 |
| completed | CheckCircle |
| draft | CircleDashed |
| waiting | Clock3 |
| live | Zap |
| decision | AlertTriangle |
| idle | Circle |

### Actions

| Semantic | Lucide |
|----------|--------|
| run | Play |
| pause | Pause |
| ai | Sparkles |
| branch | GitBranch |
| refinements | GitMerge |
| link | Link2 |
| attach | Paperclip |
| filter | Filter |
| search | Search |
| command | Command |
| more | MoreHorizontal |
| add | Plus |
| delete | Trash2 |
| edit | Edit3 |
| export | Download |
| import | Upload |
| archive | Archive |
| pin | Star |
| notify | Bell |
| folder | Folder |
| tag | Tag |
| calendar | Calendar |
| note | MessageSquare |
| invite | UserPlus |
| secure | ShieldCheck |
| shell | Terminal |
| code | Code2 |
| iterate | RotateCw |
| refresh | RefreshCw |

### Glyphs

| Semantic | Lucide |
|----------|--------|
| close | X |
| check | Check |
| chevronLeft | ChevronLeft |
| chevronRight | ChevronRight |
| help | HelpCircle |
| externalLink | ExternalLink |
| eye | Eye |
| eyeOff | EyeOff |
| sun | Sun |
| moon | Moon |

### Quality / review (Atlas Research spine)

| Semantic | Lucide |
|----------|--------|
| quality | CheckCircle |
| factCheck | FileSearch |
| styleCheck | AlertTriangle |
| trace | List |

## Rules

1. **Never reference Lucide names directly in app code.** Always go through the project's `<Icon>` wrapper with the semantic name. The wrapper is the single place Lucide imports live.
2. **Never use raw inline SVG for icons.** If you need something Lucide doesn't have, add a new entry to the vocabulary with the closest Lucide match. If there's genuinely no match, flag it in the PR description and propose either a new entry or a proper custom SVG alongside Lucide.
3. **Stick to three sizes.** If you need a different size, talk to Nick first — it usually means the layout is off, not that the icon is wrong.
4. **Colour via currentColor / className only.** Never hardcode a colour prop on the icon component. Let CSS do it via the enclosing element's `color`.
5. **Never install another icon library in parallel.** If you find Heroicons, Phosphor, or anything else already installed, remove it as part of adopting this standard.
6. **Custom graphics are fine.** This standard is about *icons*. Progress rings, spark lines, logos, sparkline charts, and other bespoke SVG visuals are legitimate and not subject to this rule.

## How to adopt in a new project

1. `npm install lucide-react` (or confirm it's already there).
2. Create `src/components/Icon.tsx` mirroring the Atlas implementation. Copy the registry verbatim; add project-specific entries below with a clear comment.
3. Grep the codebase for `from 'lucide-react'` and migrate each call site to `<Icon name="..." size="..." />`.
4. Grep for raw `<svg` — anything that's an icon (not a custom graphic) migrates too.
5. Update the project's `CLAUDE.md` with a one-line pointer: "Icons: use the `<Icon>` wrapper. Vocabulary at `.claude/ICON-VOCABULARY.md`."
6. Ship it as one PR. Partial swaps look worse than either end state (per the original prompt) — don't stack multiple features with the icon swap.

## Extending the vocabulary

When you genuinely need a new semantic name:

1. Pick the closest Lucide glyph (browse at https://lucide.dev).
2. Add to the registry in the project's `Icon.tsx` alongside the existing entries, with a one-line comment on why.
3. Add the same entry to this doc under the appropriate section.
4. If the new entry is cross-project useful, flag in the PR that the vocabulary standard should update.
5. If it's project-specific (like `designerClient` for Atlas), say so explicitly.

## Rationale

- **One import location.** Icons are everywhere in a React app. If every page imports from `lucide-react` directly, swapping icon libraries, adjusting default sizes, or enforcing stroke consistency becomes a grep-and-replace across hundreds of files. Wrapping into a single `<Icon>` component makes those changes one-file jobs.
- **Semantic names outlive glyph choices.** `<Icon name="delete" />` reads right even if Lucide renames `Trash2` to `Trash4`, or if we decide "delete" should look like an archive box instead of a bin.
- **Cross-project consistency.** The same semantic name produces the same visual across Atlas, Nurture Hub, Expert Recruitment, etc. A user hopping between Nick's projects gets muscle memory that transfers.
