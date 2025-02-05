"use client";
import React from "react";
import Accordion from "../atoms/Accordion_A";

function FooterAccordions_M() {
  return (
    <div className="lg:hidden">
      <Accordion isOpenInit={true} title={"با دکولوکس"}>
        <div className="grid grid-col-12">
          <a href="" className="grid-span-4 py-2 text-[14px]">
            فروش در دکولوکس
          </a>
          <a href="" className="grid-span-4 py-2 text-[14px]">
            درباره ما
          </a>
          <a href="" className="grid-span-4 py-2 text-[14px]">
            ارتباط با ما
          </a>
        </div>
      </Accordion>
      <Accordion isOpenInit={false} title={"خدمات مشتریان"}>
        <div className="grid grid-col-12">
          <a href="" className="grid-span-4 py-2 text-[14px]">
            پرسش های متداول
          </a>
          <a href="" className="grid-span-4 py-2 text-[14px]">
            رویه بازگشت کالا
          </a>
          <a href="" className="grid-span-4 py-2 text-[14px]">
            حریم خصوصی
          </a>
        </div>
      </Accordion>
      <Accordion isOpenInit={false} title={"راهنمای خرید"}>
        <div className="grid grid-col-12">
          <a href="" className="grid-span-4 py-2 text-[14px]">
            نحوه ثبت سفارش
          </a>
          <a href="" className="grid-span-4 py-2 text-[14px]">
            رویه ارسال سفارش
          </a>
        </div>
      </Accordion>
    </div>
  );
}

export default FooterAccordions_M;
