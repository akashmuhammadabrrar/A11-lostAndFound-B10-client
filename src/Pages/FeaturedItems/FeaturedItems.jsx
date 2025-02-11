import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedItems = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    fetch("https://lost-and-found-server-delta.vercel.app/allStuff")
      .then((res) => res.json())
      .then((data) => {
        const foundItems = data.filter((item) => item.type === "Found");
        setItems(foundItems);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        Featured Items Already Founded
      </h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item._id}
              className="card w-3/4 mx-auto bg-base-300 shadow-xl rounded-md mb-4">
              <div className="badge badge-accent m-2 text-black font-bold">
                Recovered
              </div>
              <figure>
                <img
                  className="w-[75%] h-[80%] object-cover rounded-md"
                  src={item.photo}
                  alt={item.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>

                <p className="font-bold" style={{ margin: 0, padding: 0 }}>
                  Type: {item.type}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No items found</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedItems;
