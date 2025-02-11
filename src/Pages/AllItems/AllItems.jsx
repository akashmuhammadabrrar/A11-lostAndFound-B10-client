import React from "react";
import { useLoaderData } from "react-router-dom";
import LatestItemsCard from "../LatestItems/LatestItemsCard";
import Card from "../../components/Card/Card";

const AllItems = () => {
  const allItems = useLoaderData();

  return (
    <div className="mt-20 ">
      <h2 className="text-4xl text-center py-4">All Lost And Founded Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4 ">
        {allItems.map((allItem) => (
          <Card key={allItem._id} allItem={allItem}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
