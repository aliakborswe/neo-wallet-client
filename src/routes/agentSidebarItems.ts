import CashIn from "@/pages/dashboard/agent/CashIn";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent Dashboard",
    items: [
      {
        title: "Cash In",
        url: "/agent/cash-in",
        component: CashIn,
      },
      {
        title: "Project Structure",
        url: "/agent/about",
        component: CashIn,
      },
    ],
  },
];
