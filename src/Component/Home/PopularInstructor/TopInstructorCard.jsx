import React from "react";

const TopInstructorCard = ({ topInstructors }) => {
  const { image, Name } = topInstructors;
  return (
    <div className=" mx-auto h-full">
      <img src={image} alt="Class Image" className="w-52 h-52 rounded-full " />

      <div className="">
        <h2 className="text-center text-3xl">{Name}</h2>
        <p className="text-primary text-center">Teacher</p>
      </div>
    </div>
  );
};

export default TopInstructorCard;
