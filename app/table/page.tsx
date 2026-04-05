import { TopNavLayout } from "@/components/layouts/TopNavLayout";
import { contacts } from "@/lib/sample-data";

const navLinks = [
  { label: "Contacts", href: "#", active: true },
  { label: "Companies", href: "#" },
  { label: "Deals", href: "#" },
  { label: "Tasks", href: "#" },
  { label: "Reports", href: "#" },
];

const statusStyles: Record<string, { background: string; color: string }> = {
  active: { background: "#ecfdf5", color: "#059669" },
  pending: { background: "#fffbeb", color: "#d97706" },
  inactive: { background: "#f3f4f6", color: "#6b7280" },
  overdue: { background: "#fef2f2", color: "#dc2626" },
};

const statusLabels: Record<string, string> = {
  active: "Active",
  pending: "Pending",
  inactive: "Inactive",
  overdue: "Overdue",
};

export default function TablePage() {
  return (
    <TopNavLayout brandName="ClientHub" links={navLinks}>
      <div style={{ padding: "24px" }}>
        {/* Toolbar */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          {["All Contacts", "Active", "Pending", "Inactive", "+ Add Filter"].map((label, i) => (
            <button
              key={label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 12px",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 500,
                background: i === 0 ? "var(--accent-light)" : "white",
                color: i === 0 ? "var(--accent)" : "var(--text-secondary)",
                borderColor: i === 0 ? "var(--accent)" : "var(--border)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
          <span style={{ fontSize: "13px", color: "var(--text-secondary)", marginLeft: "auto" }}>
            Showing 1–10 of 247 contacts
          </span>
        </div>

        {/* Table */}
        <div
          style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            overflow: "hidden",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr>
                {["", "Name", "Company", "Status", "Deal Value", "Last Contact", "Source", ""].map(
                  (col, i) => (
                    <th
                      key={i}
                      style={{
                        textAlign: "left",
                        padding: "10px 16px",
                        fontWeight: 600,
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color: "var(--text-secondary)",
                        background: "var(--bg)",
                        borderBottom: "1px solid var(--border)",
                        whiteSpace: "nowrap",
                        width: i === 0 ? "30px" : i === 7 ? "60px" : undefined,
                      }}
                    >
                      {col === "" ? (
                        i === 0 ? (
                          <input type="checkbox" />
                        ) : null
                      ) : (
                        col
                      )}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.email} style={{ cursor: "pointer" }}>
                  <td style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", verticalAlign: "middle" }}>
                    <input type="checkbox" />
                  </td>
                  <td style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", verticalAlign: "middle" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: contact.avatarGradient,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "white",
                          flexShrink: 0,
                        }}
                      >
                        {contact.initials}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, color: "var(--text-primary)" }}>{contact.name}</div>
                        <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{contact.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", verticalAlign: "middle", color: "var(--text-primary)" }}>
                    {contact.company}
                  </td>
                  <td style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", verticalAlign: "middle" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        fontSize: "11px",
                        fontWeight: 600,
                        ...statusStyles[contact.status],
                      }}
                    >
                      {statusLabels[contact.status]}
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", verticalAlign: "middle", fontWeight: 600, color: "var(--text-primary)" }}>
                    £{contact.dealValue.toLocaleString()}
                  </td>
                  <td style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", verticalAlign: "middle" }}>
                    <span style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)", fontSize: "12px", color: "var(--text-secondary)" }}>
                      {contact.lastContact}
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", verticalAlign: "middle", color: "var(--text-primary)" }}>
                    {contact.source}
                  </td>
                  <td style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", verticalAlign: "middle", textAlign: "center", color: "var(--text-tertiary)", cursor: "pointer" }}>
                    ···
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderTop: "1px solid var(--border)",
              fontSize: "13px",
              color: "var(--text-secondary)",
              background: "white",
            }}
          >
            <span>Showing 1–10 of 247</span>
            <div style={{ display: "flex", gap: "4px" }}>
              {["«", "1", "2", "3", "...", "25", "»"].map((page, i) => (
                <button
                  key={i}
                  style={{
                    padding: "6px 10px",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    fontSize: "12px",
                    background: page === "1" ? "var(--accent)" : "white",
                    color: page === "1" ? "white" : "var(--text-primary)",
                    borderColor: page === "1" ? "var(--accent)" : "var(--border)",
                    cursor: "pointer",
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TopNavLayout>
  );
}
