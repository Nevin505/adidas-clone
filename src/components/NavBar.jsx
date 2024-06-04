import { useState } from "react";

import {
  FaSearch,
  FaShoppingCart,
  FaRegHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import IconButton from "./IconButton";

import BrandLogo from "./BrandLogo";
import AnimationNavBar from "./AnimationHeaderBanner";

import NavBarStyles from "./NavBar.module.css";

const custonerInfo = ["help", "orders and returns", "sign up", "log in"];

const sideNavList = [
  "Men",
  "Women",
  "Kids",
  "Sports",
  "New",
  "LifeStyle",
  "Essentials",
  "Summer Shop",
  "Cricket",
  "Outlet",
];

const mainNavListDatas = [
  "Men",
  "Women",
  "Kids",
  "New",
  "Sport",
  "LifeStyle",
  "Outlet",
];

const NavBar = () => {
  const [isHamBurgerMenuDisplayed, setIsHamBurgerMenuDisplayed] =
    useState(false);

  const showSideNavDisplayHandler = () => {
    setIsHamBurgerMenuDisplayed((prev) => !prev);
  };

  console.log("NavBar render");

  return (
    <>
      <AnimationNavBar />
      <>
        <div className="w-full ">
          <menu className="flex gap-2 justify-end px-10">
            {custonerInfo.map((list, index) => (
              <li
                className="font-thin py-1 px-1 cursor-pointer hover:underline"
                key={index}
              >
                {list}
              </li>
            ))}
          </menu>
        </div>

        <nav className="flex justify-between w-full px-10  max-lg:hidden ">
          <BrandLogo />
          <menu
            className={`${NavBarStyles.listStyles} flex items-center  gap-4 uppercase`}
          >
            {mainNavListDatas.map((listData, index) => (
              <li key={index}>{listData}</li>
            ))}
          </menu>

          {/* RIGHT SECTION OF THE MAIN NAV */}

          <div className="flex items-center gap-2">
            <div className="relative flex ">
              <input
                type="text"
                className="border-1 border-black px-2 py-1 bg-slate-200"
                placeholder="Search"
              />
              <FaSearch className="absolute right-1 top-2 " />
            </div>
            <div className="flex items-center gap-5">
              <IconButton>
                <div className="relative">
                  <p className="bg-yellow-300 w-4 rounded-2xl text-center absolute -right-2 -top-5  ">
                    {" "}
                    1
                  </p>
                  <FaShoppingCart size={20} />
                </div>
              </IconButton>
              <IconButton>
                <FaRegHeart size={20} />
              </IconButton>
              <IconButton>
                <FaShoppingBag size={20} />{" "}
              </IconButton>
            </div>
          </div>
        </nav>
      </>
      {/* :  */}
      <nav className="w-full flex justify-between lg:hidden px-4 py-2 ">
        {!isHamBurgerMenuDisplayed ? (
          <>
            <div className="flex items-center gap-4">
              <IconButton onClick={showSideNavDisplayHandler}>
                <RxHamburgerMenu size={24} />
              </IconButton>
              <IconButton>
                <FaRegHeart size={24} />
              </IconButton>
            </div>
            <BrandLogo />
            <div className="flex items-center gap-6">
              <IconButton>
                <FaShoppingCart size={24} />
              </IconButton>
              <IconButton>
                <FaShoppingBag size={24} />
              </IconButton>
            </div>
          </>
        ) : (
          <div className="flex-1 transition-all duration-100">
            <div className=" flex justify-between items-center ">
              <BrandLogo />
              <IconButton className="" onClick={showSideNavDisplayHandler}>
                <IoClose size={24} />
              </IconButton>
            </div>

            <menu className="flex flex-col gap-2 items-center">
              {sideNavList.map((navList, index) => {
                return (
                  <ul key={index}>
                    <button>{navList}</button>
                  </ul>
                );
              })}
            </menu>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
