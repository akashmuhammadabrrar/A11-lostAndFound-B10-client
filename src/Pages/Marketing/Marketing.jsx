import React from "react";

const Marketing = () => {
  return (
    <div className="mt-20">
      <h1 className="font-semibold text-center text-xl lg:text-4xl md:text-3xl">
        Marketing Policy and Management System
      </h1>
      {/* contents */}
      <div>
        <div className="hero bg-base-200 h-[70%] my-10">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://imarticus.org/blog/wp-content/uploads/2021/06/shutterstock_173563757-scaled.jpg"
              className=" rounded-lg shadow-2xl w-[55%]"
            />
            <div>
              <h1 className="text-5xl font-bold text-center">
                Marketing For Any Type Of Products And Contribution
              </h1>
              <p className="py-6 text-center">
                We Are Providing The Marketing And Management Products And
                Contribution All Over The World. If You Need Any Kind Of Help
                Please Contact With Us At Any Time. And Acknowledge Us About
                Your Need On The Form Below.
              </p>
              <button className="btn btn-accent btn-outline">
                <span className="text-black font-bold">See More</span>
              </button>
            </div>
          </div>
        </div>
        {/* form for contacts */}
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Contact With Us!</h1>
              <p className="py-6">
                Wherever You Are. We Are Always Ready To Help You At Any Cost.
                Please Let Know About Your Needs.
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
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    placeholder="Write Here"
                    className="textarea textarea-bordered textarea-md w-full max-w-xs"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent btn-outline">
                    <span className="text-black font-bold">Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
