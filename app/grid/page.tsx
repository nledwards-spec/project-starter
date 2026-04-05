import { integrations } from "@/lib/sample-data";

const statusStyles: Record<string, { background: string; color: string }> = {
  active: { background: "#ecfdf5", color: "#059669" },
  pending: { background: "#fffbeb", color: "#d97706" },
  inactive: { background: "#f3f4f6", color: "#6b7280" },
};

const statusLabels: Record<string, string> = {
  active: "Connected",
  pending: "Setup Required",
  inactive: "Available",
};

const filterChips = ["All", "CRM", "Marketing", "Analytics", "Communication", "Finance", "Developer"];

export default function GridPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header bar */}
      <div
        style={{
          padding: "20px 28px",
          borderBottom: "1px solid var(--border)",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "var(--text-primary)" }}>Integrations</h2>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search integrations..."
              style={{
                padding: "7px 12px 7px 32px",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                fontSize: "13px",
                width: "200px",
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
          <div style={{ display: "flex", border: "1px solid var(--border)", borderRadius: "6px", overflow: "hidden" }}>
            <button style={{ padding: "6px 10px", fontSize: "12px", border: "none", background: "var(--accent-light)", color: "var(--accent)", cursor: "pointer" }}>Grid</button>
            <button style={{ padding: "6px 10px", fontSize: "12px", border: "none", background: "white", color: "var(--text-secondary)", cursor: "pointer" }}>List</button>
          </div>
          <button
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 500,
              border: "1px solid var(--accent)",
              background: "var(--accent)",
              color: "white",
              cursor: "pointer",
            }}
          >
            + Request Integration
          </button>
        </div>
      </div>

      {/* Main content */}
      <main style={{ flex: 1, padding: "24px 28px", background: "var(--bg)" }}>
        {/* Filter chips */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {filterChips.map((chip, i) => (
            <span
              key={chip}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                border: "1px solid var(--border)",
                background: i === 0 ? "var(--accent-light)" : "white",
                color: i === 0 ? "var(--accent)" : "var(--text-secondary)",
                borderColor: i === 0 ? "var(--accent)" : "var(--border)",
                cursor: "pointer",
              }}
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {integrations.map((integration) => (
            <div
              key={integration.name}
              style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "20px",
                cursor: "pointer",
                transition: "box-shadow 0.15s, border-color 0.15s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: integration.iconBg,
                    color: integration.iconColour,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  {integration.icon}
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: 600,
                    ...statusStyles[integration.status],
                  }}
                >
                  {statusLabels[integration.status]}
                </span>
              </div>
              <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "6px", color: "var(--text-primary)" }}>
                {integration.name}
              </h3>
              <p style={{ fontSize: "12px", color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: "16px" }}>
                {integration.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "12px",
                  borderTop: "1px solid var(--border)",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                }}
              >
                <span
                  style={{
                    padding: "2px 8px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: 500,
                    background: "#f3f4f6",
                    color: "#6b7280",
                  }}
                >
                  {integration.category}
                </span>
                <span>{integration.lastSynced}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
