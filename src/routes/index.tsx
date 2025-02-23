import { useRoutes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
// import CommonRoutes from "./CommonRoutes";

const Routes = () => {
  return useRoutes([AppRoutes, AuthRoutes]);
};

export default Routes;
