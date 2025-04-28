import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./Service.css"
const Service = () => {
  const { state } = useLocation();

  return (
    <div>
      {/* {state} */}

      <NavLink
      className={({isActive})=>isActive ? "active":"inactive"}
        to={"/service/add"}
      >
        Add
      </NavLink>
      <br />
      <NavLink
         className={({isActive})=>isActive ? "active":"inactive"}
        to={"/service/edit"}
      >
        Edit
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Service;
