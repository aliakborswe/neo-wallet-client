
// import Overview from "@/pages/user/Overview";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";
const Overview = lazy(()=> import("@/pages/user/Overview"))

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "User Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/user/overview",
        component: Overview,
      },
      {
        title: "Project Structure",
        url: "/user/about",
        component: Overview,
      },
    ],
  },
];
