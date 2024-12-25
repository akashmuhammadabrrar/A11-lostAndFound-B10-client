import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Table from "../../components/Table/Table";

const ManagesItems = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const items = useLoaderData();

  const filteredItems = items.filter((item) => item.email === user?.email);

  console.log(filteredItems);
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center font-semibold">Manage items</h2>

      {filteredItems.map((filteredItem) => (
        <Table key={filteredItem._id} filteredItem={filteredItem}></Table>
      ))}
    </div>
  );
};

export default ManagesItems;
