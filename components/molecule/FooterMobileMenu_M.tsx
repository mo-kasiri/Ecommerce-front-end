import React from "react";
import HomeSVG_A from "../atoms/svg/HomeSVG_A";
import CategorySVG_A from "../atoms/svg/CategorySVG_A";
import ShopSVG_A from "../atoms/svg/ShopSVG_A";
import ProfileSVG_A from "../atoms/svg/ProfileSVG_A";

function FooterMenu_M() {
  return (
    <div className=" bg-white grid grid-cols-12 pb-0 pt-10 mb-0 text-[16px] font-yekanRegular text-[#3A3A3A] my-6 ml-0 lg:hidden">
      <a
        href=""
        className="col-span-3 flex flex-col text-center justify-center items-center"
      >
        <HomeSVG_A />
        <p className="text-[12px] py-3 font-yekanSemiBold text-primary md:text-[16px]">
          خانه
        </p>
      </a>
      <a
        href=""
        className="col-span-3 flex flex-col text-center justify-center items-center"
      >
        <CategorySVG_A />
        <p className="text-[12px] py-3 font-yekanSemiBold text-primary md:text-[16px]">
          دسته‌بندی
        </p>
      </a>
      <a
        href=""
        className="col-span-3 flex flex-col text-center justify-center items-center"
      >
        <ShopSVG_A />
        <p className="text-[12px] py-3 font-yekanSemiBold text-primary md:text-[16px]">
          فروشگاه
        </p>
      </a>
      <a
        href=""
        className="col-span-3 flex flex-col text-center justify-center items-center"
      >
        <ProfileSVG_A />
        <p className="text-[12px] py-3 font-yekanSemiBold text-primary md:text-[16px]">
          پروفایل
        </p>
      </a>
    </div>
  );
}

export default FooterMenu_M;
