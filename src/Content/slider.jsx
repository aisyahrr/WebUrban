import React from "react";
import Slider from "react-slick";
import { sliderEvent } from "../data/file";

const slider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="overflow-hidden rounded-xl h-[350px] flex justify-center items-center sm:block">
      <div className="container pb-8">
        <Slider {...sliderSettings}>
          {sliderEvent.map((data) => (
            <div key={data.id}>
              <div
                className="grid h-[300px] gap-10 rounded-md mx-10 my-10 grid-cols-2"
                style={{
                  backgroundImage: `url(${data.background || ""})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Image Content */}
                <div className="flex justify-center items-center my-10 relative">
                  <img
                    src={data.img}
                    alt="Slider Image"
                    className=" absolute w-[300px] h-[310px] object-contain -left-[7px] drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] z-40 my-14"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default slider;
