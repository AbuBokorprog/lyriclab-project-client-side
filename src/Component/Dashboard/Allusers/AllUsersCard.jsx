import React, { useState } from "react";
import Swal from "sweetalert2";

const AllUsersCard = ({ users, index }) => {
  const { email, displayName, _id } = users;
  console.log(_id);
  const adminHandler = (users) => {
    //console.log(users);
    fetch(`http://localhost:5000/users/${users._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${users.name} an Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const instructorHandler = (id) => {
    fetch(`http://localhost:5000/users/instructor/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${users.name} an Instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <tr>
      <th>{index}</th>
      <td>{displayName}</td>
      <td>{email}</td>
      <td>
        {users.role === "admin" ? (
          "admin"
        ) : (
          <div>
            <button
              className="btn btn-outline"
              onClick={() => adminHandler(users)}
            >
              Make Admin
            </button>
          </div>
        )}
      </td>
      <td>
        {users.role === "Instructor" ? (
          "Instructor"
        ) : (
          <div onClick={setClicked(!clicked)}>
            <button
              onClick={() => instructorHandler(_id)}
              className="btn btn-outline"
            >
              Make Instructor
            </button>
          </div>
        )}
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">delete</button>
      </th>
    </tr>
  );
};

export default AllUsersCard;
