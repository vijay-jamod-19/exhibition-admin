import { lazy } from "react";
import Loadable from "@/components/Global/Loadable";
import AuthLayout from "@/layouts/AuthLayout";

const SignIn = Loadable(lazy(() => import("@/views/Auth/SignIn")));
const SignUp = Loadable(lazy(() => import("@/views/Auth/SignUp")));
const ForgotPassword = Loadable(
  lazy(() => import("@/views/Auth/ForgotPassword"))
);
const ResetPassword = Loadable(
  lazy(() => import("@/views/Auth/ResetPassword"))
);

const AuthRoutes = {
  path: "/auth/",
  element: <AuthLayout />,
  children: [
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "reset-password",
      element: <ResetPassword />,
    },
  ],
};

export default AuthRoutes;
