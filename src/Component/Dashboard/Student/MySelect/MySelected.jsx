import React, { useEffect, useState } from "react";
import MySelectedTable from "./MySelectedTable";

const MySelected = () => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch("https://lyricallab-server-side.vercel.app/select")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setSelected(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-medium">
        My selected class: {selected.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Pay Button</th>
                <th>Delete Button</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((s, index) => (
                <MySelectedTable
                  select={s}
                  key={s._id}
                  index={index + 1}
                ></MySelectedTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MySelected;
