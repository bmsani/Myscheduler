import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../src/Utilities/icon/calendar.png";
import Button from "../Button/Button";

const Navbar = () => {
  const { pathname } = useLocation();
  const [colorChange, setColorchange] = useState(false);
  const [anotherRouteColorChange, setAnotherRouteColorChange] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setAnotherRouteColorChange(true);
    }
    else{
      setAnotherRouteColorChange(false);
    }
  }, [pathname, anotherRouteColorChange]);

  console.log(anotherRouteColorChange);

  const changeNavbarColor = () => {
  if (window.scrollY >= 80 || pathname !== "/") {
    setColorchange(true);
  } else {
    setColorchange(false);
  }
};
window.addEventListener("scroll", changeNavbarColor);

  const items = (
    <>
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
    </>
  );
  return (
    <div className="sticky top-0 z-50">
      <div
        className={
          colorChange || anotherRouteColorChange 
            ? "navbar bg-base-100 absolute text-black shadow-xl"
            : "navbar bg-transparent absolute text-white duration-300"
        }
      >
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
              {items}
            </ul>
          </div>
          <Link className="normal-case text-xl" to="/">
            <span className="flex items-center">
              <img className="w-10" src={Logo} alt="" />
              <span className="font-bold text-secondary pl-4 hidden lg:block">
                MyScheduler
              </span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-semibold xl:gap-16">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <Button>
              <span className="px-4">Login</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
