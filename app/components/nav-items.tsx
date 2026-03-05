import {
  LayoutDashboard,
  LineChart,
  HeartPulse,
  Bell,
  Settings,
  LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Revenue",
    href: "/revenue-intelligence",
    icon: LineChart,
  },
  {
    label: "Customer Health",
    href: "/customer-health",
    icon: HeartPulse,
  },
  {
    label: "Alerts",
    href: "/alerts-settings",
    icon: Bell,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

