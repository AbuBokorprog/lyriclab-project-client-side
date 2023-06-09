import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import googlePNG from "../../assets/google.png";
//import SigninWithSocial from "../SigninWithSocial/SigninWithSocial";

const Login = () => {
  const { user, loader, signInUser, google } = useContext(authContext);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  //const [disabled, setDisabled] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
    const email = data.email;
    const password = data.password;
    console.log(data);
    signInUser(email, password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        Swal.fire({
          title: "Login Successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setError("");
      })
      .catch((error) => {
        const message = error.message;
        setError(message);
        setSuccess("");
        navigate(from, { replace: true });
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
        <title> LyricLab || Login</title>
      </Helmet>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left"></div>
          <div className="card my-32 shadow-2xl bg-base-100">
            <form onClick={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="text-center">
                <p className="text-success">{success}</p>
                <p className="text-error">{error}</p>
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
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                  className="input input-bordered"
                />
                {errors.password && <span>This Password is required</span>}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <p>
                  Are you new here?
                  <Link className="text-blue-600" to="/register">
                    Register
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

export default Login;
