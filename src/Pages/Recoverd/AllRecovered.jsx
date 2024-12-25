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
      <div>
        <h2 className="text-3xl text-center p-5"> All Recovered Items</h2>
        {recoveredItems.length === 0 && (
          <>
            <div className="mt-10 flex justify-center items-center">
              <img
                src="https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6604.jpg"
                alt=""
              />
            </div>
          </>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Date</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {recoveredItems.map((recItem) => (
              <tr key={recItem._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={recItem.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{recItem.nameContact}</div>
                      <span className="badge badge-ghost badge-sm">
                        {recItem.emailContact}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  {recItem.type}
                  <br />
                </td>
                <td>{recItem.date}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {recItem.location}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecovered;
