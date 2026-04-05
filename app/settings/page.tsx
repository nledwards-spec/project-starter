import { SettingsLayout } from "@/components/layouts/SettingsLayout";

const navGroups = [
  {
    label: "Account",
    items: [
      { label: "Profile" },
      { label: "Notifications", active: true },
      { label: "Security" },
      { label: "Billing" },
    ],
  },
  {
    label: "Team",
    items: [
      { label: "Members" },
      { label: "Roles" },
      { label: "Invitations" },
    ],
  },
  {
    label: "Integrations",
    items: [
      { label: "Connected Apps" },
      { label: "API Keys" },
      { label: "Webhooks" },
    ],
  },
];

interface ToggleProps {
  on?: boolean;
}

function Toggle({ on }: ToggleProps) {
  return (
    <div
      style={{
        width: "40px",
        height: "22px",
        borderRadius: "11px",
        background: on ? "var(--accent)" : "#d1d5db",
        position: "relative",
        cursor: "pointer",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "2px",
          left: on ? "20px" : "2px",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "white",
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      />
    </div>
  );
}

interface SettingRowProps {
  title: string;
  description: string;
  on?: boolean;
  last?: boolean;
}

function SettingRow({ title, description, on, last }: SettingRowProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: last ? "none" : "1px solid var(--border)",
      }}
    >
      <div>
        <h5 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px", color: "var(--text-primary)" }}>
          {title}
        </h5>
        <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>{description}</p>
      </div>
      <Toggle on={on} />
    </div>
  );
}

export default function SettingsPage() {
  return (
    <SettingsLayout title="Settings" navGroups={navGroups}>
      <div style={{ padding: "28px 32px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "4px", color: "var(--text-primary)" }}>
          Notifications
        </h2>
        <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "24px" }}>
          Choose how and when you want to be notified about activity in your workspace.
        </p>

        {/* Email Notifications card */}
        <div
          style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "24px",
            marginBottom: "16px",
          }}
        >
          <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px", color: "var(--text-primary)" }}>
            Email Notifications
          </h4>
          <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>
            Control which events trigger email notifications to your inbox.
          </p>
          <SettingRow
            title="New deal assigned"
            description="Get notified when a deal is assigned to you or your team"
            on
          />
          <SettingRow
            title="Deal stage changes"
            description="Notification when deals in your pipeline move between stages"
            on
          />
          <SettingRow
            title="Weekly digest"
            description="Summary of pipeline activity sent every Monday morning"
          />
          <SettingRow
            title="Marketing updates"
            description="Product news, feature announcements, and tips"
            last
          />
        </div>

        {/* In-App Notifications card */}
        <div
          style={{
            background: "white",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "24px",
            marginBottom: "16px",
          }}
        >
          <h4 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px", color: "var(--text-primary)" }}>
            In-App Notifications
          </h4>
          <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>
            These appear in the notification bell within the application.
          </p>
          <SettingRow
            title="Mentions and comments"
            description="When someone @mentions you or replies to your comment"
            on
          />
          <SettingRow
            title="Task reminders"
            description="Upcoming and overdue task notifications"
            on
          />
          <SettingRow
            title="Contact activity"
            description="When contacts open emails, visit pages, or complete actions"
            on
            last
          />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginTop: "16px" }}>
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
            Reset to Defaults
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
            Save Preferences
          </button>
        </div>
      </div>
    </SettingsLayout>
  );
}
