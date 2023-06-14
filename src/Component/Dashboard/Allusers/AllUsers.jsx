import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AllUsersCard from "./AllUsersCard";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://lyricallab-server-side.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setUsers(data);
      });
  }, []);
  //console.log(users);
  return (
    <div className="w-full h-full mx-auto">
      <Helmet>
        <title> LyricLab || All Users</title>
      </Helmet>
      <div className="text-center">
        <h2 className="text-3xl my-3 font-semibold">All Users</h2>
        <h3 className="text-2xl font-semibold">Total Users: {users.length}</h3>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>role</th>
                <th>role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <AllUsersCard
                  users={u}
                  key={u._id}
                  index={index + 1}
                ></AllUsersCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
