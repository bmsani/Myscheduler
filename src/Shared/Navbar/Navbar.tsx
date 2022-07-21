import { Link } from "react-router-dom";
import Logo from "../../../src/Utilities/icon/calendar.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="w-3/4 lg:w-1/2 md:w-3/5 lg:justify-start justify-between">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/">Contac</Link>
              </li>
              <li>
                <Link to="/">Admin</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl" href="/">
            <span className="flex items-center">
              <img className="w-10" src={Logo} alt="" />
              <span className="font-bold text-primary pl-4 hidden lg:block">
                MyScheduler
              </span>
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal py-2 font-bold xl:gap-16">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Admin</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="text-secondary font-semibold border-2 border-secondary hover:bg-secondary hover:text-white duration-300 rounded-lg px-2 py-1">
              <span className="px-4">Login</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
