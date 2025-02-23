import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loadable from "@/components/Global/Loadable";

const ListOut = Loadable(lazy(() => import("./Listout")));
const Add = Loadable(lazy(() => import("./Create")));
const Update = Loadable(lazy(() => import("./Update")));
const View = Loadable(lazy(() => import("./View")));

const Customer = () => {
  return (
    <Routes>
      <Route index element={<ListOut />} />
      <Route path="list" element={<ListOut />} />
      <Route path="create" element={<Add />} />
      <Route path="update/:id" element={<Update />} />
      <Route path="view/:id" element={<View />} />
    </Routes>
  );
};

export default Customer;
