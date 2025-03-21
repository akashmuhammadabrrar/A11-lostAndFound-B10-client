import React from "react";
import { Link } from "react-router-dom";

const SectionA = () => {
  return (
    <div
      className="hero min-h-screen mt-10 mb-10"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/xFzCB2Q/mac-Book-5.jpg",
      }}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="text-white mb-5 text-xl font-bold">
            If You Lost Something You Can Post There And If You Found Somebody's
            Stuff You Can Help Them To Found It. So Don't Late To Know And
            Explore More.
          </p>
          <Link to="/about">
            <button className="btn btn-accent btn-outline text-white font-bold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionA;
