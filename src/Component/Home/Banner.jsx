import React from "react";
import PopularClasses from "./PopularClasses";
import PopularInstruction from "./PopularInstruction";

const Banner = () => {
  return (
    <div>
      <div className="carousel  rounded-2xl w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/21/05/bass-guitar-1841186_1280.jpg"
            className="w-full h-100"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://cdn.pixabay.com/photo/2019/01/20/05/30/guitar-3943201_1280.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://cdn.pixabay.com/photo/2022/11/28/00/42/man-7620937_1280.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <div className="absolute text-center px-20 text-white bottom-10">
        <h2 className="text-5xl font-semibold mb-4">
          Discover, Learn, and Create with Us!
        </h2>
        <h5 className="text-xl font-bold text-red-500 mb-1">Enrolled Today</h5>

        <h4 className="text-3xl font-semibold">
          "Find Your Rhythm: Embrace the Melodies, Master the Skills, <br /> and
          Ignite Your Musical Journey"
        </h4>
        <button className="btn bg-red-500 mt-3 ">Discover More</button>
      </div>
      <PopularClasses></PopularClasses>
      <PopularInstruction></PopularInstruction>
    </div>
  );
};

export default Banner;
