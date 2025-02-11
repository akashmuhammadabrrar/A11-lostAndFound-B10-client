// RevCard.js
import React from "react";
import { FaStar } from "react-icons/fa";

const RevCard = ({ review }) => {
  const { image, name, profession, rating, review: clientReview } = review;

  console.log(review);

  return (
    <div className="rounded-md overflow-hidden bg-[#140c1c] m-4">
      <div className="p-6">
        <div className="flex justify-center items-center">
          <img
            className="w-[65px] h-[65px] rounded-full"
            src={image}
            alt={name}
          />
        </div>
        <p className="text-white text-opacity-70">{clientReview}</p>
      </div>
      <div className="px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
        <span>{rating}/5</span>
        <FaStar className="text-yellow-400" />
      </div>
      <div className="bg-gray-100">
        <div className="p-6 flex items-center space-x-6">
          <div></div>
          <div>
            <h1 className="text-lg font-bold">{name}</h1>
            <p className="text-base text-gray-700">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevCard;
