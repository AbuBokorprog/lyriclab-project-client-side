import React from "react";

const PopularClassCard = ({ popularClass }) => {
  //console.log(popularClass);
  const { Class_Image, Class_Name, available_seats, enrolled, price } =
    popularClass;
  return (
    <>
      <div className=" card-compact shadow-xl relative">
        <img
          src={Class_Image}
          alt="Shoes"
          className="w-full h-96 rounded-xl  hover:contrast-100 contrast-50"
        />

        <div className="card-body absolute bottom-12 text-white">
          <h2 className="card-title text-3xl">{Class_Name}</h2>
          <p>Price: {price}</p>
        </div>
      </div>
    </>
  );
};

export default PopularClassCard;
