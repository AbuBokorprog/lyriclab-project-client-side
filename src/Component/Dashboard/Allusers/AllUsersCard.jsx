import React from "react";

const AllUsersCard = ({ users, index }) => {
  const { email, displayName } = users;
  return (
    <tr>
      <th>{index}</th>
      <td>{displayName}</td>
      <td>{email}</td>
      <td>
        <button className="btn">Make Admin</button>
      </td>
      <td>
        <button className="btn">Make Instructor</button>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">delete</button>
      </th>
    </tr>
  );
};

export default AllUsersCard;
