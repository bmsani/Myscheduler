import React from "react";
import { FcWorkflow } from "react-icons/fc";
import {
  MdOutlineEventAvailable,
  MdOutlineRateReview,
  MdSchedule,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard: any = () => {
  const sideLinks = (
    <>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary " : "text-primary"
          }
          to="/dashboard/allEvents"
        >
          <span className="flex items-center gap-2">
            <MdOutlineEventAvailable className="text-xl" />
            Event Type
          </span>
        </NavLink>
      </p>

      <p>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "text-primary"
          }
          to="/dashboard/scheduling/upcomingEvent"
        >
          <span className="flex items-center gap-2">
            <MdSchedule className="text-xl" />
            Scheduled event
          </span>
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "text-primary"
          }
          to="/dashboard/workflow"
        >
          <span className="flex items-center gap-2">
            <FcWorkflow className="text-xl" />
            Workflows
          </span>
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "text-primary"
          }
          to="/dashboard/reviewInput"
        >
          <span className="flex items-center gap-2">
            <MdOutlineRateReview className="text-xl" />
            Review
          </span>
        </NavLink>
      </p>
    </>
  );
  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pt-10 px-2 md:px-5">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side w-48">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-full bg-[#D6E5FA] gap-5">
            {/* <!-- Sidebar content here --> */}
            {sideLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
