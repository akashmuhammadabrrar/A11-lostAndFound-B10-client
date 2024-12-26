import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";

const Modal = ({ prop }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { user } = useContext(AuthContext);
  const {
    email,
    nameContact,
    title,
    _id,
    photo,
    date,
    category,
    location,
    type,
    description,
  } = prop;
  // console.log(prop);
  const navigate = useNavigate();

  //   console.table({
  //     email,
  //     nameContact,
  //     title,
  //     photo,
  //     date,
  //     category,
  //     location,
  //     type,
  //     description,
  //   });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameContact = form.nameContact.value;
    const emailContact = form.emailContact.value;
    const itemId = _id;
    // const date = form.date.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const location = form.location.value;
    const type = form.type.value;
    const userPhoto1 = form.userPhoto1.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const submitData = {
      nameContact,
      itemId,
      emailContact,
      date: selectedDate,
      location,
      userPhoto1,
      userName,
      userEmail,
      type: "Recovered",
      photo,
      title,
    };

    fetch(
      `https://lost-and-found-server-delta.vercel.app/item-submitted?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const exist = data.some((d) => {
          return d.itemId == _id;
        });
        if (exist) {
          return toast.error("Items already existed");
        }
        fetch("https://lost-and-found-server-delta.vercel.app/item-submit", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(submitData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Submission Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/allRecovered");
            }
          });
      });
  };

  return (
    <div>
      <button
        onClick={() =>
          document.getElementById("my_modal_5").showModal()
        }></button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="form-control" onSubmit={handleSubmit}>
            {/* recover email -1*/}
            <div className="label">
              <span className="label-text">Recovered email</span>
            </div>
            <input
              readOnly
              value={email}
              name="emailContact"
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            {/* recovered name */}
            <div className="label">
              <span className="label-text">Recovered Name</span>
            </div>
            <input
              readOnly
              value={nameContact}
              name="nameContact"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* recovered date */}
            <div className="label">
              <span className="label-text">Recovered Date</span>
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MM-yyy"
              className="input input-bordered w-full"
              placeholderText="Select a date"
              required
            />
            {/* recovered location */}
            <div className="label">
              <span className="label-text">Recovered Location</span>
            </div>
            <input
              name="location"
              type="text"
              required
              className="input input-bordered w-full max-w-xs"
            />
            {/* Type */}
            <div className="label">
              <span className="label-text">Type</span>
            </div>
            <input
              readOnly
              value={type}
              name="type"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* title */}
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              readOnly
              value={title}
              name="title"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* User Image */}
            <div className="label">
              <span className="label-text">User Image</span>
            </div>
            <input
              readOnly
              value={user?.photoURL}
              name="userPhoto1"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* stuff image */}
            <div className="label">
              <span className="label-text"> Photos</span>
            </div>
            <input
              readOnly
              value={photo}
              name="photo"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* user name */}
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input
              readOnly
              value={user?.displayName}
              name="userName"
              type="text"
              className="input input-bordered w-full max-w-xs"
            />
            {/* user email */}
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <input
              readOnly
              value={user?.email}
              name="userEmail"
              type="email"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="">
              <button className="btn btn-accent mt-10">Submit</button>
            </div>
          </form>
          <div className="modal-action absolute">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn relative">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Modal;
