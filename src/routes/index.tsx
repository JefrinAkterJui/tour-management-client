
import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:App
    },
    {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  }
])