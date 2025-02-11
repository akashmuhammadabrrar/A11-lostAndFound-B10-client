import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { motion } from "framer-motion";

const LatestItemsCard = ({ item }) => {
  const {
    _id,
    email,
    nameContact,
    type,
    photo,
    title,
    description,
    category,
    date,
    location,
  } = item || {};

  return (
    <div className="card bg-base-300  shadow-xl rounded-md">
      <figure>
        <motion.img
          className="w-48 h-[80%] rounded-md"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {date && (
            <div className="badge badge-secondary p-4">
              Date: {format(new Date(date), "dd/mm/yyyy")}
            </div>
          )}
        </h2>
        <p style={{ margin: 0, padding: 0 }}>
          <span className="font-bold">Description:</span>{" "}
          {description.slice(0, 25)}...
        </p>
        <div
          className="flex justify-center items-center"
          style={{ margin: 0, padding: 0 }}>
          <div>
            <FaMapMarkerAlt />
          </div>
          <p className="font-bold">Location: {location} </p>
        </div>
        <p className="font-bold" style={{ margin: 0, padding: 0 }}>
          Type: {type}{" "}
        </p>
        {date && (
          <div className="badge badge-secondary">
            Date: {format(new Date(date), "dd/mm/yyyy")}
          </div>
        )}

        <div className="card-actions justify-start">
          <Link
            to={`/allStuff/${_id}`}
            className="btn btn-accent rounded-3xl text-black">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestItemsCard;
