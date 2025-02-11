import React from "react";
import Slider from "../../components/Slider/Slider";
import SectionTop from "../../components/Sections/SectionTop";
import LatestItems from "../LatestItems/LatestItems";
import SectionA from "../../components/Form/SectionA";
import SectionB from "../../components/Form/SectionB";
import FeaturedItems from "../FeaturedItems/FeaturedItems";

const Home = () => {
  return (
    <div className="">
      <div id="slider">
        <Slider></Slider>
      </div>
      <SectionTop></SectionTop>
      <LatestItems></LatestItems>
      <SectionA></SectionA>
      <SectionB></SectionB>
      <FeaturedItems></FeaturedItems>
    </div>
  );
};

export default Home;
