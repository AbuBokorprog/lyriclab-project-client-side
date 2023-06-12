import React from "react";

const InstructorTable = ({ instructor, index }) => {
  console.log(instructor);
  const { email, image, Name, _id } = instructor;
  return (
    <tr>
      <th>{index}</th>
      <td>
        <img src={image} className="w-20 rounded-3xl" alt="" />
      </td>
      <td>{Name}</td>
      <td>{email}</td>

      <th>
        <button className="btn btn-success">See Classes</button>
      </th>
    </tr>
  );
};

export default InstructorTable;
