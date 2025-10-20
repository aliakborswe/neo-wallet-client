import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import faq from "@/pages/faq";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { agentSidebarItems } from "./agentSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import type { TRole } from "@/types";
import { profileSidebarItems } from "./profileSidebarItems";

export const router = createBrowserRouter([
  {
    Component: withAuth(DashboardLayout, role.ADMIN as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to='/admin/analytics' /> },
      ...generateRoutes(adminSidebarItems),
      ...generateRoutes(profileSidebarItems(role.ADMIN)),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.AGENT as TRole),
    path: "/agent",
    children: [
      { index: true, element: <Navigate to='/agent/commission' /> },
      ...generateRoutes(agentSidebarItems),
      ...generateRoutes(profileSidebarItems(role.AGENT)),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.USER as TRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to='/user/add-money' /> },
      ...generateRoutes(userSidebarItems),
      ...generateRoutes(profileSidebarItems(role.USER)),
    ],
  },

  {
    Component: App,
    path: "/",
    children: [
      { index: true, Component: Home },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: faq,
        path: "faq",
      },
      {
        Component: Pricing,
        path: "pricing",
      },
      {
        Component: Contact,
        path: "contact",
      },
    ],
  },
  {
    Component: Login,
    path: "login",
  },
  {
    Component: Register,
    path: "register",
  },
  {
    Component: Verify,
    path: "verify",
  },
  {
    Component: Unauthorized,
    path: "unauthorized",
  },
]);
