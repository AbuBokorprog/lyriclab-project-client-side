import React from "react";
import guitar from "../src/assets/guitar.png";
import speaker from "../src/assets/karaoke.png";

const SetTitle = ({ title }) => {
  return (
    <div className="w-4/12 mx-auto text-center">
      <h3 className="text-red-400 font-semibold flex gap-2 text-3xl py-2">
        <span>
          <img src={speaker} alt="" className="w-10" />
        </span>
        {title}
        <span>
          <img src={guitar} alt="" className="w-10" />
        </span>
      </h3>
    </div>
  );
};

export default SetTitle;
