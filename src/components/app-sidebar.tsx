import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "./layout/Logo";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { useProfileQuery } from "@/redux/features/auth/auth.api";
import { Link, useLocation } from "react-router";
import Logout from "./layout/Logout";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useProfileQuery(undefined);
  const location = useLocation();

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };

  return (
    <Sidebar {...props} aria-label='Main Sidebar'>
      <Logo className='px-4 py-4' />
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {/* <SidebarMenuButton asChild isActive={item.isActive}> */}
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.url}
                    >
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <div className="w-full flex justify-center items-center p-4 [&>button]:w-full"><Logout/></div>
      <SidebarRail />
    </Sidebar>
  );
}
