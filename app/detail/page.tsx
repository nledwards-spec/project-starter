export default function DetailPage() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", minHeight: "100vh" }}>
      {/* Main form */}
      <main
        style={{
          padding: "28px 32px",
          borderRight: "1px solid var(--border)",
          background: "white",
          overflowY: "auto",
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            fontSize: "12px",
            color: "var(--text-secondary)",
            marginBottom: "16px",
            display: "flex",
            gap: "6px",
            alignItems: "center",
          }}
        >
          <a href="#" style={{ color: "var(--accent)", textDecoration: "none" }}>Contacts</a>
          <span style={{ color: "var(--text-tertiary)" }}>/</span>
          <a href="#" style={{ color: "var(--accent)", textDecoration: "none" }}>Meridian Healthcare</a>
          <span style={{ color: "var(--text-tertiary)" }}>/</span>
          <span>Sarah Chen</span>
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "28px",
            paddingBottom: "20px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "4px", color: "var(--text-primary)" }}>
              Sarah Chen
            </h2>
            <div style={{ fontSize: "13px", color: "var(--text-secondary)", display: "flex", gap: "16px", alignItems: "center" }}>
              <span>Head of Digital Transformation</span>
              <span>·</span>
              <span>Meridian Healthcare</span>
              <span
                style={{
                  display: "inline-flex",
                  padding: "3px 8px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  fontWeight: 600,
                  background: "#ecfdf5",
                  color: "#059669",
                }}
              >
                Active
              </span>
            </div>
          </div>
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
              Edit
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
              Send Email
            </button>
          </div>
        </div>

        {/* Contact Details section */}
        <div style={{ marginBottom: "28px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "16px",
              paddingBottom: "8px",
              borderBottom: "1px solid var(--border)",
              color: "var(--text-primary)",
            }}
          >
            Contact Details
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { label: "First Name", value: "Sarah" },
              { label: "Last Name", value: "Chen" },
              { label: "Email", value: "sarah.chen@meridian.co.uk" },
              { label: "Phone", value: "+44 7700 900842" },
              { label: "Job Title", value: "Head of Digital Transformation" },
            ].map((field) => (
              <div key={field.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <label style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)" }}>
                  {field.label}
                </label>
                <input
                  defaultValue={field.value}
                  style={{
                    padding: "8px 12px",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontFamily: "inherit",
                    outline: "none",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)" }}>
                Company
              </label>
              <select
                defaultValue="Meridian Healthcare"
                style={{
                  padding: "8px 12px",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontFamily: "inherit",
                  outline: "none",
                  color: "var(--text-primary)",
                  background: "white",
                }}
              >
                <option>Meridian Healthcare</option>
              </select>
            </div>
          </div>
        </div>

        {/* Engagement Notes section */}
        <div style={{ marginBottom: "28px" }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "16px",
              paddingBottom: "8px",
              borderBottom: "1px solid var(--border)",
              color: "var(--text-primary)",
            }}
          >
            Engagement Notes
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "4px" }}>
              <label style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)" }}>Notes</label>
              <textarea
                defaultValue="Met at Digital Health Summit in March. Interested in our data integration platform for consolidating patient records across 14 clinics. Budget approved for Q3, but procurement process is slow. Key concern: GDPR compliance and data residency. Prefers async communication."
                style={{
                  padding: "8px 12px",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontFamily: "inherit",
                  outline: "none",
                  minHeight: "80px",
                  resize: "vertical",
                  color: "var(--text-primary)",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)" }}>Lead Source</label>
              <select
                defaultValue="Conference"
                style={{
                  padding: "8px 12px",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontFamily: "inherit",
                  outline: "none",
                  color: "var(--text-primary)",
                  background: "white",
                }}
              >
                <option>Conference</option>
                <option>Referral</option>
                <option>Inbound</option>
                <option>Direct</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-secondary)" }}>Deal Stage</label>
              <select
                defaultValue="Proposal"
                style={{
                  padding: "8px 12px",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontFamily: "inherit",
                  outline: "none",
                  color: "var(--text-primary)",
                  background: "white",
                }}
              >
                <option>Qualification</option>
                <option>Proposal</option>
                <option>Negotiation</option>
                <option>Closed Won</option>
              </select>
            </div>
          </div>
        </div>

        {/* Form actions */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end",
            paddingTop: "16px",
            borderTop: "1px solid var(--border)",
          }}
        >
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
            Cancel
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
            Save Changes
          </button>
        </div>
      </main>

      {/* Sidebar */}
      <aside style={{ padding: "24px", background: "var(--bg)", overflowY: "auto" }}>
        {/* Deal Summary */}
        <div style={{ marginBottom: "24px" }}>
          <h4
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--text-secondary)",
              marginBottom: "12px",
            }}
          >
            Deal Summary
          </h4>
          {[
            { key: "Value", val: "£42,000" },
            { key: "Stage", val: "Proposal" },
            { key: "Probability", val: "65%" },
            { key: "Expected Close", val: "Jun 2026" },
            { key: "Owner", val: "Nick Edwards" },
          ].map((row) => (
            <div
              key={row.key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
                fontSize: "13px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ color: "var(--text-secondary)" }}>{row.key}</span>
              <span style={{ fontWeight: 500, color: "var(--text-primary)" }}>{row.val}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ marginBottom: "24px" }}>
          <h4
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--text-secondary)",
              marginBottom: "12px",
            }}
          >
            Tags
          </h4>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            <span style={{ padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500, background: "#eef1fe", color: "#4f6ef7" }}>Healthcare</span>
            <span style={{ padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500, background: "#f0fdf4", color: "#059669" }}>Enterprise</span>
            <span style={{ padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500, background: "#fefce8", color: "#ca8a04" }}>GDPR-sensitive</span>
          </div>
        </div>

        {/* Activity Timeline */}
        <div>
          <h4
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--text-secondary)",
              marginBottom: "12px",
            }}
          >
            Activity Timeline
          </h4>
          <div style={{ position: "relative", paddingLeft: "20px" }}>
            <div
              style={{
                position: "absolute",
                left: "4px",
                top: "4px",
                bottom: "4px",
                width: "2px",
                background: "var(--border)",
              }}
            />
            {[
              { text: "Proposal sent - v2 with updated pricing", date: "2 Apr 2026", first: true },
              { text: "Call with Sarah + procurement team (45 min)", date: "28 Mar 2026", first: false },
              { text: "Demo session - showed data integration workflow", date: "21 Mar 2026", first: false },
              { text: "Initial meeting at Digital Health Summit", date: "14 Mar 2026", first: false },
            ].map((item, i) => (
              <div
                key={i}
                style={{ position: "relative", paddingBottom: i < 3 ? "16px" : "0" }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-20px",
                    top: "4px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: item.first ? "var(--accent-light)" : "white",
                    border: `2px solid ${item.first ? "var(--accent)" : "var(--border)"}`,
                  }}
                />
                <div style={{ fontSize: "13px", color: "var(--text-primary)" }}>{item.text}</div>
                <div style={{ fontSize: "11px", color: "var(--text-tertiary)", marginTop: "2px" }}>{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
