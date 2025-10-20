// import Analytics from "@/pages/admin/Analytics";
import AllTransaction from "@/pages/dashboard/admin/AllTransaction";
import AllWallet from "@/pages/dashboard/admin/AllWallet";
import Analytics from "@/pages/dashboard/admin/Analytics";
import ManageAgents from "@/pages/dashboard/admin/ManageAgents";
import ManageUsers from "@/pages/dashboard/admin/ManageUsers";
import type { ISidebarItem } from "@/types";
// import { lazy } from "react";

// const Analytics = lazy(() => import("@/pages/dashboard/admin/Analytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "Manage Users",
        url: "/admin/manage-users",
        component: ManageUsers,
      },
      {
        title: "Manage Agents",
        url: "/admin/manage-agents",
        component: ManageAgents,
      },
      {
        title: "All Transaction",
        url: "/admin/all-transactions",
        component: AllTransaction,
      },
      {
        title: "All Wallets",
        url: "/admin/all-wallets",
        component: AllWallet,
      },
    ],
  },
];
