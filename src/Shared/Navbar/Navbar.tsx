import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../../../src/Utilities/Logos/MyScheduler.png";
import auth from "../../init.firebase";
import Loading from "../LoadingSpinner/Loading";
import { HiMenu } from "react-icons/hi";
import { BiDownArrow } from "react-icons/bi";
import useAdmin from "../../Hooks/useAdmin";
import ButtonOutline from "../Button/ButtonOutline";
import "./Navbar.css";
const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { pathname } = useLocation();

  const [nav, setNev] = useState(false);

  const handleNavigation = (e: any) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setNev(true);
    } else if (y < window.scrollY) {
      setNev(false);
    }
    setY(window.scrollY);
  };
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  console.log(y);

  const [anotherRouteColorChange, setAnotherRouteColorChange] =
    useState<boolean>(false);
  useEffect(() => {
    if (pathname !== "/") {
      setAnotherRouteColorChange(true);
    } else {
      setAnotherRouteColorChange(false);
    }
  }, [pathname, anotherRouteColorChange]);

  if (loading) {
    return <Loading />;
  }

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const items: any = (
    <>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-secondary lg:border-b-[2px] lg:border-b-secondary navDesign"
              : "nevEffect lg:after:bg-secondary"
          }
          to="/"
        >
          Home
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-secondary lg:border-b-[2px] lg:border-b-secondary navDesign"
              : "nevEffect lg:after:bg-secondary"
          }
          to="/types"
        >
          Types
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-secondary lg:border-b-[2px] lg:border-b-secondary navDesign"
              : "nevEffect lg:after:bg-secondary"
          }
          to="/story"
        >
          Story
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-secondary lg:border-b-[2px] lg:border-b-secondary navDesign"
              : "nevEffect lg:after:bg-secondary"
          }
          to="/about"
        >
          About Us
        </NavLink>
      </p>
      <p>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-secondary lg:border-b-[2px] lg:border-b-secondary navDesign"
              : "nevEffect lg:after:bg-secondary"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </p>
      <p>
        <Link className="block lg:hidden text-start" to="/login">
          <ButtonOutline>
            <span className="px-0 lg:px-4">Login</span>
          </ButtonOutline>
        </Link>
      </p>
    </>
  );
  const firstLetter = user?.displayName?.slice(0, 1);

  return (
    <div className={nav === true ? "sticky top-0 z-50" : ""}>
      {user ? (
        <div className=" bg-base-100 shadow-lg lg:px-4">
          <div className="navbar mx-auto max-w-[1400px]">
            <div className="flex-1 hidden lg:block">
              <div className="w-3/4 lg:w-1/2 md:w-3/5 justify-start">
                <Link className="normal-case text-xl" to="/dashboard">
                  <span className="flex items-end lg:items-center">
                    <img className="w-10" src={Logo} alt="" />
                    <span className="font-bold text-secondary pl-4 hidden lg:block">
                      MyScheduler
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal w-full p-0 flex items-center justify-between">
                <p>
                  {pathname === "/dashboard" ||
                  pathname === "/dashboard/scheduling" ||
                  pathname === "/dashboard/workflow" ||
                  pathname === "/dashboard/scheduling/upcomingEvent" ||
                  pathname === "/dashboard/scheduling/pendingEvent" ||
                  pathname === "/dashboard/scheduling/pastEvent" ||
                  pathname === "/dashboard/reviewInput" ? (
                    <label
                      htmlFor="my-drawer-2"
                      className=" drawer-button lg:hidden"
                    >
                      <HiMenu className="text-2xl" />
                    </label>
                  ) : (
                    <label
                      htmlFor="my-drawer-2"
                      className="drawer-button hidden"
                    >
                      <HiMenu className="text-2xl" />
                    </label>
                  )}
                </p>
                <div className="flex items-center gap-5">
                  <p>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-secondary font-medium"
                          : "text-primary font-medium hover:text-secondary"
                      }
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </p>
                  {admin && (
                    <p>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "text-secondary font-medium"
                            : "text-primary font-medium hover:text-secondary"
                        }
                        to="/admin"
                      >
                        Admin
                      </NavLink>
                    </p>
                  )}
                  <p>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-secondary font-medium"
                          : "text-primary font-medium hover:text-secondary"
                      }
                      to="/availability"
                    >
                      Availability
                    </NavLink>
                  </p>
                  <li>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="cursor-pointer flex justify-center items-center gap-2"
                      >
                        <BiDownArrow />
                        <div className="w-8 rounded-full ">
                          <p className="w-full rounded-full border border-primary p-1 flex justify-center items-center bg-gray-200">
                            <span className="text-md font-semibold">
                              {firstLetter}
                            </span>
                          </p>
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-40"
                      >
                        <li>
                          <Link
                            to="/accountSettings/profile"
                            className="w-full font-semibold"
                          >
                            Account setting
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/calenderConnection"
                            className="w-full font-semibold"
                          >
                            Calender Connections
                          </Link>
                        </li>
                        <li>
                          <button
                            className="w-full font-semibold"
                            onClick={handleSignOut}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className={y === 0 ? "bg-white" : "bg-white shadow-md"}>
          <div className="navbar text-primary py-4  mx-auto px-2 md:px-5 lg:px-20 max-w-[1400px] ">
            <div className="w-3/4 lg:w-1/2 md:w-3/5 lg:justify-start justify-between">
              <Link className="normal-case text-xl" to="/">
                <span className="flex items-end lg:items-center">
                  <img className="w-10" src={Logo} alt="" />
                  <span className="font-bold text-secondary pl-4 hidden lg:block">
                    MyScheduler
                  </span>
                </span>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0 font-semibold md:gap-10">
                {items}
              </ul>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn glass lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-secondary"
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
                  className="menu menu-compact dropdown-content mt-2 p-3 shadow-md shadow-secondary bg-gray-100 rounded-box w-52 flex flex-col gap-3"
                >
                  {items}
                </ul>
              </div>
              <Link className="hidden lg:block text-end" to="/login">
                <ButtonOutline>
                  <span className="px-0 lg:px-4 w-full">Login</span>
                </ButtonOutline>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
