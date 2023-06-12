import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../../../Provider/AuthProvider";
import MyClassCard from "./MyClassCard";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
  const { user } = useContext(authContext);
  //const { email } = user;
  const [myClass, setMyClass] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyClass(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="mb-20">
      <Helmet>
        <title> LyricLab || My Classes</title>
      </Helmet>
      <div>
        <h2 className="text-2xl text-center my-5 font-medium">
          Total Classes: {myClass.length}
        </h2>
      </div>
      <div className="mx-auto ml-24">
        {myClass.map((cl) => (
          <MyClassCard MyClass={cl} key={cl._id}></MyClassCard>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
