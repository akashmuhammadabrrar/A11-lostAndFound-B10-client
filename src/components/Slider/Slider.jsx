import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import sliderA from "../../assets/slider/sliderA.jpg";
import sliderB from "../../assets/slider/sliderB.jpg";
import sliderC from "../../assets/slider/sliderC.jpg";

const Slider = () => {
  return (
    <Carousel>
      <div className="relative">
        <img src={sliderC} />
        <p className="legend">Slide 1</p>
      </div>
      <div className="relative">
        <img src={sliderB} />
        <p className="legend">Slide 2</p>
      </div>
      <div className="relative">
        <img src={sliderA} />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
};

export default Slider;
