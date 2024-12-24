import React, { createContext, useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const Modal = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() =>
          document.getElementById("my_modal_5").showModal()
        }></button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{user?.email}</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
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
