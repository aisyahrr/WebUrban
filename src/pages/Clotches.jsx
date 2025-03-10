import React from "react";
import Slider from "react-slick";
import { promo } from "../data/file";
import { clocthes } from "../data/file";
import { useNavigate } from "react-router-dom";
import UrbanSale from "../Content/urbanSale";
import Itemclotches from "../Content/clotches";
import SliderEvent from "../Content/slider";
import Brand from "../Content/brand";

const ClocthesCard = ({ category }) => {
  const logoUrl = "/image/Vector.png";
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Checkout/${category.id}`);
  };
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-44 object-cover bg-gray-200"
      />
      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
        <div className="mt-2">
          <h3 className="text-lg font-bold text-gray-900">
            Rp. {category.price.toLocaleString("id-ID")}
          </h3>
          <span className="text-sm text-gray-500 line-through ">
            Rp. {category.oldPrice.toLocaleString("id-ID")}
          </span>
          <span className="text-sm text-red-600 font-bold ml-2">
            {category.discount}
          </span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <img src={logoUrl} alt="" />
          <span className="ml-1 font-semibold">{category.rating}</span>
          <span className="ml-1">| {category.sold} terjual</span>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="container gap-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 pt-10">
        {clocthes.map((category) => (
          <ClocthesCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

const Clotches = () => {
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
    <div>
      <hr />
      <div className="bg-promo">
        <div className="overflow-hidden rounded-xl h-[550px] flex justify-center items-center sm:block">
          <div className="container pb-8">
            <Slider {...sliderSettings}>
              {promo.map((data, index) => (
                <div key={data.id}>
                  <div
                    className="grid h-[400px] rounded-lg shadow-xl shadow-[#4F4F4F] mx-10 my-10 grid-cols-2"
                    style={{
                      backgroundImage: `url(${data.background || ""})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {index === 0 ? (
                      <>
                        <div className="flex flex-col justify-center z-10 gap-1 text-left pl-56 text-white">
                          <h1 className="font-pacifico text-xl pl-4">
                            {data.subtitel}
                          </h1>
                          <h1 className="font-playfair text-5xl">
                            {data.title}
                          </h1>
                          <h1 className="text-4xl font-calistoga font-bold">
                            {data.title2}
                          </h1>
                        </div>
                        <div className="flex justify-end items-center pr-36">
                          <img
                            src={data.img}
                            alt="Promo"
                            className="w-[400px] h-[350px] object-contain drop-shadow-lg"
                          />
                        </div>
                      </>
                    ) : index === 1 ? (
                      <div className="relative flex justify-center items-center col-span-2">
                        <img
                          src={data.img}
                          alt="Promo"
                          className="w-[400px] h-[350px] object-contain drop-shadow-lg"
                        />
                        <button className="absolute bottom-12 right-32 text-base font-semibold rounded-lg 
                        border-black border-opacity-15 bg-black bg-opacity-70 border-2 px-5 py-2 text-white">
                          {data.title}
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </Slider>
            <div className="flex justify-center mb-3 items-center px-16 gap-80">
              {[
                { title: "DAFTAR SEKARANG", subtitle: "& DAPATKAN DISKON 10%" },
                { title: "PENGIRIMAN CEPAT", subtitle: "& TEPAT WAKTU" },
                {
                  title: "GARANSI KEPUASAN 100%",
                  subtitle: "SEMUA PRODUKNYA ORI",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center font-sans text-xs items-center"
                >
                  <p className="font-semibold">{item.title}</p>
                  <span>{item.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <UrbanSale />
      <Itemclotches />
      <SliderEvent />
      <ProductGrid />
      <Brand />
    </div>
  );
};

export default Clotches;
