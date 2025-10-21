import AgentTransactions from "@/pages/dashboard/agent/AgentTransactions";
import CashIn from "@/pages/dashboard/agent/CashIn";
import Commission from "@/pages/dashboard/agent/Commission";
import Overview from "@/pages/dashboard/agent/Overview";
import type { ISidebarItem } from "@/types";

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Agent Dashboard",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        component: Overview,
      },
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
      {
        title: "Transactions",
        url: "/agent/transactions",
        component: AgentTransactions,
      },
    ],
  },
];
