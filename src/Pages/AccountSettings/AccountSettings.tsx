import React from "react";
import { Link, Outlet } from "react-router-dom";

const AccountSettings: any = () => {
  const items = (
    <>
      <li>
        <Link to="/accountSettings/profile">Profile</Link>
      </li>
      <li>
        <Link to="/accountSettings/branding">Branding</Link>
      </li>
      <li>
        <Link to="/accountSettings/myLink">My Link</Link>
      </li>
      <li>
        <Link to="/accountSettings/phoneNumber">Phone Number</Link>
      </li>
    </>
  );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          {/* <div className="flex-none lg:hidden w-full navbar-end">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div> */}
          <div className="mx-auto flex-none block">
            <ul className="menu menu-horizontal">{items}</ul>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      {/* <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">{items}</ul>
      </div> */}
    </div>
  );
};

export default AccountSettings;
