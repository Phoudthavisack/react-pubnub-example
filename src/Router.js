import React from "react";
import { useRoutes } from "react-router-dom";

// page
import HomePage from "./pages/HomePage";
export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
}
