import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar text-white max-w-screen-lg mx-auto fixed">
      <div className="navbar-start">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu text-xl font-semibold menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <img
          src="/Classic Rock Country Guitar Music Vintage Retro logo template.png"
          alt=""
          className="w-20 rounded-full"
        />
        <a className="btn btn-ghost normal-case text-xl">LyricLab</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          {nav}
        </ul>
      </div>
      <div className="navbar-end me-10">
        <Link to="/login">
          <img src="/user.png" alt="" className="w-10 bg-white rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
