import React from "react";

const officialMarks = [
  { value: 0, style: "bg-white" },
  { value: 1, style: "bg-[#d7d6db]" },
  { value: 2, style: "bg-gradient-to-r from-[#d6d5da] to-[#c9c40d]" },
  { value: 3, style: "bg-gradient-to-r from-[#bfba01] to-[#fdfc00]" },
  { value: 4, style: "bg-[#ffff01]" },
  { value: 5, style: "bg-[#f76005]" },
  { value: 6, style: "bg-[#f81702]" },
];

const Rate = () => {
  return (
    <div>
      <div className="flex flex-row font-bold bg-gradient-to-r w-min">
        {officialMarks.map((mark) => (
          <div
            key={mark.value}
            className={`relative px-5 py-1 border border-black cursor-pointer ${mark.style}`}
          >
            {mark.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rate;
