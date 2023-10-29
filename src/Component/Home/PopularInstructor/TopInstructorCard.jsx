import React from "react";

const TopInstructorCard = ({ topInstructors }) => {
  const { image, Name } = topInstructors;
  return (
    <div className=" mx-auto h-full shadow-xl">
      <figure>
        <img
          src={image}
          alt="Class Image"
          className="w-32 h-32 rounded-full "
        />
      </figure>
      <div className="">
        <h2 className="text-center">{Name}</h2>
      </div>
    </div>
  );
};

export default TopInstructorCard;
