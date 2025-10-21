// import Overview from "@/pages/user/Overview";
import AddMoney from "@/pages/dashboard/user/AddMoney";
import CashOut from "@/pages/dashboard/user/CashOut";
import Overview from "@/pages/dashboard/user/Overview";
import SendMoney from "@/pages/dashboard/user/SendMoney";
import Transactions from "@/pages/dashboard/user/Transactions";
import WithdrawMoney from "@/pages/dashboard/user/WithdrawMoney";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "User Dashboard",
    items: [
      {
        title: "Overview",
        url: "/user/overview",
        component: Overview,
      },
      {
        title: "Add/Top-Up Money",
        url: "/user/add-money",
        component: AddMoney,
      },
      {
        title: "Withdraw Money",
        url: "/user/withdraw-money",
        component: WithdrawMoney,
      },
      {
        title: "Send Money",
        url: "/user/send-money",
        component: SendMoney,
      },
      {
        title: "Cash Out",
        url: "/user/cash-out",
        component: CashOut,
      },
      {
        title: "Transactions",
        url: "/user/transactions",
        component: Transactions,
      },
    ],
  },
];
