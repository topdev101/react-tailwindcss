import React, { useCallback, useContext, useState } from "react";
import { Star } from "./svgs/Star";
import { RoundLocalHospital } from "./svgs/RoundLocalHospital";
import { RightArrow } from "./svgs/RightArrow";
import { twMerge } from "tailwind-merge";
import { MyContext } from "../../contexts/MyContext";

const OfficialAnswer = () => {
  const [selectedOfficialMark, setSelectedOfficialMark] = useState(4);
  const { selectedFourBar, setSelectedFourBar } = useContext(MyContext);

  const [selectedVarMark, setSelectedVarMark] = useState(3);
  const [flag, setFlag] = useState(true);

  const officialMarks = [
    { value: 0, style: "bg-white" },
    { value: 1, style: "bg-[#d7d6db]" },
    { value: 2, style: "bg-gradient-to-r from-[#d6d5da] to-[#c9c40d]" },
    { value: 3, style: "bg-gradient-to-r from-[#bfba01] to-[#fdfc00]" },
    { value: 4, style: "bg-[#ffff01]" },
    { value: 5, style: "bg-[#f76005]" },
    { value: 6, style: "bg-[#f81702]" },
  ];

  const varMarks = [
    { value: 1, style: "bg-white" },
    {
      value: 2,
      style: "bg-gradient-to-r from-white to-[#fc591d]",
    },
    {
      value: 3,
      style: "bg-gradient-to-r from-[#fc5e1f] to-[#f81605]",
    },
    {
      value: 4,
      style: "bg-[#f81702]",
    },
  ];

  return (
    <div className="pb-0">
      <div className="p-5 ml-4 mr-4 lg:mr-0">
        <div className="mb-2 gap-1 font-bold flex text-[#ff8c36]">
          <Star />
          <div>Official Answer:</div>
        </div>
        <div
          className={twMerge(
            "py-2 cursor-pointer",
            !selectedFourBar ? "bg-[#a3cfab]" : ""
          )}
          onClick={() => {
            if (flag) {
              setSelectedFourBar(false);
              setFlag(false);
            }
          }}
        >
          <div className="flex flex-row pl-3 font-bold bg-gradient-to-r w-min">
            {officialMarks.map((mark) => (
              <div
                key={mark.value}
                onClick={() => setSelectedOfficialMark(mark.value)}
                className={`relative px-5 py-1 border border-black cursor-pointer ${mark.style}`}
              >
                {mark.value}

                {selectedOfficialMark === mark.value && (
                  <div className="absolute top-9 w-0 h-0 transform -translate-x-1/2 -translate-y-full border-b-[9px] border-t-0 border-l-[9px] border-r-[9px] border-transparent left-1/2 border-b-black" />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-2 p-4">
            <input type="checkbox" className="w-6 h-6" />
            <div className="flex items-center justify-center text-center">
              Mark is based on match context
            </div>
          </div>
          <div className="flex gap-1 pl-2 mb-2 font-bold">
            <div className="text-green-800">VAR intervention:</div>
            <RoundLocalHospital />
          </div>
        </div>

        <div>
          <div
            className={twMerge(
              "flex flex-col py-4 cursor-pointer",
              selectedFourBar ? "bg-[#a3cfab]" : ""
            )}
            onClick={() => {
              if (!flag) {
                setSelectedFourBar(true);
                setFlag(true);
              }
            }}
          >
            <div className="flex flex-row pl-3 font-bold w-min">
              {varMarks.map((mark) => (
                <div
                  key={mark.value}
                  onClick={() => setSelectedVarMark(mark.value)}
                  className={`relative px-5 py-1 border border-black cursor-pointer ${mark.style}`}
                >
                  {mark.value}

                  {selectedVarMark === mark.value && (
                    <div className="absolute top-9 w-0 h-0 transform -translate-x-1/2 -translate-y-full border-b-[9px] border-t-0 border-l-[9px] border-r-[9px] border-transparent left-1/2 border-b-black" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2 p-4">
              <input type="checkbox" className="w-6 h-6" />
              <div className="flex items-center justify-center text-center">
                Mark is based on match context
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 font-bold text-green-800">
          Similar incident:{" "}
          <input className="w-12 mx-2 mr-10 border border-black rounded-md" />
          <input className="w-12 border border-black rounded-md" />
        </div>
        <div className="px-2 my-4">
          <textarea
            className="w-full h-20 p-2 placeholder-black rounded-md resize-none"
            placeholder="Samasel viisil olukorda minek on vastase suhtes hoolimatu. Teisest kollasest kaardist päästab
tösisema kontakti puudumine."
          />
        </div>

        <div>
          <button
            type="button"
            className="inline-flex pl-4 gap-2 items-center font-medium text-center text-white bg-green-900 rounded-lg hover:bg-green-800 focus:ring-4 p-1.5 focus:outline-none focus:ring-blue-300 me-2"
          >
            Save
            <RightArrow />
          </button>
          <button
            type="button"
            className="inline-flex gap-2 pl-4 p-1.5 font-medium text-center text-white bg-green-900 rounded-lg it1ms-center hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 me-2 dark:hover:bg-green-800"
          >
            Save and next
            <RightArrow />
            <span className="sr-only">Icon description</span>
          </button>
          <button className="text-green-800 underline">Recent history</button>
        </div>
      </div>
    </div>
  );
};

export default OfficialAnswer;
