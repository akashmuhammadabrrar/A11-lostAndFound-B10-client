import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const ItemDetails = () => {
  const {
    email,
    nameContact,
    title,
    photo,
    date,
    category,
    location,
    type,
    description,
  } = useLoaderData();

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-semibold m-10 text-center">
        Details Here For: {title}
      </h2>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="ml-10">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-pretty">{description}</p>
            <p className="text-xl font-semibold py-2">
              {" "}
              <span>Type</span>: {type}
            </p>
            <p>
              <span className="font-bold">Date</span>: {date}
            </p>
            <p>
              <span className="font-bold">category</span>: {category}
            </p>
            <p className="flex items-center gap-2">
              <FaMapLocation></FaMapLocation>{" "}
              <span className="font-bold">Location</span>: {location}
            </p>
            <p>
              <span className="font-bold">Email-Contact</span>: {email}
            </p>
            <p>
              <span className="font-bold">Name-Contact</span>: {nameContact}
            </p>
            <div className="mt-6">
              {type === "Lost" ? (
                <button className="btn btn-accent">Found This</button>
              ) : (
                <button className="btn btn-accent ">This Is Mine</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
