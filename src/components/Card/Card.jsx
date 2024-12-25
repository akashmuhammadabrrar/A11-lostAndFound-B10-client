import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Card = ({ allItem }) => {
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
  } = allItem || {};
  return (
    <div className="card bg-base-300  shadow-xl rounded-md">
      <figure>
        <img className="w-60 rounded-md" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">
            {date && (
              <p className="font-bold" style={{ margin: 0, padding: 0 }}>
                Date: {format(new Date(date), "dd/mm/yyyy")}{" "}
              </p>
            )}
          </div>
        </h2>
        <p style={{ margin: 0, padding: 0 }}>{description}</p>
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
          <p className="font-bold" style={{ margin: 0, padding: 0 }}>
            Date: {format(new Date(date), "dd/mm/yyyy")}{" "}
          </p>
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

export default Card;
