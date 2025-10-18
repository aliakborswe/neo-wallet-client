import Analytics from "@/pages/admin/Analytics";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "User Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/user/analytics",
        component: Analytics,
      },
      {
        title: "Project Structure",
        url: "/user/about",
        component: Analytics,
      },
    ],
  },
];
