import React from "react";

function SellersWhoTrustedUs_A() {
  return (
    <div className="py-4 px-4 text-center lg:hidden">
      <p className="text-center font-yekanBold pb-8 pt-5">
        فروشندگانی که به ما اعتماد کرده‌اند
      </p>
      <div className="grid grid-cols-12 gap-0 justify-items-center text-[16px] font-yekanRegular text-[#3A3A3A] my-1">
        <img className="col-span-4" src="/images/baros.png" alt="" />
        <img className="col-span-4" src="/images/hermes.png" alt="" />
        <img className="col-span-4" src="/images/mobliran.png" alt="" />
      </div>
    </div>
  );
}

export default SellersWhoTrustedUs_A;
