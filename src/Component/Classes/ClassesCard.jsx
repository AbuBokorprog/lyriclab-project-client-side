import React from "react";

const ClassesCard = ({ classes }) => {
  console.log(classes);
  const {
    Class_Name,
    Instructor_Email,
    Instructor_Name,
    available_seats,
    price,
    Class_Image,
  } = classes;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={Class_Image} alt="class Image" className="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{Class_Name}</h2>
        <h3 className="text-xl font-medium">
          Instructor Name: {Instructor_Name}
        </h3>
        <h3 className="text-xl font-medium">
          Instructor Email: {Instructor_Email}
        </h3>
        <p className="">Available Seats: {available_seats}</p>
        <p className="text-red-500">Cost: {price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-error">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
