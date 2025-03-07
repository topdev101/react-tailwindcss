import React from "react";
import { markData } from "../../utils/Constant";
import VideosCard from "./shapes/VideosCard";
import { Eye } from "./svgs/Eye";
import { Whistle } from "./svgs/Whistle";
import { twMerge } from "tailwind-merge";
import { RightArrow } from "./svgs/RightArrow";

const MyMark = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="bg-white min-w-fa-pull-left">
          <thead className="text-white bg-green-800 opacity-90">
            <tr>
              <th className="w-24 px-4">Minute</th>
              <th className="w-24 px-4">Time</th>
              <th className="px-4 lg:w-[600px] w-full text-left">
                Topic <br />
                subtopic
              </th>
            </tr>
          </thead>
          <tbody className="h-[70px]">
            <tr>
              <td className="px-4 bg-[#c1dfc7]">
                <VideosCard />
              </td>
              <td className="px-4 bg-[#c1dfc7]">
                <div></div>
                <div>
                  0:01
                  <div className="relative flex items-center justify-center w-[24px] h-6 rounded-full bg-green-700">
                    <div className="absolute top-[3px] left-[9px] w-0 h-0 border-t-[9px] border-t-transparent border-l-[9px] border-l-white border-b-[9px] border-b-transparent"></div>
                  </div>
                </div>
              </td>
              <td className="px-4 bg-[#c1dfc7]">
                <b>Lack of respect</b>
                <br />
                Tripping
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-5 pb-[103px] mr-4 font-bold bg-green-100 lg:mr-0">
        <div className="mb-2 font-bold text-green-800">My mark:</div>
        <div className="flex flex-row bg-gradient-to-r from-white to-[yellow] w-min">
          <div className="px-5 border border-black">1</div>
          <div className="px-5 border border-black">2</div>
          <div className="px-5 border border-black">3</div>
          <div className="px-5 border border-black">4</div>
        </div>
        <div className="mt-4 font-bold text-green-800">
          Similar incident:{" "}
          <input className="w-12 mx-2 mr-10 border border-black rounded-md" />
          <input className="w-12 border border-black rounded-md" />
        </div>
        <div className="px-2 my-4">
          <textarea
            className="w-full h-20 p-1 resize-none"
            placeholder="Comment"
          />
        </div>
        <div className="mb-8">
          <button
            type="button"
            className="text-white gap-2 bg-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
          >
            Save
            <RightArrow />
            <span className="sr-only">Icon description</span>
          </button>
          <button
            type="button"
            className="text-white gap-2 hover:bg-green-800 bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:hover:bg-green-800"
          >
            Save and next
            <RightArrow />
            <span className="sr-only">Icon description</span>
          </button>
        </div>
        <div className="ml-2">
          {markData.map((data, index) => (
            <div
              key={index}
              className={`flex flex-row pl-2 items-center justify-between pb-2 border-b border-gray-400 ${
                data.isSelected ? "bg-green-300" : ""
              }`}
            >
              <div className="flex flex-row items-center mt-2">
                <div
                  className={twMerge(
                    "w-9 text-center border border-black px-2 mr-3",
                    data.mark === 2
                      ? "bg-gradient-to-r from-[#ddded9] to-[#d3d02f]"
                      : "bg-[yellow] "
                  )}
                >
                  {data.mark}
                </div>
                {data.name}
              </div>
              {data.hasEye && <Eye />}
              {data.isSelected && <Whistle color={"#c7ccca"} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMark;
