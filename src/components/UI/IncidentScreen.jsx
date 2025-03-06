import React, { useState } from "react";
import { pagiNationData, screenData } from "../../utils/Constant";
import { twMerge } from "tailwind-merge";
import ImageScreen from "./ImageScreen";

const IncidentScreen = () => {
  const [num1, setNum1] = useState(1);

  return (
    <div className="mx-4 my-2">
      <div className="flex justify-between">
        <div className="pt-2 text-[#1f622f] font-bold text-[20px]">
          Similar incidents
        </div>
        <div>
          <button className="py-2 bg-[#428751] px-4 rounded-t-md mr-3 text-white">
            filter / sort
          </button>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex gap-1 p-2 font-bold text-white">
          {pagiNationData.map((item, index) => (
            <div
              key={index}
              className={twMerge(
                "px-2 py-1 bg-[#1f622f] rounded-md cursor-pointer",
                num1 === item ? "bg-[#a5a5a5]" : ""
              )}
              onClick={() => setNum1(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mx-2">
          {screenData.map((data, index) => (
            <div key={index} className="flex-1 min-w-[200px]">
              <ImageScreen data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white">
        <div className="flex gap-1 p-2 font-bold text-white">
          {pagiNationData.map((item, index) => (
            <div
              key={index}
              className={twMerge(
                "px-2 py-1 bg-[#1f622f] rounded-md cursor-pointer",
                num1 === item ? "bg-[#a5a5a5]" : ""
              )}
              onClick={() => setNum1(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncidentScreen;
