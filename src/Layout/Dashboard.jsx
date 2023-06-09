import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaUtensils,
  FaAddressBook,
  FaUsers,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto w-full h-100 flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu hover:from-pink-500 hover:to-yellow-500 p-4 w-80 h-full text-xl font-medium text-white bg-gradient-to-r from-black to-red-500">
          <div>
            <h2 className="text-3xl font-semibold text-center my-2">
              LyricLAB
            </h2>
          </div>
          <li className="">
            <Link>
              <FaHome></FaHome>Admin Home
            </Link>
          </li>
          <li>
            <Link className="" to="manageClasses">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              Manage Classes
            </Link>
          </li>
          <li>
            <Link to="allUsers">
              <FaUsers />
              ALL Users
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              Menu
            </Link>
          </li>
          <li>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.119-1.243l1.263-12C4.482 10.068 4.578 10.5 5.003 10.5h9.744c.425 0 .521-.432.301-.993z"
                />
              </svg>
              Orders
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
