import React, { useEffect, useState } from "react";
import LatestItemsCard from "./LatestItemsCard";
import { Link } from "react-router-dom";

const LatestItems = () => {
  const [items, setItems] = useState([]);
  const remainingItems = items?.slice(0, 6);

  useEffect(() => {
    fetch("https://lost-and-found-server-delta.vercel.app/allStuff")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-hidden">
        {remainingItems.map((item) => (
          <LatestItemsCard key={item._id} item={item}></LatestItemsCard>
        ))}
      </div>
      <div className="ml-10">
        <Link to="/AllItems">
          <button className="btn btn-outline btn-accent">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default LatestItems;
