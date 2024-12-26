import React from "react";
import Slider from "../../components/Slider/Slider";
import SectionTop from "../../components/Sections/SectionTop";
import LatestItems from "../LatestItems/LatestItems";
import SectionA from "../../components/Form/SectionA";
import SectionB from "../../components/Form/SectionB";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <SectionTop></SectionTop>
      <LatestItems></LatestItems>
      <SectionA></SectionA>
      <SectionB></SectionB>
    </div>
  );
};

export default Home;
