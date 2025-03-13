import React from "react";

const Jobs = () => {
  return (
    <div className="mt-16">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-semibold">
        Blogs And Articles About Modern World
      </h1>

      {/* cards */}
      <div className="w-full mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* card-1 */}
        <div className="card bg-base-300 w-[75%] mx-auto shadow-xl rounded">
          <figure>
            <img
              className="w-[80%] h-[80%]"
              src="https://img.freepik.com/free-vector/worldwide-e-commerce-concept_23-2147657845.jpg?semt=ais_hybrid"
              alt="e-commerce"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">E-Commercial Branding</h2>
            <p>
              We are providing best branding services for your e-commercial
              business for reach up.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-accent btn-outline">
                <span className="text-black font-bold">See More</span>
              </button>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card bg-base-300 w-[75%] mx-auto shadow-xl rounded">
          <figure>
            <img
              className="w-[80%] h-[80%]"
              src="https://img.freepik.com/free-vector/business-startup-concept-with-rocket-bulb-design_1017-33470.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Start-up business branding</h2>
            <p>
              We are providing best branding services for your Start-up business
              for reach up.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-accent btn-outline">
                <span className="text-black font-bold">See More</span>
              </button>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card bg-base-300 w-[75%] mx-auto shadow-xl rounded">
          <figure>
            <img
              className="w-[80%] h-[80%]"
              src="https://thumbs.dreamstime.com/b/black-refund-money-icon-isolated-yellow-background-financial-services-cash-back-concept-return-investment-currency-exchange-197494222.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Financial Funding Management</h2>
            <p>
              We are providing best Financial Funding Management for your
              e-commercial business for reach up.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-accent btn-outline">
                <span className="text-black font-bold">See More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
