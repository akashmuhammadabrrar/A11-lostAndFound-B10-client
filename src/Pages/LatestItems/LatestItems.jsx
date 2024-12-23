import React, { useEffect, useState } from "react";
import LatestItemsCard from "./LatestItemsCard";

const LatestItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allStuff", {})
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-hidden">
        {items.map((item) => (
          <LatestItemsCard key={item._id} item={item}></LatestItemsCard>
        ))}
      </div>
    </div>
  );
};

export default LatestItems;
