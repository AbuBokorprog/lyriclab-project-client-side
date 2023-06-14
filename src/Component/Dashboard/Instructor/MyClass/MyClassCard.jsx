import React, { useContext } from "react";
import { authContext } from "../../../../Provider/AuthProvider";

const MyClassCard = ({ MyClass }) => {
  const {
    Class_Name,
    Instructor_Email,
    Instructor_Name,
    available_seats,
    price,
    Class_Image,
    enrolled,
    status,
  } = MyClass;
  console.log(MyClass);
  return (
    <div className="card lg:card-side bg-base-100 my-5 mx-auto shadow-xl">
      <figure>
        <img src={Class_Image} alt="Class_Image" className="w-80" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Class_Name}</h2>
        <h3>Instructor Name: {Instructor_Name}</h3>
        <h3>Instructor Email: {Instructor_Email}</h3>
        <p>Available Seats: {available_seats}</p>
        <p>Enrolled: {enrolled}</p>
        <p>Price: {price}</p>
        <p>Status: {status}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default MyClassCard;
