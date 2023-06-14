import React from "react";

const InstructorTable = ({ instructor, index }) => {
  // console.log(instructor);
  const { email, image, Name, _id } = instructor;
  return (
    <tr className="bg-gradient-to-r border-y-2 border-black from-purple-500 to-pink-500">
      <th>{index}</th>
      <td>
        <img src={image} className="w-20 rounded-3xl" alt="" />
      </td>
      <td className="font-semibold text-white">{Name}</td>
      <td className="font-semibold text-white">{email}</td>

      <th>
        <button className="btn btn-success">See Classes</button>
      </th>
    </tr>
  );
};

export default InstructorTable;
