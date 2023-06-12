import React, { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassesCard = ({ classes }) => {
  const { user } = useContext(authContext);
  //console.log(classes);
  const navigate = useNavigate();
  const {
    Class_Name,
    Instructor_Email,
    Instructor_Name,
    available_seats,
    price,
    enrolled,
    Class_Image,
  } = classes;
  const SelectBtn = (classes) => {
    if (!user?.email) {
      return navigate("/login");
    }
    fetch("http://localhost:5000/select", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(classes),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.insertedId) {
        //   Swal.fire({
        //     icon: "success",
        //     title: "Selected Course successfully",
        //     text: "Selected",
        //   });
        // }
        alert("selected");
      });
  };
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
        <p className="">Enrolled: {enrolled}</p>
        <p className="text-red-500">Cost: {price}</p>
        <div className="card-actions justify-end">
          <button onClick={() => SelectBtn(classes)} className="btn btn-error">
            Select Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
