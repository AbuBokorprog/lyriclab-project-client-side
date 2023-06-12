import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaHome,
  FaShoppingCart,
  FaUtensils,
  FaAddressBook,
  FaUsers,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { authContext } from "../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(authContext);
  const [loggedUser, setLoggedUser] = useState([]);

  fetch(`http://localhost:5000/users/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setLoggedUser(data);
    });

  //console.log(loggedUser.role);
  return (
    <div className="">
      <Helmet>
        <title> LyricLab || Dashboard</title>
      </Helmet>
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
            {loggedUser?.role === "Instructor" ? (
              <>
                <li>
                  <Link>
                    <FaHome></FaHome>Instructor Home
                  </Link>
                </li>
                <li>
                  <Link to="addClass">Add A Class</Link>
                </li>
                <li>
                  <Link to="myClass">My Classes</Link>
                </li>
              </>
            ) : loggedUser?.role === "admin" ? (
              <>
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
              </>
            ) : (
              <>
                <li>
                  <Link>My Selected Classes</Link>
                </li>
                <li>
                  <Link>My Enrolled Classes</Link>
                </li>
                <li>
                  <Link>Payment</Link>
                </li>
              </>
            )}
            {/* default section */}
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
