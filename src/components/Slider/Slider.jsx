import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import sliderA from "../../assets/slider/sliderA.jpg";
import sliderB from "../../assets/slider/sliderB.jpg";
import sliderC from "../../assets/slider/sliderC.jpg";

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src={sliderC} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={sliderB} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={sliderA} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Slider;
