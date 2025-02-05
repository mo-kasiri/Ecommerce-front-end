import { ReactNode, useState } from "react";
import ArrowUpSVG_A from "./svg/ArrowUpSVG_A";

interface Props {
  title: string;
  isOpenInit: boolean;
  children: ReactNode;
}

const Accordion_A = ({ title, isOpenInit, children }: Props) => {
  const [isOpen, setIsOpen] = useState(isOpenInit);

  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div className="mb-1 container p-4">
      <button
        className="w-full text-right font-yekanBold hover:bg-gray-300 transition duration-300"
        onClick={toggle}
      >
        {title}
        <ArrowUpSVG_A isOpen={isOpen} />
      </button>
      {/* border */}
      <div className="w-full border-b-[1px] mt-3 border-[#ffffff21]"></div>
      {/* border */}
      <div className={`text-[#e4e4e6bd]  ${isOpen ? "flex" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion_A;

// transform transition-transform duration-300
