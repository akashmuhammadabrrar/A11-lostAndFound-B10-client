import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Modal = ({ prop }) => {
  const { user } = useContext(AuthContext);
  const {
    email,
    nameContact,
    title,
    photo,
    date,
    category,
    location,
    type,
    description,
  } = prop;

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
    const date = form.date.value;
    const location = form.location.value;
    const userPhoto1 = form.userPhoto1.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    console.table({
      nameContact,
      date,
      location,
      userEmail,
      userPhoto1,
      userName,
      userName,
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
            <div className="flex ">
              <label htmlFor="">
                <span>Email:</span>
                <input
                  name="emailContact"
                  value={email}
                  readOnly
                  type="email"
                />
              </label>
            </div>
            <input name="nameContact" value={nameContact} type="text" />
            <input name="date" value={date} type="date" />
            <input name="location" value={location} type="text" />
            <input name="userPhoto1" value={user?.photoURL} type="text" />
            <input name="userName" value={user?.displayName} type="text" />
            <input name="userEmail" value={user?.email} readOnly type="text" />
            <div className="">
              <button className="btn btn-accent mt-10">Submit</button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
