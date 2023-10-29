import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://lyricallab-server-side.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);

        const AcceptedClass = data.filter((ac) => ac.status === "Accepted");
        //setClasses(data);
        setClasses(AcceptedClass);
      });
  }, []);

  //console.log(classes);

  return (
    <div className="mb-20 container mx-auto px-4">
      <Helmet>
        <title> LyricLab || Classes</title>
      </Helmet>
      <div>
        <h2 className="text-2xl text-center my-5 font-medium">
          Total Classes: {classes.length}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cl) => (
          <ClassesCard classes={cl} key={cl._id}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
