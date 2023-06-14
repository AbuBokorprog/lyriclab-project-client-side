import React, { useState } from "react";
import Swal from "sweetalert2";
import { AiFillDelete } from "react-icons/ai";

const AllUsersCard = ({ users, index }) => {
  const { email, Name, _id } = users;
  const [isAdminClicked, setIsAdminClicked] = useState(false);
  const [isInstructorClicked, setIsInstructorClicked] = useState(false);
  //console.log(users);
  const adminHandler = (users) => {
    const { email, Name, _id } = users;
    fetch(`http://localhost:5000/users/admin/${users._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `an Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  console.log(users);
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
            title: ` an Instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const deleteHandler = (id) => {
    console.log("delete");
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <tr>
      <th>{index}</th>
      <td>{Name}</td>
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
        <button onClick={() => deleteHandler(_id)} className="btn btn-circle">
          <AiFillDelete className="text-3xl text-red-500"></AiFillDelete>
        </button>
      </th>
    </tr>
  );
};

export default AllUsersCard;
