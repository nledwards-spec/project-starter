import React from "react";

export interface SettingsNavItem {
  label: string;
  active?: boolean;
}

export interface SettingsNavGroup {
  label: string;
  items: SettingsNavItem[];
}

interface SettingsLayoutProps {
  title: string;
  navGroups: SettingsNavGroup[];
  children: React.ReactNode;
}

export function SettingsLayout({ title, navGroups, children }: SettingsLayoutProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: "100vh" }}>
      <nav
        style={{
          padding: "24px 0",
          borderRight: "1px solid var(--border)",
          background: "white",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 600,
            padding: "0 20px",
            marginBottom: "16px",
            color: "var(--text-primary)",
          }}
        >
          {title}
        </h3>

        {navGroups.map((group) => (
          <div key={group.label} style={{ marginBottom: "20px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-tertiary)",
                padding: "0 20px",
                marginBottom: "4px",
              }}
            >
              {group.label}
            </div>
            {group.items.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "block",
                  padding: "8px 20px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: item.active ? "var(--accent)" : "var(--text-secondary)",
                  cursor: "pointer",
                  borderLeft: item.active ? "2px solid var(--accent)" : "2px solid transparent",
                  background: item.active ? "var(--accent-light)" : "transparent",
                  transition: "all 0.15s",
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        ))}
      </nav>

      <main style={{ background: "var(--bg)" }}>{children}</main>
    </div>
  );
}
