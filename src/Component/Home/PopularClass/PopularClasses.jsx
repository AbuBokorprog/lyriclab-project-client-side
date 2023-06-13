import React, { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import SetTitle from "../../../SetTitle";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);

        const AcceptedClass = data.filter((ac) => ac.status === "Accepted");
        const enrolled = AcceptedClass.filter((e) => e.enrolled > 60);
        //setClasses(data);
        enrolled.sort((a, b) => b.enrolled - a.enrolled); // Sort by enrolled in descending order
        setPopular(enrolled);
      });
  }, []);
  return (
    <div className="my-20">
      <div className="mb-4">
        <SetTitle title="Our Most Popular Class"></SetTitle>
      </div>
      <div className="grid grid-cols-3 gap-5 content-center">
        {popular.slice(0, 6).map((pop) => (
          <PopularClassCard popularClass={pop} key={pop._id}></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
