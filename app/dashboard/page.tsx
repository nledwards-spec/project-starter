import { SidebarLayout } from "@/components/layouts/SidebarLayout";
import { kpiCards, activityItems } from "@/lib/sample-data";

const navSections = [
  {
    label: "Core",
    items: [
      { label: "Dashboard", active: true },
      { label: "Campaigns", badge: 3 },
      { label: "Contacts" },
      { label: "Reports" },
    ],
  },
  {
    label: "Manage",
    items: [
      { label: "Integrations" },
      { label: "Team" },
      { label: "Settings" },
    ],
  },
];

const user = { name: "Nick Edwards", role: "Admin", initials: "NE" };

export default function DashboardPage() {
  return (
    <SidebarLayout brandName="Acme Analytics" brandSub="Growth Platform" navSections={navSections} user={user}>
      <div style={{ padding: "28px 32px" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
            Dashboard
          </h2>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 500,
                border: "1px solid var(--border)",
                background: "white",
                color: "var(--text-primary)",
                cursor: "pointer",
              }}
            >
              Export
            </button>
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
              + New Campaign
            </button>
          </div>
        </div>

        {/* KPI row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {kpiCards.map((card) => (
            <div
              key={card.label}
              style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "20px",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)", marginBottom: "8px" }}>
                {card.label}
              </div>
              <div style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "8px", color: "var(--text-primary)" }}>
                {card.value}
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: card.direction === "up" ? "#ecfdf5" : "#fef2f2",
                  color: card.direction === "up" ? "#059669" : "#dc2626",
                }}
              >
                {card.direction === "up" ? "↑" : "↓"} {card.change}
              </span>
            </div>
          ))}
        </div>

        {/* Chart row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {/* Revenue line chart */}
          <div
            style={{
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--text-primary)" }}>
              Revenue Over Time
              <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 400 }}>Last 12 months</span>
            </div>
            <svg width="100%" height="200" viewBox="0 0 700 200">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4f6ef7" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#4f6ef7" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="50" x2="700" y2="50" stroke="#e2e6ed" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="100" x2="700" y2="100" stroke="#e2e6ed" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="150" x2="700" y2="150" stroke="#e2e6ed" strokeWidth="1" strokeDasharray="4,4" />
              <path
                d="M0,160 L58,145 L116,130 L175,140 L233,110 L291,95 L350,100 L408,80 L466,70 L525,55 L583,45 L641,30 L700,25 L700,200 L0,200 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0,160 L58,145 L116,130 L175,140 L233,110 L291,95 L350,100 L408,80 L466,70 L525,55 L583,45 L641,30 L700,25"
                fill="none"
                stroke="#4f6ef7"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <circle cx="525" cy="55" r="4" fill="#4f6ef7" />
              <circle cx="583" cy="45" r="4" fill="#4f6ef7" />
              <circle cx="641" cy="30" r="4" fill="#4f6ef7" />
              <circle cx="700" cy="25" r="5" fill="#4f6ef7" stroke="white" strokeWidth="2" />
              <text x="0" y="195" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">May</text>
              <text x="116" y="195" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">Jul</text>
              <text x="233" y="195" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">Sep</text>
              <text x="350" y="195" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">Nov</text>
              <text x="466" y="195" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">Jan</text>
              <text x="583" y="195" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif">Mar</text>
            </svg>
          </div>

          {/* Donut chart */}
          <div
            style={{
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "20px",
            }}
          >
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px", color: "var(--text-primary)" }}>
              Revenue by Source
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "10px 0" }}>
              <svg width="140" height="140" viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e6ed" strokeWidth="16" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#4f6ef7" strokeWidth="16"
                  strokeDasharray="113 138" strokeDashoffset="0" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="16"
                  strokeDasharray="63 188" strokeDashoffset="-113" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="16"
                  strokeDasharray="50 201" strokeDashoffset="-176" transform="rotate(-90 50 50)" />
                <text x="50" y="47" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif" fill="#1a1d23">£285k</text>
                <text x="50" y="60" textAnchor="middle" fontSize="8" fill="#9ca3af" fontFamily="Inter, sans-serif">Total</text>
              </svg>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { colour: "#4f6ef7", label: "Direct", value: "45%" },
                  { colour: "#8b5cf6", label: "Referral", value: "25%" },
                  { colour: "#10b981", label: "Organic", value: "20%" },
                  { colour: "#e2e6ed", label: "Other", value: "10%" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: item.colour, flexShrink: 0 }} />
                    <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                    <span style={{ fontWeight: 600, marginLeft: "auto", color: "var(--text-primary)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity feed */}
        <div
          style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "20px",
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px", color: "var(--text-primary)" }}>
            Recent Activity
          </div>
          {activityItems.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "12px",
                padding: "10px 0",
                borderBottom: i < activityItems.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: item.colour,
                  marginTop: "6px",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontSize: "13px", color: "var(--text-primary)" }}>
                  {item.user && <strong>{item.user}</strong>}
                  {item.user ? " " : ""}
                  {item.action}
                  {item.target && (
                    <>
                      {" "}
                      <strong>{item.target}</strong>
                    </>
                  )}
                  {item.amount && ` - ${item.amount}`}
                </div>
                <div style={{ fontSize: "11px", color: "var(--text-tertiary)", marginTop: "2px" }}>
                  {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SidebarLayout>
  );
}
