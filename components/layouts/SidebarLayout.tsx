import React from "react";

export interface SidebarNavItem {
  label: string;
  active?: boolean;
  badge?: number;
}

export interface SidebarNavSection {
  label: string;
  items: SidebarNavItem[];
}

export interface SidebarUser {
  name: string;
  role: string;
  initials: string;
}

interface SidebarLayoutProps {
  brandName: string;
  brandSub: string;
  navSections: SidebarNavSection[];
  user: SidebarUser;
  children: React.ReactNode;
}

export function SidebarLayout({
  brandName,
  brandSub,
  navSections,
  user,
  children,
}: SidebarLayoutProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh" }}>
      <aside
        style={{
          background: "var(--sidebar-bg)",
          padding: "20px 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Brand */}
        <div
          style={{
            padding: "0 20px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            {brandName}
          </div>
          <div style={{ fontSize: "11px", color: "var(--sidebar-text)", marginTop: "2px" }}>
            {brandSub}
          </div>
        </div>

        {/* Nav sections */}
        {navSections.map((section) => (
          <div key={section.label} style={{ padding: "0 12px", marginBottom: "16px" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.3)",
                padding: "0 8px",
                marginBottom: "4px",
              }}
            >
              {section.label}
            </div>
            {section.items.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: item.active ? "white" : "var(--sidebar-text)",
                  background: item.active ? "rgba(79,110,247,0.2)" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "4px",
                    background: item.active ? "var(--accent)" : "rgba(255,255,255,0.08)",
                    flexShrink: 0,
                  }}
                />
                {item.label}
                {item.badge !== undefined && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "11px",
                      fontWeight: 600,
                      background: "var(--danger)",
                      color: "white",
                      padding: "1px 6px",
                      borderRadius: "10px",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* User footer */}
        <div
          style={{
            marginTop: "auto",
            padding: "16px 20px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--accent), #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: 600,
              color: "white",
              flexShrink: 0,
            }}
          >
            {user.initials}
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: "white" }}>{user.name}</div>
            <div style={{ fontSize: "11px", color: "var(--sidebar-text)" }}>{user.role}</div>
          </div>
        </div>
      </aside>

      <main style={{ background: "var(--bg)", overflow: "auto" }}>{children}</main>
    </div>
  );
}
