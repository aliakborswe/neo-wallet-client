import App from "@/App";
import About from "@/pages/About";
import faq from "@/pages/faq";
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
        Component: faq,
        path: "faq",
      }
    ],
  },
]);
