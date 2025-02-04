"use client";
import React from "react";

interface Props {
  handleClick?: () => void;
  children: React.ReactNode;
}

function Button({ children, handleClick }: Props) {
  return (
    <button
      className="px-7 py-[0.75rem] ml-1 text-sm font-medium text-center text-white bg-primary rounded-2xl hover:bg-green-800"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
