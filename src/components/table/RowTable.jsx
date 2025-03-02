import React from "react";
import { twMerge } from "tailwind-merge";

export default function RowTable(props) {
  const { data } = props;
  return (
    <div>
      {data.map((item, index) => (
        <div className="flex" key={index}>
          <div className="w-6/12 text-black bg-gray-400">
            <div className="flex h-[38px] border-[1px] items-center border-black justify-center text-center">
              {item.title}
            </div>
          </div>
          <div className="w-6/12 text-black bg-white">
            <div className="flex h-[38px] border-[1px] border-black justify-center text-center">
              <div
                className={twMerge(
                  "w-[60px] flex items-center justify-center",
                  item.hasColor.findIndex((color) => color === 1) !== -1
                    ? "bg-[#93d04f]"
                    : ""
                )}
              >
                {item.first}
              </div>
              <div
                className={twMerge(
                  "flex-grow border-l-[1px] border-r-[1px] border-black flex items-center justify-center",
                  item.hasColor.findIndex((color) => color === 2) !== -1
                    ? "bg-gradient-to-br from-[#93d04f] to-[#fc3400]"
                    : ""
                )}
              >
                {item.second}
              </div>
              <div
                className={twMerge(
                  "w-[60px] flex items-center justify-center",
                  item.hasColor.findIndex((color) => color === 3) !== -1
                    ? "bg-[#fc3400]"
                    : ""
                )}
              >
                {item.third}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
