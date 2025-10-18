import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";


export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/agent/analytics",
        component: Analytics,
      },
      {
        title: "Project Structure",
        url: "/agent/about",
        component: Analytics,
      },
    ],
  },
];