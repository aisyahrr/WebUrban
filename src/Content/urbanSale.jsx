import React, { useState, useEffect } from "react";
import { sale } from "../data/file";

const UrbanSale = () => {
  const right = "/image/right.png";
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date().getTime() + 3 * 60 * 60 * 1000; // 3 jam dari sekarang

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-[461px] bg-custom flex items-center justify-center">
      <div className="w-[1200px] h-[340px] bg-white rounded-lg shadow-xl p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-4">
            <h2 className="text-2xl font-bold text-brandblue">Urban Sale</h2>
            <div className="flex items-center bg-brandblue text-white px-3 py-1 rounded-lg font-semibold text-sm">
              {String(timeLeft.hours).padStart(2, "0")} |{" "}
              {String(timeLeft.minutes).padStart(2, "0")} |{" "}
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>
          <button className="p-2 border border-brandblue rounded-md hover:bg-gray-100">
            <img src={right} alt="like" className="h-5 w-auto text-black" />
          </button>
        </div>

        {/* Produk List */}
        <div className="flex gap-4 overflow-x-auto">
          {sale.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[250px] bg-white shadow rounded-lg"
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <span className="absolute bottom-[0.5px] h-5 w-10 bg-red-500 text-white text-xs font-bold px-1 rounded-tr-md rounded-b-md">
                  {item.discount}%
                </span>
              </div>
              <div className="p-2 text-start">
                <p className="text-sm font-semibold">
                  Rp. {item.price.toLocaleString()}
                </p>
                <p className="text-xs text-gray-400 line-through">
                  Rp. {item.oldPrice.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UrbanSale;
