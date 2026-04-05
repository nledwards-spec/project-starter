import { SplitPaneLayout } from "@/components/layouts/SplitPaneLayout";
import { messages } from "@/lib/sample-data";

const railItems = [
  { label: "IN", active: true },
  { label: "SE" },
  { label: "DR" },
  { label: "---" },
  { label: "TK" },
  { label: "CT" },
];

const listItems = messages.map((m) => ({
  id: m.id,
  name: m.sender,
  subject: m.subject,
  preview: m.preview,
  time: m.time,
  unread: m.unread,
  active: m.id === "1",
}));

const listHeader = (
  <div>
    <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "10px", color: "var(--text-primary)" }}>
      Inbox{" "}
      <span style={{ fontWeight: 400, color: "var(--text-secondary)", fontSize: "13px" }}>(12 unread)</span>
    </h3>
    <input
      type="text"
      placeholder="Search messages..."
      style={{
        width: "100%",
        padding: "7px 10px",
        border: "1px solid var(--border)",
        borderRadius: "6px",
        fontSize: "13px",
        outline: "none",
        fontFamily: "inherit",
        boxSizing: "border-box",
      }}
    />
  </div>
);

export default function InboxPage() {
  return (
    <SplitPaneLayout railItems={railItems} listHeader={listHeader} listItems={listItems}>
      <div style={{ padding: "28px 32px" }}>
        {/* Detail header */}
        <div
          style={{
            marginBottom: "24px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px", color: "var(--text-primary)" }}>
            Re: Crestview Partnership Proposal
          </h2>
          <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "var(--text-secondary)" }}>
            <span>
              <strong style={{ color: "var(--text-primary)" }}>Laura Mitchell</strong>{" "}
              &lt;l.mitchell@crestview-partners.com&gt;
            </span>
            <span>Today at 2:14pm</span>
          </div>
        </div>

        {/* Message body */}
        <div
          style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "24px",
            fontSize: "14px",
            lineHeight: 1.7,
            color: "var(--text-primary)",
          }}
        >
          <p style={{ marginBottom: "16px" }}>Hi Nick,</p>
          <p style={{ marginBottom: "16px" }}>
            Thanks for sending over the updated scope document. I&apos;ve had a chance to review it with our COO
            and we&apos;re broadly aligned on the approach. A few questions before we can give the final green
            light:
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>1. Phase 2 timeline</strong> - You&apos;ve got the market mapping starting in August, but
            our annual planning cycle kicks off mid-September. Is there flexibility to pull this forward by 2-3
            weeks so we can feed the findings directly into the planning process?
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>2. Workshop facilitation</strong> - For the leadership alignment workshop, would this be
            you personally or another member of the White Space team? We had a great experience with the
            Meridian workshop format and would like something similar.
          </p>
          <p style={{ marginBottom: "16px" }}>
            <strong>3. Interim deliverables</strong> - Can we get a checkpoint presentation after the first 4
            weeks? Our board meets monthly and I&apos;d like to be able to show early findings.
          </p>
          <p style={{ marginBottom: "16px" }}>
            Happy to jump on a call later this week if easier to discuss. Thursday afternoon works for me.
          </p>
          <p>
            Best,
            <br />
            Laura
          </p>
        </div>

        {/* Actions */}
        <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
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
            Reply
          </button>
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
            Forward
          </button>
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
            Archive
          </button>
        </div>
      </div>
    </SplitPaneLayout>
  );
}
