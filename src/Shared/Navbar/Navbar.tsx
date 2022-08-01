import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../src/Utilities/icon/calendar.png";
import auth from "../../init.firebase";
import Button from "../Button/Button";
import Loading from "../LoadingSpinner/Loading";
import { HiMenu } from "react-icons/hi";
import { BiDownArrow } from "react-icons/bi";
import ShareLink from "../../Pages/ShareLink/ShareLink";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const { pathname } = useLocation();
  const [colorChange, setColorChange] = useState<boolean>(false);
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

  const changeNavbarColor = () => {
    if (window.scrollY >= 80 || pathname !== "/") {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const items = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/types">Types</Link>
      </li>
      <li>
        <Link to="/story">Story</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
      <li>
        <Link to="/">Admin</Link>
      </li>
      <li>
        <Link className="block lg:hidden text-start" to="/login">
          <Button>
            <span className="px-0 lg:px-4">Login</span>
          </Button>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      {user ? (
        <div className="navbar bg-base-100 shadow-xl">
          <div className="container mx-auto">
            <div className="flex-1 hidden md:block">
              <div className="w-3/4 lg:w-1/2 md:w-3/5 lg:justify-start justify-between">
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
              <ul className="menu menu-horizontal p-0">
                <li>
                  {pathname === "/dashboard" ||
                    pathname === "/dashboard/scheduling" ||
                    pathname === "/dashboard/workflow" ||
                    pathname === "/dashboard/routingForms" ? (
                    <label
                      htmlFor="my-drawer-2"
                      className="bg-transparent drawer-button lg:hidden"
                    >
                      <HiMenu className="text-2xl" />
                    </label>
                  ) : (
                    <label
                      htmlFor="my-drawer-2"
                      className="bg-transparent drawer-button hidden"
                    >
                      <HiMenu className="text-2xl" />
                    </label>
                  )}
                </li>
                <li>
                  <Link className="px-1 md:px-4" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="px-1 md:px-4" to="/availability">
                    Availability
                  </Link>
                </li>
                <li>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className=" cursor-pointer flex justify-center items-center gap-2"
                    >
                      <BiDownArrow />
                      <div className="w-8 rounded-full ">
                        <img
                          src={
                            user.photoURL ||
                            ("https://findicons.com/files/icons/1024/dress_it_profession/128/assassin_avatar.png" as string)
                          }
                          className="rounded-full border-2 border-secondary"
                          alt=""
                        />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-40"
                    >
                      <li>
                        <Link to="/accountSettings/profile">
                          Account setting
                        </Link>
                      </li>
                      <li>
                        <Link to="/calenderConnection">
                          Calender Connections
                        </Link>
                      </li>
                      <li>
                        <label htmlFor="my-modal-6" className="">
                          Share Your Link
                        </label>
                      </li>
                      <li>
                        <button onClick={handleSignOut}>Logout</button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="sticky top-0 z-50">
          <div
            className={
              colorChange || anotherRouteColorChange
                ? "navbar bg-base-100 absolute text-black shadow-lg"
                : "navbar bg-transparent absolute text-black lg:text-white duration-300"
            }
          >
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
              <ul className="menu menu-horizontal p-0 font-semibold xl:gap-16">
                {items}
              </ul>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn glass lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                      colorChange
                        ? "h-5 w-5 text-secondary"
                        : "h-5 w-5 text-white"
                    }
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
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow-2xl bg-base-100 rounded-box w-52"
                >
                  {items}
                </ul>
              </div>
              <Link className="hidden lg:block text-end" to="/login">
                <Button>
                  <span className="px-0 lg:px-4 w-full">Login</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <ShareLink></ShareLink>
    </div>
  );
};

export default Navbar;
