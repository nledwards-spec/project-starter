import Link from "next/link";

const patterns = [
  { name: "Dashboard", href: "/dashboard", description: "Stats cards, charts, and activity feed" },
  { name: "Data Table", href: "/table", description: "Sortable, filterable table with pagination" },
  { name: "Detail View", href: "/detail", description: "Record detail with sidebar metadata" },
  { name: "Settings", href: "/settings", description: "Tabbed settings with form sections" },
  { name: "Card Grid", href: "/grid", description: "Responsive grid of content cards" },
  { name: "Split Pane", href: "/inbox", description: "Icon rail + list + detail split layout" },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto">
        <h1
          className="text-2xl font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Project Starter
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--text-secondary)" }}>
          Next.js layout pattern templates. Pick a pattern to preview.
        </p>

        <ul className="space-y-2">
          {patterns.map((pattern) => (
            <li key={pattern.href}>
              <Link
                href={pattern.href}
                className="flex items-center justify-between p-4 rounded-lg border transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent-light)]"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <span className="font-medium" style={{ color: "var(--text-primary)" }}>
                  {pattern.name}
                </span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {pattern.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
