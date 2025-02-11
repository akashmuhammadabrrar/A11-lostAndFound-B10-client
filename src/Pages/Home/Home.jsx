import React from "react";
import Slider from "../../components/Slider/Slider";
import SectionTop from "../../components/Sections/SectionTop";
import LatestItems from "../LatestItems/LatestItems";
import SectionA from "../../components/Form/SectionA";
import SectionB from "../../components/Form/SectionB";
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import Inspire from "../Inspirations/Inspire";
import Reviews from "../Reviews/Reviews";

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
      <Inspire></Inspire>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
