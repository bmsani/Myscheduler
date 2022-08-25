import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin: any = () => {
  return (
    <div className="">
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
              <Link to="/admin">Users Details</Link>
            </li>
            <li>
              <Link to="/admin/eventDetails">Users Events</Link>
            </li>
            <li>
              <Link to="/admin/allBookings">All Bookings</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
