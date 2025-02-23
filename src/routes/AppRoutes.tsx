import { lazy } from "react";
import Loadable from "@/components/Global/Loadable";
import AppLayout from "@/layouts/AppLayout";

const Home = Loadable(lazy(() => import("@/views/Home")));
const Customer = Loadable(lazy(() => import("@/views/Customer")));

const AppRoutes = {
  path: "/",
  element: (
    //   <ProtectedRoute>
    <AppLayout />
    //   </ProtectedRoute>
  ),
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "customer/*",
      element: <Customer />,
    },
  ],
};

export default AppRoutes;
