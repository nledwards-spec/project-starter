import React from "react";

export interface TopNavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface TopNavLayoutProps {
  brandName: string;
  links: TopNavLink[];
  children: React.ReactNode;
}

export function TopNavLayout({ brandName, links, children }: TopNavLayoutProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          height: "56px",
          borderBottom: "1px solid var(--border)",
          background: "white",
          gap: "24px",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "15px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginRight: "8px",
          }}
        >
          {brandName}
        </span>

        <div
          style={{
            display: "flex",
            gap: "4px",
            height: "100%",
            alignItems: "stretch",
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                fontSize: "13px",
                fontWeight: 500,
                color: link.active ? "var(--text-primary)" : "var(--text-secondary)",
                textDecoration: "none",
                position: "relative",
                transition: "color 0.15s",
                borderBottom: link.active ? "2px solid var(--accent)" : "2px solid transparent",
                marginBottom: link.active ? "0" : "0",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search contacts..."
              style={{
                padding: "7px 12px 7px 32px",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                fontSize: "13px",
                width: "240px",
                background: "var(--bg)",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
            <svg
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-tertiary)",
                pointerEvents: "none",
              }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--accent), #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 600,
              color: "white",
              flexShrink: 0,
            }}
          >
            NE
          </div>
        </div>
      </nav>

      <main style={{ flex: 1, background: "var(--bg)" }}>{children}</main>
    </div>
  );
}
