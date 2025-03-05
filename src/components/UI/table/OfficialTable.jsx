import React from "react";
import { officialData } from "../../../utils/Constant.js";
import { ArrowLeft } from "../svgs/ArrowLeft.jsx";
import { twMerge } from "tailwind-merge";
import { Eye } from "../svgs/Eye.jsx";
import { Whistle } from "../svgs/Whistle.jsx";

const OfficialTable = () => {
  return (
    <div className="m-2 mt-2 font-bold ">
      {officialData.map((data, index) => (
        <div
          key={index}
          className={twMerge(
            "border-b py-1.5",
            !data.isSelected
              ? "border-[#9dbcb6]"
              : "border-[#d2e7d6] bg-[#a5ceac]"
          )}
        >
          <div className="relative flex justify-between p-2">
            <div className="flex items-center gap-2">
              <div>
                <ArrowLeft />
              </div>
              <div
                className={twMerge(
                  "w-[50px] h-7 border flex items-center justify-center border-black",
                  data.num === 1
                    ? "bg-white"
                    : data.num === 2
                    ? "bg-gradient-to-r from-white to-[#f3632f]"
                    : "bg-gradient-to-r from-[#f3632f] to-[#ff1903]"
                )}
              >
                {data.num}
              </div>
              <div>{data.title}</div>
            </div>
            {data.hasEye ? (
              <div className="flex items-center absolute top-[-5px] right-1">
                <Eye />
              </div>
            ) : (
              ""
            )}
            {data.isSelected ? (
              <div className="absolute top-[-5px] right-1 flex items-center">
                <Whistle color={"#cdccca"} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="pl-2 font-normal">{data.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default OfficialTable;
