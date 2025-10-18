import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Analytics from "@/pages/admin/Analytics";
import Contact from "@/pages/Contact";
import faq from "@/pages/faq";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Pricing from "@/pages/Pricing";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: DashboardLayout,
    path: "/dashboard",
    children: [
      {
        Component: Analytics,
        path: "analytics",
      },
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
    ],
  },
]);
