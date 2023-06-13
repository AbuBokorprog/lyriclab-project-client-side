import React from "react";

const MySelectedTable = ({ select, index }) => {
  const { Class_Image, Class_Name, Instructor_Email, available_seats, price } =
    select;
  return (
    <tr className="bg-base-200">
      <th>{index}</th>
      <td>
        <img src={Class_Image} alt="" />
      </td>
      <td>{Class_Name}</td>
      <td>{Instructor_Email}</td>
      <td>{available_seats}</td>
      <td>{price}</td>
      <td>
        <button className="btn btn-warning">Pay</button>
      </td>
      <td>
        <button className="btn btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default MySelectedTable;
