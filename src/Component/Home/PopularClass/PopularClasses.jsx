import React, { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";

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
      <h2 className="text-3xl font-semibold text-center mb-8 text-red-400">
        Popular class
      </h2>

      <div className="grid grid-cols-3 gap-6 content-center">
        {popular.slice(0, 6).map((pop) => (
          <PopularClassCard popularClass={pop} key={pop._id}></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
