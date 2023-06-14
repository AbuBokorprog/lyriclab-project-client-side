import React from "react";

const TopInstructorCard = ({ topInstructors }) => {
  const { image, Name } = topInstructors;
  return (
    <div className="card">
      <img
        src={image}
        alt="Instructor Image"
        className="w-44 h-44 rounded-full ring-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:ring-red-500 duration-300 ring-black"
      />
      <div className="card-title mx-auto">
        <h2>{Name}</h2>
      </div>
    </div>
  );
};

export default TopInstructorCard;