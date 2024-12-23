import React from "react";
import Slider from "../../components/Slider/Slider";
import SectionTop from "../../components/Sections/SectionTop";
import LatestItems from "../LatestItems/LatestItems";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <SectionTop></SectionTop>
      <LatestItems></LatestItems>
    </div>
  );
};

export default Home;
