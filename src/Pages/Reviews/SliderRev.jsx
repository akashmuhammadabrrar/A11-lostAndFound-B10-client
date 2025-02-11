import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RevCard from "./RevCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const SliderRev = () => {
  const [clientReviews, setClientReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setClientReviews(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}>
      {clientReviews.map((review) => {
        return (
          <div key={review.image}>
            <RevCard review={review}></RevCard>
          </div>
        );
      })}
    </Carousel>
  );
};

export default SliderRev;
