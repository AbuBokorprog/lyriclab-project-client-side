import React from "react";
import footerCover from "../../assets/footer/male-musician-playing-acoustic-guitar-dark-room-copy-space.jpg";

const Footer = () => {
  return (
    <div className="">
      <div className="">
        <img
          src="https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-80 absolute"
        />
      </div>
      <footer className=" absolute text-white">
        <div className="footer pt-20 p-5">
          <div className="pl-10">
            <img
              className="w-20 rounded-full"
              src="../../../public/Classic Rock Country Guitar Music Vintage Retro logo template.png"
              alt=""
            />
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </div>
          <div className="pl-20 text-xl">
            <span className="font-bold text-xl text-red-600">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div className="pl-20 text-xl">
            <span className="font-bold text-xl text-red-600">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className="pl-20 text-xl">
            <span className="font-bold text-xl text-red-600">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>

          <div className="pl-20 text-xl">
            <span className="font-bold text-xl text-red-600">NewsLetter</span>
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type here Email"
              className="input input-bordered input-accent"
            />
            <input
              className="btn btn-error w-full"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>
        <div className="text-white">
          <div>
            <p className="text-center font-semibold">
              Copyright © 2023 - All right reserved by ACME Industries Ltd
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
