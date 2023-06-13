import React from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import PopularClasses from "./PopularClass/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> LyricLab || Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
    </div>
  );
};

export default Home;
