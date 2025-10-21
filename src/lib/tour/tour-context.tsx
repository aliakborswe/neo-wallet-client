
import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { driver } from "driver.js";
import { userTourSteps, agentTourSteps, adminTourSteps } from "./tour-config";

interface TourContextType {
  startTour: (role?: string) => void;
  resetTour: () => void;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export function TourProvider({ children }: { children: React.ReactNode }) {
  const [driverInstance, setDriverInstance] = useState<ReturnType<
    typeof driver
  > | null>(null);

  useEffect(() => {
    // Initialize driver.js instance
    const driverJs = driver({
      showProgress: true,
      showButtons: ["next", "previous", "close"],
      overlayOpacity: 0.5,
      allowClose: true,
      onDestroyed: () => {
        localStorage.setItem("neo-wallet-tour-seen", "true");
      },
    });
    setDriverInstance(driverJs);

    // Auto-start tour for new users
    const tourSeen = localStorage.getItem("neo-wallet-tour-seen");
    if (!tourSeen) {
      const timer = setTimeout(() => {
        // Tour will be started by the GuidedTour component based on user role
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const startTour = (role = "USER") => {
    if (!driverInstance) return;

    let steps = userTourSteps;
    if (role === "AGENT") steps = agentTourSteps;
    else if (role === "ADMIN") steps = adminTourSteps;

    setTimeout(() => {
      driverInstance.setConfig({ steps });
      driverInstance.drive();
    }, 800); // Wait for dashboard to render
  };
  

  const resetTour = () => {
    localStorage.removeItem("neo-wallet-tour-seen");
    startTour();
  };

  return (
    <TourContext.Provider value={{ startTour, resetTour }}>
      {children}
    </TourContext.Provider>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export function useTour() {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTour must be used within TourProvider");
  }
  return context;
}
