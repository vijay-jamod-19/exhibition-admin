import React from "react";
import { all_routes } from "@/routes/all_routes";
const routes = all_routes;

export const MenuItems = [
  {
    tittle: "Main Menu",
    icon: "airplay",
    showAsTab: true,
    separateRoute: false,
    submenuItems: [
      {
        label: "Dashboard",
        link: "/",
        submenu: false,
        showSubRoute: false,
        icon: "smart-home",
        base: "dashboard",
        materialicons: "start",
        submenuItems: [],
      },
      {
        label: "Customers",
        link: "#",
        submenu: true,
        showSubRoute: false,
        icon: "user-shield",
        base: "contact",
        materialicons: "confirmation_number",
        submenuItems: [
          {
            label: "List Out",
            link: routes.customerList,
            base: "customer-listout",
          },
          {
            label: "Create",
            link: routes.customerCreate,
            base: "customer-create",
          },
        ],
      },
    ],
  },
];

export default MenuItems;
