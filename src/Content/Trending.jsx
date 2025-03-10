import React from "react";
import { data } from "../data/file";
import { MdKeyboardArrowRight } from "react-icons/md";

const Trending = () => {
  return (
    <div className="">
      <div className="container">
        <h2 className="text-center justify-center text-3xl font-bold py-10 text-transparent bg-gradient-to-r from-brandblue to-blue-900 bg-clip-text">
          Trending Now
        </h2>
        <div
          className="grid gap-4 hover:scale-95 transition-all duration-500"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, auto)",
            gridAutoRows: "minmax(50px, 1fr)",
          }}
        >
          {data.map(({ imageUrl, column, row }, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden"
              style={{
                gridColumn: column,
                gridRow: row,
              }}
            >
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                className="w-full h-auto object-cover hover:scale-125 hover:rotate-6 transition-all duration-500"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center text-base font-semibold py-10 text-black">
          Lihat Semua
          <MdKeyboardArrowRight className="w-5 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
