import React from "react";

const Contacts = () => {
  return (
    <div className="mt-20">
      <h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center
      ">
        Contact With Us Anytime From Anywhere
      </h2>
      {/* form for contacts */}
      <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control py-10">
            <label className="form-control">
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Your Comments"></textarea>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-accent btn-outline font-bold">
              <span className="text-black">Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
