import React from "react";

const PlusButton = () => {
  return (
    <div>
      <div class="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#869c8a] text-[#72b575] bg-green-200 text-[25px]  font-bold">
        <div className="absolute top-[-14px]">+</div>
      </div>
    </div>
  );
};

export default PlusButton;
