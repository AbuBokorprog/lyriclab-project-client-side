import React from "react";

const PopularClassCard = ({ popularClass }) => {
  //console.log(popularClass);
  const { Class_Image, Class_Name, available_seats, enrolled, price } =
    popularClass;
  return (
    <>
      <div className="card  w-96 h-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={Class_Image} alt="Class Image" className="h-full " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Class_Name}</h2>
          <p>Available Seats: {available_seats}</p>
          <p>Total Enrolled: {enrolled}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error hover:btn">Enroll Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularClassCard;
