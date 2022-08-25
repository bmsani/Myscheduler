import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Scheduling = () => {
  const items = (
    <>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium text-accent border-b-2 border-b-accent py-4 px-5 "
              : "py-4 px-5 font-medium text-primary"
          }
          to="/dashboard/scheduling/upcomingEvent"
        >
          Upcoming
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium text-accent border-b-2 border-b-accent py-4 px-5"
              : "py-4 px-5 font-medium text-primary"
          }
          to="/dashboard/scheduling/pendingEvent"
        >
          Pending
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-medium text-accent border-b-2 border-b-accent py-4 px-5"
              : "py-4 px-5 font-medium text-primary"
          }
          to="/dashboard/scheduling/pastEvent"
        >
          Past
        </NavLink>
      </p>
    </>
  );
  return (
    <div>
      <h2 className="mb-2 text-2xl text-center font-semibold text-primary">
        Scheduled Event
      </h2>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar border-b pb-0">
            <div className="mx-auto flex-none block">
              <ul className="menu menu-horizontal gap-5">{items}</ul>
            </div>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
