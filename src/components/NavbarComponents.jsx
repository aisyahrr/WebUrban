import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { menuLinks } from "../data/file";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {
  //function menu sidebar
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  let menuActive = menu ? "right-0" : "-right-full";
  const logoUrl = "/image/Logo.png";

  return (
    <div className=" w-screen dark:bg-gray-900 dark:text-white">
      <div className=" justify-center ">
        <div className="navbar-box w-screen ">
          <div className="Logo hidden items-center gap-5 justify-between text-center h-14 px-10 bg-slate-100 md:flex ">
            <div className="flex-shrink-0">
              <img src={logoUrl} alt="Logo" className="h-8 w-auto" />
            </div>
            <div className="flex items-center gap-1 ">
              <button className="text-md font-medium mr-2 h-7 w-20 border border-black rounded-md hover:bg-brandblue hover:text-white dark:border-white">
                {" "}
                Join Us{" "}
              </button>
              <button className="text-md font-medium h-7 w-20 border border-black rounded-md hover:bg-brandblue hover:text-white dark:border-white">
                {" "}
                Sign in{" "}
              </button>
            </div>
          </div>
          <div className="Logo hidden items-center gap-5 h-14 px-10 bg-white justify-center md:flex">
            <img
              src={logoUrl}
              alt="Logo"
              className="flex h-8 w-auto md:hidden"
            />
            {/* sidebar kategori*/}
            <div className="flex relative font-semibold text-md items-center ">
              <ul
                className={`flex lg:gap-14 lg:justify-center md:static md:text-center md:flex-row  md:justify-center md:shadow-none md:bg-transparent md:transition-none md:w-auto md:h-full md:translate-y-0 md:text-black 
                                            md:p-0 md:m-10 gap-6 sm:gap-5 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-20 rounded shadow-lg h-screen w-[250px] shadow-slate-300  bg-slate-300 text-right transition-all fixed `}
              >
                <i
                  className="bx bx-x text-black text-3xl absolute top-5 right-5 cursor-pointer md:hidden"
                  onClick={handleClick}
                ></i>
                {menuLinks.map((data) => (
                  <li key={data.id}>
                    <NavLink to={data.path} className="nav ">
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2  ">
              <form
                action=""
                method="post"
                className="flex items-center border border-solid rounded-xl border-slate-300 h-10 w-48 bg-slate-100 "
              >
                <button className="h-6 w-5 rounded-full">
                  <FontAwesomeIcon icon={faSearch} className=" ml-2 pt-1 " />
                </button>
                <input
                  type="text"
                  placeholder="search..."
                  className="search_box ml-2 pl-2 w-36 bg-slate-100"
                  name="keyword"
                  id="keyword"
                  autoFocus
                  autoComplete="off"
                />
              </form>
              <button className="flex gap-2">
                <BiLike className="flex text-black-500 text-3xl cursor-pointer my-1 md:hidden" />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="flex ml-2 my-1 pt-1 text-2xl cursor-pointer "
                />
                <FaRegUserCircle className="hidden text-black-500 text-3xl ml-2 cursor-point my-1 " />
              </button>
              <button className="flex">
                <MdOutlineShoppingCart className="bx bx-cart text-black-500 ml-1 text-3xl cursor-pointer my-1 md:flex" />
                <div
                  className="w-4 h-4 bg-red-500 text-white  flex rounded-full top-0 -right-4 md:relative md:right-4 
                                                items-center justify-center text-xs "
                >
                  5
                </div>
              </button>
              <MdMenu
                className="bx bx-menu text-black-500 text-3xl ml-2 cursor-pointer lg:hidden md:hidden block my-1"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
