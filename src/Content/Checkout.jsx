import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { checkoutData } from "../data/file"; 
import { Ulasan } from "../data/file"; 
import { ProductLainToko } from "../data/file"; 
import { FaShoppingCart } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { AiTwotoneLike } from "react-icons/ai";

import Rekomendasi from "./rekomendasi";


const Checkout = () => {
    const logoUrl = "/image/Vector.png";
    const clock = "/image/Clock.png";
    const location = "/image/Location.png";
    const line = "/image/line.png";
    const right = "/image/right.png";

    const { id } = useParams();
    const product = checkoutData.find((item) => item.id.toString() === id);
    const ulasanData = Ulasan.find((item) => item.id.toString() === id);
    const ProductLain = ProductLainToko.find((item) => item.id.toString() === id);
    const data = ProductLain ? ProductLain.data : [];

    const reviews = ulasanData ? ulasanData.reviews : [];

    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    if (!ProductLain) {
        return <p>Produk tidak ditemukan</p>;
    }

    if (!product) {
        return (
        <h2 className="text-center text-xl mt-10">Produk tidak ditemukan!</h2>
        );
    }

    const handleColorClick = (color) => {
        setSelectedColor((prevColor) => (prevColor === color ? null : color));
    };

    const handleSizeClick = (size) => {
        setSelectedSize((prevSize) => (prevSize === size ? null : size));
    };

    const [jumlahPesanan, setJumlahPesanan] = useState(1);
    const tambahPesanan = () => {
        if (jumlahPesanan < product.stokTersedia) {
        setJumlahPesanan(jumlahPesanan + 1);
        }
    };
    const kurangiPesanan = () => {
        if (jumlahPesanan > 1) {
        setJumlahPesanan(jumlahPesanan - 1);
        }
    };

return (
    <div className="container mx-auto p-4">
        {/*Grid 1*/}
        <div className="grid grid-cols-3 gap-x-10 justify-center">
            {/* Foto Produk */}
            <div className="col-span-1 mt-3">
                <div className="border-4 rounded-sm h-[500px] p-3">
                    <div className="flex justify-center items-center p-1 h-72">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-sm"
                    />
                    </div>
                    <div className="grid grid-cols-2 gap-2 p-1 w-full h-36">
                    <img
                        src={product.image2}
                        alt={product.name}
                        className="h-full w-full object-cover rounded-sm"
                    />
                    <img
                        src={product.image3}
                        alt={product.name}
                        className="h-full w-full object-cover rounded-sm"
                    />
                    </div>
                </div>
            </div>
            {/* Foto Produk */}
            {/* Detail Produk */}
            <div className="col-span-1 justify-center">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="text-gray-600">
                    Terjual {product.sold} | ⭐ {product.rating} ({product.reviews}{" "}
                    Rating)
                </p>

                <div className="flex mt-4 gap-2">
                    <p className="text-sm text-gray-500 line-through">
                    Rp. {product.oldPrice.toLocaleString("id-ID")}
                    </p>
                    <p className="text-sm text-red-600 font-bold">{product.discount}</p>
                </div>
                <p className="text-lg font-bold">
                    Rp. {product.price.toLocaleString("id-ID")}
                </p>

                <div className="mt-7  border-gray-400 py-3">
                    <hr className="w-full border-t border-gray-400" />
                    <div className="flex gap-10 justify-center items-center my-2">
                        <p className="font-bold ">Info Produk</p>
                        <p className="font-bold">Ulasan</p>
                        <p className="font-bold">Diskusi</p>
                    </div>
                    <hr className="w-full border-t border-gray-400" />
                    <div className="py-2 text-base font-poppins">
                        <p>{product.title}</p>
                        <p className="text-justify text-base">{product.keterangan}</p>
                    </div>
                    <hr className="w-full border-t border-gray-400" />
                    <div className="flex justify-between items-center my-4">
                        <div className="flex gap-5 justify-center items-center">
                            <img
                                src={product.img}
                                alt=""
                                className="h-14 w-14 rounded-full"
                            />
                            <div className="justify-center items-center">
                                <p className="font-bold">{product.titleToko}</p>
                                <p className="text-sm font-normal">Online Kemaren</p>
                            </div>
                        </div>
                        <button
                            className="flex w-28 h-9 border bg-transparent border-brandblue rounded-lg items-center justify-center text-base font-roboto
                                                        text-brandblue hover:bg-brandblue hover:text-white"
                        > Follow
                        </button>
                    </div>
                    <p className="text-black font-semibold flex justify-start items-center mt-5 gap-1">
                        <img 
                            src={logoUrl} 
                            alt="" className="h-4 w-4" />{" "}
                            {product.ratingToko}
                        <span className="font-normal text-gray-600">
                            ({product.reviewsToko})
                        </span>
                    </p>
                    <p className="text-black font-semibold flex justify-start items-center gap-1">
                        <img 
                            src={clock} alt="" 
                            className="h-4 w-4" /> {product.jam}
                        <span className="font-normal text-gray-600">
                            {" "}
                            pesanan diproses
                        </span>
                    </p>
                    <hr className="w-full border-t-1 border-gray-400 mt-3" />
                    <div className="mt-2 gap-1">
                        <p className="pb-1 font-bold text-base">Pengiriman</p>
                        <p className="text-gray-600 font-sm font-poppins font-normal flex justify-start items-center gap-1">
                            <img src={location} alt="" className="h-4 w-4" /> Dikirim dari
                            <span className=" font-semibold text-black">
                            {" "}
                            Jakarta Barat{" "}
                            </span>
                        </p>
                        <p className="pl-5 items-center text-sm font-semibold">Ongkir Mulai Rp.9000</p>
                        <p className="text-gray-600 font-normal text-base flex justify-start items-center mt-2">
                            <FiSend className="h-4 w-4 text-black font-bold "/> 
                            <span className="pl-1 text-sm">Regular | estimasi tiba besok - 26 Januari </span>
                        </p>
                    </div>
                    <hr className="w-full border-t-1 border-gray-400 mt-4" />
                    <div className="mt-2 flex justify-between items-center">
                        <p className="text-base text-gray-600">Produk tidak sesuai?</p>
                        <p className="text-base font-medium text-black">Laporkan</p>
                    </div>
                </div>
            </div>
            {/* Detail Produk */}
            {/* Pilihan dan Checkout */}
            <div className="col-span-1 pr-5 justify-center">
                <div className="relative">
                    <p className="font-semibold text-base">Pilih Warna</p>
                    <div className="flex flex-wrap gap-1 my-2">
                    {product.color.map((color) => (
                        <button
                        key={color}
                        className={`btnColor ${selectedColor === color ? "btn-selected" : ""}`}
                        onClick={() => handleColorClick(color)}
                        >
                        {color}
                        </button>
                    ))}
                    </div>
                    <p className="font-semibold text-base">Pilih Ukuran</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                    {product.sizes.map((size) => (
                        <button
                        key={size}
                        className={`btn ${selectedSize === size ? "btn-selected" : ""}`}
                        onClick={() => handleSizeClick(size)}
                        >
                        {size}
                        </button>
                    ))}
                    </div>
                </div>

                <div className=" relative w-fit h-auto">
                    <div className="border-2 mt-5 p-3 rounded-lg w-80 justify-center items-center">
                        <p className="font-semibold">Atur Jumlah Pemesanan</p>
                        {/* tombol menambah pesanan */}
                        <div className=" flex items-center mt-4">
                            <div className="flex items-center justify-center p-2 h-10 w-32 border-2 rounded-lg">
                            <button
                                className="flex justify-center px-2 py-2 h-6 w-6 items-center bg-gray-500 text-white rounded-md text-base font-bold"
                                onClick={kurangiPesanan}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={jumlahPesanan}
                                readOnly
                                className="w-16 text-center "
                            />
                            <button
                                className="flex justify-center px-2 py-2 h-6 w-6 items-center bg-brandblue text-white rounded-md text-base font-bold"
                                onClick={tambahPesanan}
                            >
                                +
                            </button>
                            </div>
                            <p className="ml-3">
                            Stok :{" "}
                            <span className="font-bold">{product.stokTersedia}</span>
                            </p>
                        </div>

                        {/* Harga & Tombol */}
                        <p className="mt-4 flex justify-between ">
                            Sub total{" "}
                            <span className="font-bold">
                            Rp. {(jumlahPesanan * 1350000).toLocaleString("id-ID")}
                            </span>
                        </p>
                        <div className="mt-4 flex gap-3">
                            <button className="border px-4 py-2 rounded-lg w-36">
                            Beli
                            </button>
                            <button className="bg-brandblue text-white px-4 py-2 w-36 rounded-lg flex items-center justify-center gap-2">
                            <FaShoppingCart />
                            Keranjang
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-2 gap-2 mt-2">
                        <p className=" flex items-center gap-2">
                            <BsChatSquareText className="h-4 w-full" /> Chat{" "}
                        </p>
                        <img src={line} alt="" className="h-5 w-auto" />
                        <p className=" flex items-center gap-2">
                            <IoMdHeartEmpty className="h-5 w-full" /> Wishtlist{" "}
                        </p>
                        <img src={line} alt="" className="h-5 w-auto" />
                        <p className=" flex items-center gap-2">
                            <RiShareForwardLine className="h-5 w-full" /> Share{" "}
                        </p>
                    </div>
                </div>
            </div>
            {/* Pilihan dan Checkout */}
            {/*Ulasan Pribadi*/}
            <div className="col-span-2">
                <hr className="w-full border-t border-gray-400" />
                <p className="py-3 font-bold">Ulasan Pembeli</p>
                
                <div className="grid grid-cols-[auto,1fr] h-32 border p-4 rounded-lg shadow-md">
                    <div className="flex gap-2 p-3 items-center">
                        <div className="items-center">
                            <div className="flex items-center justify-center ">
                                <span className="text-yellow-500 text-xl">⭐</span>
                                <span className="text-xl font-bold">4.7</span>
                                <span className="text-gray-500 text-sm ">/ 5.0</span>
                            </div>
                            <p className="flex text-gray-500 text-sm mt-1 gap-2 items-center " > 86% 
                                <span>|</span> 
                                <span>861 Ulasan</span>
                            </p>
                        </div>
                        <img src={line} alt="" className="h-full w-2"/>
                    </div>
                    <div className="grid grid-cols-3 gap-3 p-3 items-center">
                        <p className="flex items-center gap-1 text-sm">
                        ⭐ 5 <span className="">(476 Ulasan)</span>
                        </p>
                        <p className="flex items-center gap-1 text-sm">
                        ⭐ 4 <span className="">(241 Ulasan)</span>
                        </p>
                        <p className="flex items-center gap-1 text-sm">
                        ⭐ 3 <span className="">(112 Ulasan)</span>
                        </p>
                        <p className="flex items-center gap-1 text-sm">
                        ⭐ 2 <span className="">(26 Ulasan)</span>
                        </p>
                        <p className="flex items-center gap-1 text-sm">
                        ⭐ 1 <span className="">(6 Ulasan)</span>
                        </p>
                    </div>
                </div>
                {/*review text*/}
                <div className="mt-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex items-start gap-5  p-4 border-b">
                            {/* Profile Image */}
                            <img
                                src={review.imageProfile}
                                alt={review.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="items-center justify-start">
                                {/* Name & Date */}
                                <h2 className="font-semibold text-lg pb-1 ">{review.name}</h2>
                                <p className="text-sm pb-1">⭐⭐⭐⭐⭐</p>
                                <p className="text-gray-500 text-sm pb-1">{review.date}</p>
                                <p className="text-gray-600 text-sm pt-1">
                                    Variasi : {review.variasi}
                                </p>
                                {/* Ulasan */}
                                <p className="text-black mt-2 text-justify">{review.ulasan}</p>
                                {/* Gambar Ulasan */}
                                <div className="flex gap-2 mt-2">
                                    <img src={review.imageUlasan} alt="" className="w-16 h-16 rounded-md"/>
                                    <img src={review.imageUlasan2} alt="" className="w-16 h-16 rounded-md"/>
                                </div>
                                <div className="flex items-center gap-1 mt-3">
                                    <AiTwotoneLike className="h-full w-4"/> <span className="text-gray-600 items-center">{review.like}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/*Grid 1*/}
        {/*Product Lain*/}
        <div className="mt-3 justify-center">
            <p className="font-bold text-base">Product Lainnya</p>
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 pt-5">
                {data.map((datas, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer">
                        <img
                        src={datas.image} 
                        alt={datas.name}
                        className="w-full h-52 object-cover bg-gray-200"
                        />
                        <div className="p-4 bg-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">{datas.name}</h2>
                        <div className="mt-2">
                            <h3 className="text-lg font-bold text-gray-900">
                            Rp. {datas.price.toLocaleString("id-ID")}
                            </h3>
                            <span className="text-sm text-gray-500 line-through ">
                            Rp. {datas.oldPrice.toLocaleString("id-ID")}
                            </span>
                            <span className="text-sm text-red-600 font-bold ml-2">
                            {datas.discount}
                            </span>
                        </div>
                        <div className="flex items-center mt-2 text-gray-600">
                            <img src={logoUrl} alt="Rating" />
                            <span className="ml-1 font-semibold">{datas.rating}</span>
                            <span className="ml-1">| {datas.sold} terjual</span>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {/*Product Lain*/}
        {/*Rekomendasi*/}
        <div className="mt-6 pt-9 justify-center">
            <p className="font-bold text-base">Rekomendasi Untukmu</p>
            <Rekomendasi/>
            <p className="flex justify-center items-center my-5 pt-5 text-brandblue">Lihat Rekomendasi Lainnya <img src={right} alt="" className="flex h-full w-5 items-center" /></p>
        </div>
    </div>
    );
};


export default Checkout;
