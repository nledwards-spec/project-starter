export interface Contact {
  name: string;
  email: string;
  company: string;
  status: "active" | "pending" | "inactive" | "overdue";
  dealValue: number;
  lastContact: string;
  source: string;
  initials: string;
  avatarGradient: string;
}

export interface KpiCard {
  label: string;
  value: string;
  change: string;
  direction: "up" | "down";
}

export interface ActivityItem {
  user?: string;
  action: string;
  target?: string;
  amount?: string;
  time: string;
  colour: string;
}

export interface Integration {
  name: string;
  description: string;
  category: string;
  status: "active" | "pending" | "inactive";
  lastSynced: string;
  iconBg: string;
  iconColour: string;
  icon: string;
}

export interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
}
