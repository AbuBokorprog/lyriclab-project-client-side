import React, { useState } from "react";
import Swal from "sweetalert2";

const AllUsersCard = ({ users, index }) => {
  const { email, displayName, _id } = users;
  const [isAdminClicked, setIsAdminClicked] = useState(false);
  const [isInstructorClicked, setIsInstructorClicked] = useState(false);
  //console.log(users);
  const adminHandler = (users) => {
    const { email, displayName, _id } = users;
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
            title: `${displayName} an Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const instructorHandler = (users) => {
    const { email, displayName, _id } = users;
    fetch(`http://localhost:5000/users/instructor/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${displayName} an Instructor`,
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
              disabled={isInstructorClicked}
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
          <div>
            <button
              onClick={() => instructorHandler(users)}
              className="btn btn-outline"
              disabled={isAdminClicked}
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
