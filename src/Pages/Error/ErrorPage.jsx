import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-5xl text-center mt-24">
        Nothing Is Found There In This Route{" "}
      </h2>
      <div className="flex justify-center items-center mt-64">
        <img
          src="https://www.shutterstock.com/shutterstock/videos/1009108646/thumb/7.jpg?ip=x480"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link to="/">
          <button className="btn btn-accent">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
