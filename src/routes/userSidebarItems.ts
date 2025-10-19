// import Overview from "@/pages/user/Overview";
import AddMoney from "@/pages/dashboard/user/AddMoney";
import CashOut from "@/pages/dashboard/user/CashOut";
import SendMoney from "@/pages/dashboard/user/SendMoney";
import WithdrawMoney from "@/pages/dashboard/user/WithdrawMoney";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";
const Overview = lazy(() => import("@/pages/dashboard/user/Overview"));

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
      }
    ],
  },
];
