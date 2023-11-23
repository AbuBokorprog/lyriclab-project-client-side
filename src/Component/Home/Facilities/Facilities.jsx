import React from "react";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineBook, MdOutlineTextsms } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Facilities = () => {
  return (
    <div>
      <p className="text-4xl font-semibold px-20 text-center">
        Online Graduate School for{" "}
        <span className="text-primary">Adults & Children</span> . Suspendisse
        metus elit, iaculis eu fermentum eget, viverra eu lectus. Integer
        commodo a libero.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        <div>
          <FaLaptop />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Facilities;
