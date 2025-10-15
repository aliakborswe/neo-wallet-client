import App from "@/App";
import About from "@/pages/About";
import faq from "@/pages/faq";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
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
      }
    ],
  },
]);
