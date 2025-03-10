import React from "react";
import { menuLinks } from "../data/file";
import { NavLink } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarUrban = () => {
  const bag = "/image/bag.png";
  const like = "/image/heart.png";
  const line = "/image/line.png";
  return (
    <div className=" w-screen dark:bg-gray-900 dark:text-white ">
      <div className="flex justify-between mx-14 my-4 px-5 font-roboto font-semibold">
        <div className="flex gap-6 text-sm">
          <h1>Store Location</h1>
          <h1>Help & Contact Us</h1>
        </div>
        <div className="flex gap-2">
          <img src={bag} alt="like" className="h-5 w-auto" />
          <img src={line} alt="like" className="h-5 w-auto" />
          <h1 className="flex gap-3 text-sm">
            Wishlist
            <img src={like} alt="like" className="h-5 w-auto text-black" />
          </h1>
        </div>
      </div>
      <div className="flex items-center mx-14 mb-3 px-5 gap-16">
        <h1 className="font-pacifico text-[23px] text-brandblue">
          Urban’ Attire
        </h1>
        <div className="flex  justify-center gap-3">
          <h1 className="font-roboto items-center text-[20px] pt-1">
            Kategori
          </h1>
          <form
            action=""
            method="post"
            className="flex items-center border border-solid rounded-md border-slate-300 h-10 w-[660px] bg-slate-100 "
          >
            <button className="h-6 w-5 rounded-full">
              <FontAwesomeIcon icon={faSearch} className=" ml-2 pt-1 " />
            </button>
            <input
              type="text"
              placeholder="Cari di Urban Attire..."
              className="search_box ml-2 pl-2 w-[600px] bg-slate-100"
              name="keyword"
              id="keyword"
              autoFocus
              autoComplete="off"
            />
          </form>
        </div>

        <div className="flex gap-2 ml-7">
          <button className="h-9 w-20 border rounded-md border-brandblue text-center items-center ">
            <h1 className="text-lg font-semibold text-brandblue"> Masuk </h1>
          </button>
          <button className="h-9 w-20 border rounded-md bg-brandblue text-center items-center ">
            <h1 className="text-lg font-semibold text-white"> Daftar </h1>
          </button>
        </div>
      </div>

      <div className="flex relative font-semibold text-md items-center  justify-center">
        <ul
          className={`flex lg:gap-10 lg:justify-center md:static md:text-center md:flex-row  md:justify-center md:shadow-none md:bg-transparent md:transition-none md:w-auto md:h-full md:translate-y-0 md:text-black 
                            md:p-0 md:m-5 gap-6 sm:gap-5 fixed top-1/2 -translate-y-1/2 flex-col px-8 py-20 rounded shadow-lg h-screen w-[250px] shadow-slate-300  bg-slate-300 text-right transition-all `}
        >
          <i className="bx bx-x text-black text-3xl absolute top-5 right-5 cursor-pointer md:hidden">
            {" "}
          </i>
          {menuLinks.map((data) => (
            <li key={data.id}>
              <NavLink
                to={data.path}
                className={({ isActive }) => `nav ${isActive ? "active" : ""}`}
              >
                {data.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarUrban;
