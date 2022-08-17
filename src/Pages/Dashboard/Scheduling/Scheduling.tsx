import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Scheduling = () => {
  const items = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-secondary border-b-2 border-b-secondary"
              : ""
          }
          to="/dashboard/scheduling/upcomingEvent"
        >
          Upcoming
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-error border-b-2 border-b-error hover:bg-white"
              : ""
          }
          to="/dashboard/scheduling/pendingEvent"
        >
          Pending
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "font-bold text-primary border-b-2 border-b-primary hover:bg-white"
              : ""
          }
          to="/dashboard/scheduling/pastEvent"
        >
          Past
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="m-8 border shadow-xl rounded">
      <h2 className="mt-2 text-2xl text-center font-semibold text-gray-600">
        Scheduled Event
      </h2>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar border-b">
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

export default Scheduling;
