import React from "react";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Table = ({ filteredItem }) => {
  const { _id, title, description, photo, location, date } = filteredItem;

  // delete operation
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allStuff/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
              <Link to={`/updateItem/${_id}`}>
                <button className="btn ">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-red-400">
                X
              </button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
