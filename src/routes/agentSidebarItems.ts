import CashIn from "@/pages/dashboard/agent/CashIn";
import Commission from "@/pages/dashboard/agent/Commission";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent Dashboard",
    items: [
      {
        title: "My Commission",
        url: "/agent/commission",
        component: Commission,
      },
      {
        title: "Cash In",
        url: "/agent/cash-in",
        component: CashIn,
      },
    ],
  },
];
