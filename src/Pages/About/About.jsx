import React from "react";
import sliderC from "../../assets/slider/sliderC.jpg";

const About = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl text-center py-10">This all About Us</h2>

      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={sliderC} className=" w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Understand your belongings too
            </h1>
            <p className="py-6 text-xl font-semibold">
              Our Lost and Found platform is designed to reconnect people with
              their lost belongings or help others find their rightful owners.
              Whether it's a misplaced gadget, lost documents, or a missing pet,
              this platform bridges the gap between what's lost and what's
              found. Users can create detailed posts with descriptions, photos,
              and locations to make the search easier. With categories for every
              item type, a user-friendly interface, and secure communication,
              it's simple to report or claim items. Together, let's reduce the
              worry and bring peace of mind by ensuring lost items find their
              way back home. Join our community to make a difference!
            </p>
            <button className="btn btn-accent btn-outline">
              <span className="text-black font-bold">Know More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
