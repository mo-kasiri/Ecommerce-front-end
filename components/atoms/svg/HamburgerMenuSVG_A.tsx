import React from "react";

function HamburgerMenu_A() {
  return (
    <div className="flex lg:hidden">
      <svg
        className="w-4 h-4 md:w-6 md:h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_329_2966)">
          <path
            d="M0 4C0 3.45 0.45 3 1 3H18C18.55 3 19 3.45 19 4C19 4.55 18.55 5 18 5H1C0.45 5 0 4.55 0 4ZM18 19H1C0.45 19 0 19.45 0 20C0 20.55 0.45 21 1 21H18C18.55 21 19 20.55 19 20C19 19.45 18.55 19 18 19ZM23 11H6C5.45 11 5 11.45 5 12C5 12.55 5.45 13 6 13H23C23.55 13 24 12.55 24 12C24 11.45 23.55 11 23 11Z"
            fill="#284F49"
          />
        </g>
        <defs>
          <clipPath id="clip0_329_2966">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default HamburgerMenu_A;
