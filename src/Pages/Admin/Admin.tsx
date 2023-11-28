import React from "react";
import { FaUsers } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { MdEventAvailable } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Admin: any = () => {
  const sideLinks = (
    <>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "text-primary"
          }
          to="/admin/userDetails"
        >
          <span className="flex items-center gap-3">
            <FaUsers className="text-lg" />
            Users Details
          </span>
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "text-primary"
          }
          to="/admin/eventDetails"
        >
          <span className="flex items-center gap-3">
            <MdEventAvailable className="text-xl" />
            Users Events
          </span>
        </NavLink>
      </span>
      <span>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-secondary" : "text-primary"
          }
          to="/admin/allBookings"
        >
          <span className="flex items-center gap-3">
            <HiOutlineClock className="text-xl" />
            All Bookings
          </span>
        </NavLink>
      </span>
    </>
  );
  return (
    <div className="mx-auto">
      <div className="drawer drawer-mobile ">
        <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side w-48">
          <label htmlFor="admin-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 pt-6 overflow-y-auto w-full bg-[#D6E5FA]  gap-4 font-medium">
            {/* <!-- Sidebar content here --> */}
            {sideLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
