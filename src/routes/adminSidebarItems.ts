// import Analytics from "@/pages/admin/Analytics";
import AllTransaction from "@/pages/dashboard/admin/AllTransaction";
import Analytics from "@/pages/dashboard/admin/Analytics";
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
        title: "All Transaction",
        url: "/admin/all-transactions",
        component: AllTransaction,
      },
    ],
  },
];
