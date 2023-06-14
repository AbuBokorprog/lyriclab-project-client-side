import React, { useEffect, useState } from "react";
import SetTitle from "../../../SetTitle";
import TopInstructorCard from "./TopInstructorCard";

const PopularInstruction = () => {
  const [topInstructors, setTopInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors/top")
      .then((res) => res.json())
      .then((data) => {
        setTopInstructors(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(topInstructors);
  return (
    <div className="my-20">
      <div>
        <SetTitle title="Our Most popular Instructor"></SetTitle>
      </div>
      <dir className="grid grid-cols-6 gap-4">
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
