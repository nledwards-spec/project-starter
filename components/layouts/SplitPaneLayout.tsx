import React from "react";

export interface RailItem {
  label: string;
  active?: boolean;
}

export interface ListPanelItem {
  id: string;
  name: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
  active?: boolean;
}

interface SplitPaneLayoutProps {
  railItems: RailItem[];
  listHeader: React.ReactNode;
  listItems: ListPanelItem[];
  children: React.ReactNode;
}

export function SplitPaneLayout({
  railItems,
  listHeader,
  listItems,
  children,
}: SplitPaneLayoutProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "56px 300px 1fr", minHeight: "100vh" }}>
      {/* Icon rail */}
      <div
        style={{
          background: "var(--sidebar-bg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px 0",
          gap: "4px",
        }}
      >
        {railItems.map((item, i) => {
          const isSep = item.label === "---";
          if (isSep) {
            return (
              <div
                key={i}
                style={{
                  width: "24px",
                  height: "1px",
                  background: "rgba(255,255,255,0.1)",
                  margin: "8px 0",
                }}
              />
            );
          }
          return (
            <div
              key={i}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: item.active ? "white" : "var(--sidebar-text)",
                background: item.active ? "rgba(79,110,247,0.25)" : "transparent",
                fontSize: "11px",
                fontWeight: 600,
                transition: "background 0.15s",
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      {/* List panel */}
      <div
        style={{
          borderRight: "1px solid var(--border)",
          background: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "16px", borderBottom: "1px solid var(--border)" }}>
          {listHeader}
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {listItems.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "12px 16px",
                borderBottom: "1px solid var(--border)",
                cursor: "pointer",
                background: item.active
                  ? "var(--accent-light)"
                  : item.unread
                    ? "#f8f9ff"
                    : "white",
                borderLeft: item.active ? "2px solid var(--accent)" : "2px solid transparent",
                transition: "background 0.1s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color:
                      item.unread && !item.active ? "var(--accent)" : "var(--text-primary)",
                  }}
                >
                  {item.name}
                </span>
                <span style={{ fontSize: "11px", color: "var(--text-tertiary)" }}>
                  {item.time}
                </span>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  marginBottom: "2px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.subject}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.preview}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail pane */}
      <main style={{ background: "var(--bg)", overflow: "auto" }}>{children}</main>
    </div>
  );
}
