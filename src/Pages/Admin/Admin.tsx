import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin: any = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side w-48">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/admin">Users Details</Link>
          </li>
          <li>
            <Link to="/admin/userDetails">User events</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
