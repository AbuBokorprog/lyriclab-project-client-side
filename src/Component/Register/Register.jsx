import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm, useWatch } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import googlePNG from "../../assets/google.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { user, loader, createUser, google } = useContext(authContext);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const image = data.image;

    const confirmedPassword = watch("confirm_password");

    if (password !== confirmedPassword) {
      setError("Passwords do not match!");
      setSuccess("");
      return;
    }

    createUser(email, password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        setSuccess("Successfully Registered");
        setError("");
        navigate("/");
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
        setError(message);
        setSuccess("");
      });
  };

  const googleHandler = () => {
    google()
      .then(() => {})
      .then((error) => {});
  };

  return (
    <div>
      <Helmet>
        <title> LyricLab || Register</title>
      </Helmet>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left"></div>
          <div className="card my-32 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <div className="text-center">
                <p className="text-success">{success}</p>
                <p className="text-error">{error}</p>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("Name", { required: true })}
                  className="input input-bordered"
                />
                {errors.Name && <span>This Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && <span>This Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "type" : "password"}
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                />
                <div
                  className=" relative bottom-8 ml-64"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <p>
                      <FaEyeSlash></FaEyeSlash>
                    </p>
                  ) : (
                    <p>
                      <FaEye></FaEye>
                    </p>
                  )}
                </div>
                {errors.password && <span>This Password is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={show ? "type" : "password"}
                  placeholder="Confirm Password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/,
                  })}
                  className="input input-bordered"
                />
                <div
                  className=" relative bottom-8 ml-64"
                  onClick={() => setShow(!show)}
                >
                  {show ? (
                    <p>
                      <FaEyeSlash></FaEyeSlash>
                    </p>
                  ) : (
                    <p>
                      <FaEye></FaEye>
                    </p>
                  )}
                </div>
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500" role="alert">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500" role="alert">
                    Password must be max length 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500" role="alert">
                    Password is must be At least one upper case English letter
                    At least one lower case English letter At least one digit At
                    least one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Past your photo url"
                  {...register("image")}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="mt-4">
                <p>
                  Already registered!
                  <Link className="text-blue-600" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div className="divider">OR</div>
              <button onClick={googleHandler} className="mx-auto">
                <img className="w-10" src={googlePNG} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
