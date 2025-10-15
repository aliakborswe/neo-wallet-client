import App from "@/App";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import faq from "@/pages/faq";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {index: true, Component: Home},
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
      }
    ],
  },
]);
