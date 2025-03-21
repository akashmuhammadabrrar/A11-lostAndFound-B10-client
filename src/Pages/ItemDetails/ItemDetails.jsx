import React from "react";
import { FaMapLocation } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { format } from "date-fns";

const ItemDetails = () => {
  const handleButtonClick = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal element not found");
    }
  };

  const {
    email,
    nameContact,
    title,
    photo,
    date,
    category,
    location,
    type,
    _id,
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
            {date && (
              <p>
                <span className="font-bold">Date</span>:{" "}
                {format(new Date(date), "dd/mm/yyyy")}
              </p>
            )}
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
                <button onClick={handleButtonClick} className="btn btn-accent">
                  Found This
                </button>
              ) : (
                <button
                  onClick={handleButtonClick}
                  className="btn btn-accent btn-outline">
                  <span className="text-black font-bold"> This Is Mine</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          prop={{
            email,
            _id,
            nameContact,
            title,
            photo,
            date,
            category,
            location,
            type,
            description,
          }}></Modal>
      </div>
    </div>
  );
};

export default ItemDetails;
