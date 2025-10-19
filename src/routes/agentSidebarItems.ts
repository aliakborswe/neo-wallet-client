// import Analytics from "@/pages/agent/Analytics";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/dashboard/agent/Analytics"));

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
