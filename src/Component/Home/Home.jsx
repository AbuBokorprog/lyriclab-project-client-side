import React from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import PopularClasses from "./PopularClass/PopularClasses";
import PopularInstruction from "./PopularInstructor/PopularInstruction";
import Review_description from "./Review&Description/Review_description";
import Facilities from "./Facilities/Facilities";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> LyricLab || Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      {/* <Facilities /> */}
      <Review_description></Review_description>
      <PopularInstruction></PopularInstruction>
    </div>
  );
};

export default Home;
