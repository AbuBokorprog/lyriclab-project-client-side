import React, { useEffect, useState } from "react";
import SetTitle from "../../../SetTitle";
import TopInstructorCard from "./TopInstructorCard";

const PopularInstruction = () => {
  const [topInstructors, setTopInstructors] = useState([]);
  useEffect(() => {
    fetch("https://lyricallab-server-side.vercel.app/instructors/top")
      .then((res) => res.json())
      .then((data) => {
        setTopInstructors(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  //console.log(topInstructors);
  return (
    <div className="container mx-auto px-4 my-10 lg:my-20">
      <div>
        <SetTitle title="Our Most popular Instructor"></SetTitle>
      </div>
      <p className="text-center mb-4 font-medium">
        Meet our exceptional instructors, masters in their craft, ready to guide
        and inspire you on your musical journey.
      </p>
      <dir className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-20 gap-6">
        {topInstructors.map((topI) => (
          <TopInstructorCard
            topInstructors={topI}
            key={topI._id}
          ></TopInstructorCard>
        ))}
      </dir>
    </div>
  );
};

export default PopularInstruction;
