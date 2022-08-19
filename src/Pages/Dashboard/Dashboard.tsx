import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard: any = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side w-48">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-full bg-slate-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard" className="font-semibold">
              Event Type
            </Link>
          </li>
          <li>
            <Link to="/dashboard/scheduling/upcomingEvent" className="font-semibold">
              Scheduled event
            </Link>
          </li>
          <li>
            <Link to="/dashboard/workflow" className="font-semibold">
              Workflows
            </Link>
          </li>
          <li>
            <Link to="/dashboard/routingForms" className="font-semibold">
              Routing forms
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
