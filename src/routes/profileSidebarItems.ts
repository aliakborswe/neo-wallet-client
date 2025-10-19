import { lazy } from "react";
import type { ISidebarItem } from "@/types";

const Profile = lazy(() => import("@/pages/dashboard/common/Profile"));
const UpdateProfile = lazy(
  () => import("@/pages/dashboard/common/UpdateProfile")
);
const Wallet = lazy(() => import("@/pages/dashboard/common/Wallet"));

const dashboardRoutes: Record<string, string> = {
  ADMIN: "/admin",
  AGENT: "/agent",
  USER: "/user",
};

/**
 * Returns sidebar items for the profile section based on user role.
 * @param userRole - The current user's role (ADMIN, AGENT, USER)
 */
export function profileSidebarItems(
  userRole: keyof typeof dashboardRoutes = "USER"
): ISidebarItem[] {
  const baseRoute = dashboardRoutes[userRole] || dashboardRoutes.USER;
  return [
    {
      title: "Profile",
      items: [
        {
          title: "My Profile",
          url: `${baseRoute}/profile`,
          component: Profile,
        },
        {
          title: "My Wallet",
          url: `${baseRoute}/wallet`,
          component: Wallet,
        },
        {
          title: "Update Profile",
          url: `${baseRoute}/update-profile`,
          component: UpdateProfile,
        },
      ],
    },
  ];
}
