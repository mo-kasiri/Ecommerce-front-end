"use client";
import React from "react";

interface Props {
  handleClick?: () => void;
  children: React.ReactNode;
}

function Button({ children, handleClick }: Props) {
  return (
    <button
      className="px-4 py-2.5 text-sm font-medium text-center text-white bg-primary rounded-xl hover:bg-green-800"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
