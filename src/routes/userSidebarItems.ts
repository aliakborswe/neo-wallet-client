// import Overview from "@/pages/user/Overview";
import AddMoney from "@/pages/dashboard/user/AddMoney";
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
    ],
  },
];
