import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { TourProvider } from "./lib/tour/tour-context";
import "driver.js/dist/driver.css";


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TourProvider>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
        <Toaster richColors />
      </ReduxProvider>
    </TourProvider>
  </React.StrictMode>
);
