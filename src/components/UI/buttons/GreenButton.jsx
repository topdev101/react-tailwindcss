import React from "react";
import { twMerge } from "tailwind-merge";
import { RightArrow } from "../svgs/RightArrow";

const GreenButton = ({ label, color }) => {
  return (
    <div>
      <button className="p-[6px] px-3 flex gap-2 text-white bg-[#1f622f] rounded-lg">
        <div>{label}</div>
        <div>
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default GreenButton;
