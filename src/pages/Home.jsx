import React from "react";
import Slider from "react-slick";
import { sliderData } from "../data/file";
import Category from "../Content/category";
import Trending from "../Content/Trending";
import UrbanSale from "../Content/urbanSale";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  const infoBoxes = [
    { title: "DAFTAR SEKARANG", subtitle: "& DAPATKAN DISKON 10%" },
    { title: "PENGIRIMAN CEPAT", subtitle: "& TEPAT WAKTU" },
    { title: "GARANSI KEPUASAN 100%", subtitle: "SEMUA PRODUKNYA ORI" },
  ];

  return (
    <div>
      {/* Promo Section */}
      <div className="flex justify-center bg-brandblue w-full h-12 mb-3 items-center px-16 gap-80">
        {infoBoxes.map((item, index) => (
          <div
            key={index}
            className="text-center font-sans text-xs items-center"
          >
            <p className="font-semibold">{item.title}</p>
            <span>{item.subtitle}</span>
          </div>
        ))}
      </div>

      {/* Slider Section */}
      <div className="container overflow-hidden rounded-3xl min-h-[600px] flex justify-center items-center sm:block">
        <div className="container pb-8">
          <Slider {...sliderSettings}>
            {sliderData.map((data) => (
              <div key={data.id}>
                <div
                  className="grid h-[500px] rounded-md mx-10 my-10 grid-cols-2"
                  style={{
                    backgroundImage: `url(${data.background || ""})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Text Content */}
                  <div className="flex relative flex-col justify-center z-10 gap-4 order-2 ml-16 py-20 text-center">
                    <h1 className="font-pacifico pt-12 pl-10 text-white text-4xl translate-y-4">
                      {data.subtitel}
                    </h1>
                    <h1 className="uppercase font-pangolin font-bold text-5xl xl:text-[130px] sm:text-[80px] text-slate-100 tracking-widest">
                      {data.title}
                    </h1>
                    <h1 className="text-right font-pangolin text-3xl text-gray-300 -translate-y-5">
                      {data.title2}
                    </h1>
                    <button className="text-base font-semibold font-sans h-[45px] w-[130px] border-black rounded-3xl bg-transparent border-2 border-white/50 backdrop-blur-[20px] shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:text-brandblue dark:border-white text-white">
                      Shop Now
                    </button>
                  </div>

                  {/* Image Content */}
                  <div className="flex justify-center items-center my-10 order-2 relative">
                    <img
                      src={data.img}
                      alt="Slider Image"
                      className="w-[330px] h-[320px] scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] absolute z-40 my-14 ml-10 -rotate-12"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Trending Section */}
      <Trending />

      {/* Urban Sale Section */}
      <UrbanSale />

      {/* Category Section */}
      <Category />
    </div>
  );
};

export default Home;
