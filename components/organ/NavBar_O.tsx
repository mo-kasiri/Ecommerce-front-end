import React from "react";
import SearchBar from "../molecule/SearchBar_M";
import ShopSVG from "../atoms/ShopCartSVG_A";
import UserSVG from "../atoms/UserSVG_A";

const NavBar = () => {
  return (
    <nav className="container mx-auto relative p-6 bg-white">
      <div className=" flex-row justify-between">
        <div className="flex items-center justify-between space-x-20 my-6">
          <div className="flex font-yekanBold text-[32px] text-secondary">
            دکولوکس
          </div>
          <div className="flex-auto pr-20">
            <SearchBar />
          </div>
          <span className="flex-inital"></span>

          <div className="flex gap-6 mr-20" style={{ marginLeft: "0px" }}>
            <ShopSVG />
            <UserSVG />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
