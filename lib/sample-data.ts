import type { Contact, KpiCard, ActivityItem, Integration, Message } from "./types";

export const kpiCards: KpiCard[] = [
  { label: "Total Revenue", value: "£284,921", change: "+12.3% vs last month", direction: "up" },
  { label: "Active Users", value: "3,847", change: "+8.1% vs last month", direction: "up" },
  { label: "Conversion Rate", value: "4.2%", change: "-0.3% vs last month", direction: "down" },
  { label: "Avg. Deal Size", value: "£2,340", change: "+5.7% vs last month", direction: "up" },
];

export const activityItems: ActivityItem[] = [
  {
    user: "Sarah Chen",
    action: "closed deal with",
    target: "Meridian Healthcare",
    amount: "£18,500",
    time: "12 minutes ago",
    colour: "var(--success)",
  },
  {
    user: "James Wright",
    action: "moved",
    target: "Orbital Defence",
    amount: undefined,
    time: "1 hour ago",
    colour: "var(--accent)",
  },
  {
    action: "Q2 Pipeline Review",
    target: "scheduled for Thursday at 2pm",
    time: "3 hours ago",
    colour: "var(--warning)",
  },
  {
    user: "Emily Torres",
    action: "added 4 new contacts from",
    target: "Nexus Logistics",
    time: "Yesterday at 4:35pm",
    colour: "var(--text-tertiary)",
  },
];

export const contacts: Contact[] = [
  {
    name: "Sarah Chen",
    email: "sarah.chen@meridian.co.uk",
    company: "Meridian Healthcare",
    status: "active",
    dealValue: 42000,
    lastContact: "2 Apr 2026",
    source: "Referral",
    initials: "SC",
    avatarGradient: "linear-gradient(135deg, #4f6ef7, #8b5cf6)",
  },
  {
    name: "James Wright",
    email: "j.wright@orbital-defence.com",
    company: "Orbital Defence Ltd",
    status: "active",
    dealValue: 128500,
    lastContact: "1 Apr 2026",
    source: "Conference",
    initials: "JW",
    avatarGradient: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    name: "Amira Patel",
    email: "amira@nexus-logistics.co.uk",
    company: "Nexus Logistics",
    status: "pending",
    dealValue: 15800,
    lastContact: "28 Mar 2026",
    source: "Inbound",
    initials: "AP",
    avatarGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
  },
  {
    name: "Tom Henderson",
    email: "tom.h@brightpath.io",
    company: "BrightPath Education",
    status: "inactive",
    dealValue: 8200,
    lastContact: "14 Feb 2026",
    source: "Website",
    initials: "TH",
    avatarGradient: "linear-gradient(135deg, #6b7280, #4b5563)",
  },
  {
    name: "Laura Mitchell",
    email: "l.mitchell@crestview-partners.com",
    company: "Crestview Partners",
    status: "active",
    dealValue: 67300,
    lastContact: "3 Apr 2026",
    source: "Direct",
    initials: "LM",
    avatarGradient: "linear-gradient(135deg, #ef4444, #dc2626)",
  },
  {
    name: "Raj Kapoor",
    email: "raj.kapoor@tidewater.co.uk",
    company: "Tidewater Capital",
    status: "pending",
    dealValue: 95000,
    lastContact: "31 Mar 2026",
    source: "Referral",
    initials: "RK",
    avatarGradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  },
  {
    name: "Fiona O'Brien",
    email: "fiona@blackthorn-group.ie",
    company: "Blackthorn Group",
    status: "overdue",
    dealValue: 23100,
    lastContact: "10 Jan 2026",
    source: "Website",
    initials: "FO",
    avatarGradient: "linear-gradient(135deg, #14b8a6, #0d9488)",
  },
];

export const integrations: Integration[] = [
  {
    name: "HubSpot CRM",
    description:
      "Sync contacts, companies, and deals. Two-way sync keeps both systems up to date with changes reflected in real time.",
    category: "CRM",
    status: "active",
    lastSynced: "Last synced 2 min ago",
    iconBg: "#fff4e6",
    iconColour: "#e8590c",
    icon: "⬡",
  },
  {
    name: "Slack",
    description:
      "Push notifications to channels when deals close, tasks are overdue, or new contacts are added. Configure per-channel rules.",
    category: "Communication",
    status: "active",
    lastSynced: "Last synced 5 min ago",
    iconBg: "#e6f7ff",
    iconColour: "#0284c7",
    icon: "◆",
  },
  {
    name: "Mailchimp",
    description:
      "Sync audience segments and trigger email campaigns based on deal stage or contact activity. Requires API key.",
    category: "Marketing",
    status: "pending",
    lastSynced: "Not connected",
    iconBg: "#fce7f3",
    iconColour: "#db2777",
    icon: "◉",
  },
  {
    name: "Google Analytics",
    description:
      "Pull website traffic data and attribute it to specific contacts and campaigns. Track conversion funnels end to end.",
    category: "Analytics",
    status: "active",
    lastSynced: "Last synced 1 hour ago",
    iconBg: "#f0fdf4",
    iconColour: "#16a34a",
    icon: "▲",
  },
  {
    name: "Stripe",
    description:
      "Sync payment data, invoices, and subscription status. Automatically update deal values when payments are received.",
    category: "Finance",
    status: "active",
    lastSynced: "Last synced 15 min ago",
    iconBg: "#eef1fe",
    iconColour: "#4f6ef7",
    icon: "⇄",
  },
  {
    name: "Zapier",
    description:
      "Connect to 5,000+ apps through Zapier workflows. Build custom automations without code using triggers and actions.",
    category: "Developer",
    status: "inactive",
    lastSynced: "Not connected",
    iconBg: "#fefce8",
    iconColour: "#ca8a04",
    icon: "⚒",
  },
];

export const messages: Message[] = [
  {
    id: "1",
    sender: "Laura Mitchell",
    subject: "Re: Crestview Partnership Proposal",
    preview:
      "Thanks Nick - I've reviewed the updated scope and have a few questions about the timeline for phase 2...",
    time: "2:14pm",
    unread: false,
  },
  {
    id: "2",
    sender: "James Wright",
    subject: "Orbital Defence - Budget Approval",
    preview:
      "Great news - the board approved the full budget for the digital transformation programme. Can we schedule...",
    time: "1:45pm",
    unread: true,
  },
  {
    id: "3",
    sender: "Amira Patel",
    subject: "Nexus Logistics - Data Request",
    preview:
      "Hi, could you share the warehouse throughput benchmarks from the last project? We're putting together...",
    time: "12:30pm",
    unread: true,
  },
  {
    id: "4",
    sender: "Sarah Chen",
    subject: "Re: Meridian GDPR Compliance Docs",
    preview:
      "Our DPO has signed off on the data processing agreement. I'll send the countersigned version by end...",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "5",
    sender: "Tom Henderson",
    subject: "BrightPath - Catch Up?",
    preview:
      "Been a while since we last spoke. We've had some changes at leadership level and I think there might...",
    time: "Yesterday",
    unread: false,
  },
  {
    id: "6",
    sender: "Raj Kapoor",
    subject: "Tidewater Capital - Due Diligence Pack",
    preview:
      "Attached the DD materials you requested. Let me know if you need the full financial model or just the...",
    time: "Yesterday",
    unread: true,
  },
];
