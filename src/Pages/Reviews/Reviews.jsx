import React from "react";
import SliderRev from "./SliderRev";

const Reviews = () => {
  return (
    <div className="mt-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
        Consumers Testimonials
      </h1>
      <div className="divider">+</div>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        <SliderRev></SliderRev>
      </div>
    </div>
  );
};

export default Reviews;
