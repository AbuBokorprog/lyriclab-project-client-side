import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm, useWatch } from "react-hook-form";
import { authContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(authContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    reset();
    fetch("http://localhost:5000/classes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your class has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full h-full mx-auto">
      <Helmet>
        <title> LyricLab || Add A Class</title>
      </Helmet>
      <div>
        <h2 className="text-2xl text-center mt-5 font-medium">Add A Class</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="ml-10 my-10">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Class Name*</span>
          </label>
          <input
            type="text"
            name="Class_Name"
            placeholder="Type Class Name"
            {...register("Class_Name", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-4">
          <div className="form-control max-w-xs w-full">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              name="Instructor_Name"
              defaultValue={user?.displayName}
              {...register("Instructor_Name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              name="Instructor_Email"
              defaultValue={user?.email}
              {...register("Instructor_Email", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Seats*</span>
            </label>
            <input
              type="number"
              name="available_seats"
              placeholder="Type here Available Seats"
              {...register("available_seats", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Type here Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full mb-4 ">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="text"
              {...register("Class_Image", { required: true })}
              name="Class_Image"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full mb-4 ">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              {...register("status", { required: true })}
              defaultValue="Pending"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <input type="submit" value="Add Class" className="btn btn-outline" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
