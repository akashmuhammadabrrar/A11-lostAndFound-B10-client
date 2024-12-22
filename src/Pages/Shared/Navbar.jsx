import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon_them_bg.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link className="justify-between">
          Add Lost & Found
          <span className="badge">New</span>
        </Link>
      </li>
      <li>
        <Link>All Recovered</Link>
      </li>
      <li>
        <Link>Manage My Items</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-300 fixed top-0 z-50 max-w-7xl">
      <div className="flex-1">
        <div className="flex flex-row justify-center items-center">
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            <img className="w-7" src={icon} alt="" />{" "}
            <span className="text-blue-500">Query</span>
            Stuff
          </Link>
        </div>
      </div>
      {/* search input field */}
      <div className="navbar-start ">
        <ul className="text-xl menu-horizontal space-x-4 font-semibold">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div className=" flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
