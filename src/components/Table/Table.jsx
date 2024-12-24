import React from "react";

const Table = ({ filteredItem }) => {
  const { title, description, photo, location, date } = filteredItem;
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      referrerPolicy="no-referrer"
                      className="w-6"
                      src={photo}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{title}</div>
                </div>
              </div>
            </td>
            <td>
              {description.slice(0, 18)}...
              <br />
            </td>
            <td>{date}</td>
            <th>{location}</th>
            <div className="flex justify-center items-center gap-2 mt-4">
              <button className="btn ">Update</button>
              <button className="btn bg-red-400">X</button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
