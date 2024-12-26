import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Table from "../../components/Table/Table";

const ManagesItems = () => {
  const { user } = useContext(AuthContext);
  const [manageItem, setManageItem] = useState([]);
  // console.log(user);
  const items = useLoaderData();
  // console.log(items);

  const filteredItems = items.filter((item) => item.email === user?.email);
  useEffect(() => {
    setManageItem(filteredItems);
  }, []);

  // console.log(filteredItems);

  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center font-semibold">Manage items</h2>

      {manageItem.map((filteredItem) => (
        <Table
          key={filteredItem._id}
          remainingItem={{ filteredItem, manageItem, setManageItem }}></Table>
      ))}
    </div>
  );
};

export default ManagesItems;
