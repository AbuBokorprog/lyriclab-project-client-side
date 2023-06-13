import React from "react";
import { Link } from "react-router-dom";

const MySelectedTable = ({ select, index }) => {
  const { Class_Image, Class_Name, Instructor_Email, available_seats, price } =
    select;

  const deleteButton = (select) => {
    //console.log("delete selected");
    fetch(`http://localhost:5000/select/${select._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
        <Link className="btn btn-warning">Pay</Link>
      </td>
      <td>
        <button onClick={() => deleteButton(select)} className="btn btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MySelectedTable;
