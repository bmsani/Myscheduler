import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard: any = () => {
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pt-10 px-2 md:px-5 bg-[#F1F3F8]">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side w-48">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-full bg-[#D6E5FA]">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard" className="font-semibold">
                Event Type
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/scheduling/upcomingEvent"
                className="font-semibold"
              >
                Scheduled event
              </Link>
            </li>
            <li>
              <Link to="/dashboard/workflow" className="font-semibold">
                Workflows
              </Link>
            </li>
            <li>
              <Link to="/dashboard/reviewInput" className="font-semibold">
                Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
