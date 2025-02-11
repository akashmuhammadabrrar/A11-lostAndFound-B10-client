import React from "react";

const Inspire = () => {
  return (
    <div className="mt-20">
      {/* hero */}
      <div className="hero bg-base-200 h-[70%]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://cdn.vectorstock.com/i/500p/89/70/optimistic-happiness-or-positive-thinking-inspire-vector-43678970.jpg"
            className="w-[50%] mx-auto rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">Inspire People To Good Deeds</h1>
            <p className="py-6">
              In a world often fraught with challenges, inspiring others to
              perform good deeds can be a beacon of hope and positivity.
              Encouraging acts of kindness, compassion, and generosity not only
              benefits those directly involved but also creates a ripple effect
              that can transform communities and beyond. Here are some ways to
              inspire people to embrace good deeds:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspire;
