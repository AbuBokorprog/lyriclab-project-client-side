import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ManageClassCard from "./ManageClassCard";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/classes`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setClasses(data);
      });
  }, []);

  console.log(classes);
  return (
    <div className="mb-20 overflow-x-auto w-full">
      <Helmet>
        <title> LyricLab || Classes</title>
      </Helmet>
      <div>
        <h2 className="text-2xl text-center my-5 font-medium">
          Total Classes: {classes.length}
        </h2>
      </div>
      {/* <div className="grid grid-cols-2 ml-20 gap-4">
        {classes.map((cl) => (
          <ManageClassCard classes={cl} key={cl._id}></ManageClassCard>
        ))}
      </div> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor name</th>
              <th>Instructor Email</th>
              <th>Available seats</th>
              <th>price</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c, index) => (
              <ManageClassCard
                classes={c}
                key={c._id}
                index={index + 1}
              ></ManageClassCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
