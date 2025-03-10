import React from "react";
import Slider from "react-slick";
import { brands } from "../data/file";

const brand = () => {
  const sliderSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="overflow-hidden rounded-xl h-[300px] flex justify-center items-center">
      <div className="container ">
        <Slider {...sliderSettings}>
          {brands.map((data) => (
            <div key={data.id}>
              {/* Image Content */}
              <div className="flex justify-center items-centet relative">
                <img
                  src={data.img}
                  alt="Slider Image"
                  className=" relative w-[350px] h-[300px] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] z-40 my-14"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default brand;
