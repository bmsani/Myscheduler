import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AccountSettings: any = () => {
  const items = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary border-b-2 border-b-secondary"
              : ""
          }
          to="/accountSettings/profile"
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-error border-b-2 border-b-error hover:bg-white"
              : ""
          }
          to="/accountSettings/branding"
        >
          Branding
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-primary border-b-2 border-b-primary hover:bg-white"
              : ""
          }
          to="/accountSettings/myLink"
        >
          My Link
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="py-8">
      <h2 className="text-2xl text-center font-semibold text-gray-600">
        Account Settings
      </h2>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar">
            <div className="mx-auto flex-none block">
              <ul className="menu menu-horizontal">{items}</ul>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
