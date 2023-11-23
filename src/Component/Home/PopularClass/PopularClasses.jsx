import React, { useEffect, useState } from "react";
import PopularClassCard from "./PopularClassCard";
import SetTitle from "../../../SetTitle";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("https://lyricallab-server-side.vercel.app/classes")
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
    <div className=" container mx-auto px-4 my-10 lg:my-20">
      <div className="">
        <SetTitle text={""} title="Our Most Popular Class"></SetTitle>

        <p className="text-center font-medium ">
          Explore our popular classes and unlock your creative potential with
          expert instructors. Enroll today and embrace your passion for music.
        </p>
      </div>
      <div className="  grid md:grid-cols-1 mt-10 lg:mt-20 lg:grid-cols-3 gap-5">
        {popular.slice(0, 6).map((pop) => (
          <PopularClassCard popularClass={pop} key={pop._id}></PopularClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
