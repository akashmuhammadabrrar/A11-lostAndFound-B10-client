import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/icon_them_bg.png";
import userIcon from "../../assets/users.png";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("log out successful");
      })
      .catch((error) => {
        console.log("failed to logout", error.message);
      });
  };

  const links = (
    <>
      <li>
        <Link to="/addItems" className="justify-between">
          Add Lost & Found
          <span className="badge">New</span>
        </Link>
      </li>
      <li>
        <Link to="/allRecovered">All Recovered</Link>
      </li>
      <li>
        <Link to="/myItems">Manage My Items</Link>
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
            <NavLink to="/" className="btn">
              Home
            </NavLink>
          </li>
          {user ? (
            <>
              {" "}
              <button onClick={handleLogOut} className="btn text-red-500">
                Log Out
              </button>{" "}
            </>
          ) : (
            <>
              <li>
                <Link className="btn" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}

          <li>
            <NavLink to="/about" className="btn">
              About
            </NavLink>
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
              {user && user?.email ? (
                <div>
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    title={user?.displayName}
                    alt=""
                  />
                  <p className="w-10 rounded-full">{user?.displayName}</p>
                </div>
              ) : (
                <img alt="Tailwind CSS Navbar component" src={userIcon} />
              )}
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
