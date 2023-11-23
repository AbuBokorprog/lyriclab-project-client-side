import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(authContext);

  const logOutHandler = () => {
    //console.log("logged out");
    logout()
      .then(() => {})
      .then((error) => {});
  };

  const nav = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      {user && (
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      )}
      {user?.email ? (
        <li>
          <Link onClick={logOutHandler}>Logout</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar container mx-auto px-4 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-primary me-24 btn-circle lg:hidden"
          >
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu -bottom-44 bg-red-700 menu-sm dropdown-content mt-3  p-2 shadow rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            {user && (
              <li>
                <Link to="dashboard">Dashboard</Link>
              </li>
            )}
            {user?.email ? (
              <li>
                <Link onClick={logOutHandler}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        <img
          src="/Classic Rock Country Guitar Music Vintage Retro logo template.png"
          alt=""
          className="w-16 rounded-full hidden lg:visible"
        />
        <a className="mx-auto font-bold bg- text-3xl">LyricLab</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          {nav}
        </ul>
      </div>
      <div className="navbar-end lg:me-10">
        {user?.photoURL ? (
          <div>
            <img
              src={user?.photoURL}
              alt=""
              className="w-12 h-12 rounded-full"
              title={user?.displayName}
            />
          </div>
        ) : (
          <Link to="/login">
            <img src="/user.png" alt="" className="w-10 rounded-full" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
