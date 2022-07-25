import React from "react";
import { Link, Outlet } from "react-router-dom";

const LoginHome: any = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl font-bold text-center pt-2">Your Dashboard</h1>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/home">Event Type</Link>
          </li>
          <li>
            <Link to="/home">Scheduling event</Link>
          </li>
          <li>
            <Link to="/home">Workflows</Link>
          </li>
          <li>
            <Link to="/home">Routing forms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginHome;
