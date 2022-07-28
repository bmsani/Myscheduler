import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const AccountSettings: any = () => {
  let activeClassName = "text-secondary font-bold";
  const items = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/accountSettings/profile"
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/accountSettings/branding"
        >
          Branding
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/accountSettings/myLink"
        >
          My Link
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/accountSettings/phoneNumber"
        >
          Phone Number
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
