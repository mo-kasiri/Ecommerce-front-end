import React from "react";
import UserSVG_A from "../atoms/UserSVG_A";
import ShopSVG_A from "../atoms/ShopCartSVG_A";
import NavBarMenu_O from "@/components/molecule/NavBarMenu_M";
import SearchBar_M from "../molecule/SearchBar_M";
import HamburgerMenu_A from "../atoms/HamburgerMenu";

const NavBar_O = () => {
  return (
    <>
      <nav className="p-6 bg-white pb-0">
        <div className="container">
          <div className="grid my-6 grid-cols-12">
            <div className="col-span-4 lg:hidden">
              <HamburgerMenu_A />
            </div>

            <div className="col-span-4 font-yekanBold text-center text-[20px] md:text-[32px] text-secondary lg:pr-5 lg:col-span-2">
              دکولوکس
            </div>
            <div className="hidden pr-20 lg:block lg:col-span-8">
              <SearchBar_M />
            </div>
            <div className="col-span-4 gap-4 flex justify-end lg:py-3 ml-0 lg:col-span-2">
              <ShopSVG_A />
              <UserSVG_A />
            </div>
          </div>
          <div className="container">
            <NavBarMenu_O />
          </div>
        </div>
      </nav>
      {/* border */}
      <div className="w-full border-b-2 border-[#EFE5D5]"></div>
    </>
  );
};

export default NavBar_O;
