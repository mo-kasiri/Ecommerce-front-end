import React from "react";
import Image from "next/image";

function SellersWhoTrustedUs_A() {
  return (
    <div className="py-4 px-4 text-center lg:hidden">
      <p className="text-center font-yekanBold pb-8 pt-5">
        فروشندگانی که به ما اعتماد کرده‌اند
      </p>
      <div className="grid grid-cols-12 gap-0 justify-items-center text-[16px] font-yekanRegular text-[#3A3A3A] my-1">
        <div className="col-span-4">
          <Image
            src="/images/baros.png"
            alt=""
            layout="responsive"
            width={50}
            height={50}
          />
        </div>
        <div className="col-span-4">
          <Image
            src="/images/hermes.png"
            alt=""
            layout="responsive"
            width={50}
            height={50}
          />
        </div>
        <div className="col-span-4">
          <Image
            src="/images/mobliran.png"
            alt=""
            layout="responsive"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}

export default SellersWhoTrustedUs_A;
