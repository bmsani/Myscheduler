import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AccountSettings: any = () => {
  const items = (
    <>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium text-secondary border-b-2 border-b-secondary py-3 px-6"
              : "py-3 px-6 font-medium text-primary"
          }
          to="/accountSettings/profile"
        >
          Profile
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium text-secondary border-b-2 border-b-secondary py-3 px-6"
              : "py-3 px-6 font-medium text-primary"
          }
          to="/accountSettings/branding"
        >
          Branding
        </NavLink>
      </span>
    </>
  );
  return (
    <div className="mx-auto px-2 md:px-5 lg:px-20 max-w-[1400px] py-5">
      <h2 className="pb-5 text-2xl text-center font-semibold text-gray-600">
        Account Settings
      </h2>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col border border-[#b8b8b8] p-2 md:p-8 w-full lg:w-1/2 mx-auto rounded-lg">
          <div className="w-full navbar mb-4">
            <div className=" flex-none block border-b border-[#b8b8b8] py-3 w-full">
              <ul className="menu menu-horizontal flex justify-start ">
                {items}
              </ul>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
