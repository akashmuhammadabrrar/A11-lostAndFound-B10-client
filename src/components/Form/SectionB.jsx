import React from "react";

const SectionB = () => {
  return (
    <div className="hero bg-base-200 min-h-screen mt-10 mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Let Us Know About Your Valuable Feedback.
          </h1>
          <p className="py-6">
            If Your Are Facing Any Problem To Using This Platform, Then Kindly
            Let Us Inform And Contact With Us And Send Your Feedback Here.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
              <button className="btn btn-primary text-white font-bold">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
