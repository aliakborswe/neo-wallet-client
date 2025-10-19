import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { agentSidebarItems } from "@/routes/agentSidebarItems";
import { profileSidebarItems } from "@/routes/profileSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.ADMIN:
      return [...adminSidebarItems, ...profileSidebarItems(userRole)];
    case role.AGENT:
      return [...agentSidebarItems, ...profileSidebarItems(userRole)];
    case role.USER:
      return [...userSidebarItems, ...profileSidebarItems(userRole)];
    default:
      return [];
  }
};
