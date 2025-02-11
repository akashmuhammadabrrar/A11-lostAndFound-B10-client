import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LatestItemsCard from "../LatestItems/LatestItemsCard";
import Card from "../../components/Card/Card";
import { FiFilter } from "react-icons/fi";

const AllItems = () => {
  const allItems = useLoaderData();
  const [sortedItems, setSortedItems] = useState(allItems);
  const [isAscending, setIsAscending] = useState(true);

  const handleSortByDate = () => {
    const sorted = [...allItems].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return isAscending ? dateA - dateB : dateB - dateA;
    });
    setSortedItems(sorted);
    setIsAscending(!isAscending); // Toggle the sorting order
  };
  // console.log(allItems);

  return (
    <div className="mt-20 ">
      <h2 className="text-4xl text-center py-4">All Lost And Founded Items</h2>
      <div className="flex justify-end items-center mr-24">
        <button
          onClick={handleSortByDate}
          className="btn btn-accent btn-outline">
          <FiFilter className="text-black font-bold text-xl" />
          <span className="text-black font-bold">
            Filtered By Date ({isAscending ? "Ascending" : "Descending"})
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 ">
        {sortedItems.map((allItem) => (
          <Card key={allItem._id} allItem={allItem}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
