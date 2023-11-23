import React from "react";
import guitar from "../src/assets/guitar.png";
import speaker from "../src/assets/karaoke.png";

const SetTitle = ({ title, text }) => {
  return (
    <div className=" mx-auto text-center">
      <h2
        className={`${
          text || "text-primary"
        } font-semibold flex gap-2 text-2xl justify-center items-center lg:text-5xl py-2`}
      >
        <span>
          <img src={speaker} alt="" className="w-10" />
        </span>
        {title}
        <span>
          <img src={guitar} alt="" className="w-10" />
        </span>
      </h2>
    </div>
  );
};

export default SetTitle;
