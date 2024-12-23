import React from "react";
import { Link } from "react-router-dom";

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
        <img className="w-60 rounded-md" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">Date: {date}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <Link className="btn btn-accent">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default LatestItemsCard;
