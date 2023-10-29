import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorTable from "./InstructorTable";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  //console.log(instructor);

  useEffect(() => {
    fetch(`https://lyricallab-server-side.vercel.app/users/instructor`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setInstructor(data);
      });
  }, []);

  return (
    <div className="my-20 container mx-auto px-4">
      <Helmet>
        <title> LyricLab || Instructor</title>
      </Helmet>
      <div>
        <h2 className="text-3xl text-center font-semibold">
          Total Instructions: {instructor.length}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {instructor.map((i, index) => (
              <InstructorTable
                instructor={i}
                key={i._id}
                index={index + 1}
              ></InstructorTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructor;
