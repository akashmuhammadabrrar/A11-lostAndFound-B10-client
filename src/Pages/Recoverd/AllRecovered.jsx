import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const AllRecovered = () => {
  const { user } = useAuth();
  const [recoveredItems, setRecoveredItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/item-submitted?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecoveredItems(data);
      });
  }, [user?.email]);

  return (
    <div className="mt-20">
      <h2>All Recovered Items:{recoveredItems.length}</h2>
    </div>
  );
};

export default AllRecovered;
