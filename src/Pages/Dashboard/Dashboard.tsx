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
          <span className="flex items-center gap-3">
            <MdOutlineEventAvailable className="text-2xl" />
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
          <span className="flex items-center gap-3">
            <MdSchedule className="text-2xl" />
            Scheduled Event
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
          <span className="flex items-center gap-3">
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
          <span className="flex items-center gap-3">
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
        <div className="drawer-content p-5">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side w-48">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-4 pt-8 overflow-y-auto w-full bg-[#D6E5FA] gap-6">
            {/* <!-- Sidebar content here --> */}
            {sideLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
