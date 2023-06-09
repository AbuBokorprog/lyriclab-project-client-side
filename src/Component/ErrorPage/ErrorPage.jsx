import React from "react";
import errorImage from "../../assets/error/2133716.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="">
      <img className="h-100 mx-auto w-100" src={errorImage} alt="" />
      <div className="mx-auto flex justify-center relative bottom-52">
        <button className="btn btn-warning text-center">
          <Link className="" to="/">
            Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
