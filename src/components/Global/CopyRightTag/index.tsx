import { developed_by } from "@/environment";
import React from "react";

const CopyRightTag = () => {
  return (
    <p className="mb-0">
      Copyright &copy; {new Date().getFullYear()}&#x2800;
      <b>{developed_by}</b>
      &nbsp; -&nbsp; All Right Reserved.
    </p>
  );
};

export default CopyRightTag;
