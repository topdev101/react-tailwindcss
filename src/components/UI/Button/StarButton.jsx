import React from "react";

const StarButton = () => {
  return (
    <div className="flex gap-2">
      <div className="p-1.5">
        <div class="flex items-center justify-center w-6 h-6 rounded-full bg-[#1c7c08] text-gray-200 font-bold">
          i
        </div>
      </div>
      <div className="p-1 border border-white">
        <div className="relative w-7 h-7">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#eea756] to-[#d56f00]"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          ></div>
        </div>
      </div>
      <div className="p-1 border border-white">
        <div className="relative w-7 h-7">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#6694b2] to-[#165184]"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          ></div>
        </div>
      </div>
      <div className="p-1 border border-white">
        <div className="relative w-7 h-7">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#717f73] to-[#57635a]"
            style={{
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StarButton;
