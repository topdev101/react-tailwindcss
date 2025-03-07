import React from "react";
import { incidentData } from "../../../utils/Constant";
import { twMerge } from "tailwind-merge";
import realMadrid from "../../../assets/images/Real Madrid.png";
import barcelona from "../../../assets/images/barcelona.png";
import YellowCard from "../shapes/YellowCard";
import { PlusCircle } from "../svgs/PlusCircle";
import { Play } from "../svgs/Play";
import { PlayCircle } from "../svgs/PlayCircle";
import { Message } from "../svgs/Message";
import Rate from "../Rate";

const IncidentTable = () => {
  return (
    <div>
      <div className="overflow-x-auto bg-green-100">
        <table className="min-w-full border-collapse bg-[#30633a]">
          <thead className="text-gray-300">
            <tr>
              <th className="p-2 text-left w-[80px]">Minute</th>
              <th className="p-2 text-left w-[50px]">Time</th>
              <th className="p-2 text-left">Topic Subtopic</th>
              <th className="p-2 text-left">Offender</th>
              <th className="p-2 w-[100px]">Decision by Referee</th>
              <th className="p-2">Official Mark</th>
              <th className="p-2">My Mark</th>
              <th className="p-2">Community Mark</th>
              <th className="p-2">A.A.</th>
              <th className="p-2">H.K.</th>
              <th className="p-2">K.Ö.</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-[#5e9156]">
              <td
                className="text-left text-white pl-2 py-1 bg-[#5e9156]"
                colSpan="12"
              >
                Main incidents
              </td>
            </tr>
            {incidentData.map((data, index) => (
              <tr
                className={twMerge(
                  data.bgColor,
                  index === 0 ? "border-b border-gray-300" : ""
                )}
                key={index}
              >
                <td className="p-1 pt-2 pl-3 text-center">
                  <div
                    className={twMerge(
                      data.minute
                        ? "border font-bold border-black bg-[#b0bf95] w-[50px] h-[30px] flex items-center justify-center"
                        : ""
                    )}
                  >
                    {data.minute}
                  </div>
                </td>
                <td className="p-1 text-center w-[50px]">
                  <div className="flex items-center justify-center">
                    {data.time}
                  </div>
                  <div className="flex items-center justify-center pr-1">
                    {data.time ? (
                      <PlayCircle bgColor={"#769b79"} triangleColor={"white"} />
                    ) : (
                      ""
                    )}
                  </div>
                </td>
                <td className="w-1/4 p-1">
                  <b>{data.tSubtopic[0]}</b>
                  <br />
                  <span className="text-sm">{data.tSubtopic[1]}</span>
                </td>
                <td className="w-1/3 p-1">
                  <div>
                    <div>
                      <b>{data.Offender[0]}</b>
                    </div>
                    <div className="flex gap-1">
                      <img
                        className="w-5 h-5"
                        src={
                          data.Offender[1] === "barcelona"
                            ? barcelona
                            : realMadrid
                        }
                        alt={data.Offender[1]}
                      />
                      <span className="text-sm">{data.Offender[2]}</span>
                    </div>
                  </div>
                </td>

                <td className="p-1 text-center">
                  <div className="flex items-center justify-center">
                    {data.DBR === "warning" ? <YellowCard /> : <Play />}
                  </div>
                </td>
                <td className="flex items-center justify-center p-1 text-center">
                  <div
                    className={twMerge(
                      "relative border border-black w-[55px] h-10 flex items-center justify-center",
                      data.officialMark === 5
                        ? "bg-[#f76006]"
                        : data.officialMark === 4
                        ? "bg-[#fffe03]"
                        : "bg-[#ff1903]"
                    )}
                  >
                    <b>{data.officialMark}</b>
                    {data.hasMessage ? (
                      <div className="absolute top-[-8px] right-[-8px]">
                        <Message />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
                <td className="p-1 text-center">-</td>
                <td className="flex flex-col items-center justify-center h-[70px] gap-2 font-bold text-center">
                  <div className="relative group">
                    <div className="bg-white cursor-pointer border flex items-center justify-center border-black w-[45px] h-10">
                      {data.communityMark[0]}
                    </div>
                    <div className="absolute z-10 hidden p-3 mb-4 text-sm text-gray-900 bg-white border border-[#254432] rounded shadow-lg group-hover:block w-96 left-1/2 transform -translate-x-1/2 bottom-full">
                      <div className="text-left">Evaluations: 54</div>
                      <div>
                        <div>
                          <Rate />
                        </div>
                        <div>2 42 9 1</div>
                      </div>
                      <div className="font-semibold text-left">
                        10% lowest & highest marks excluded
                      </div>
                      <div className="absolute w-0 h-0 transform -translate-x-1/2 border-t-8 border-l-8 border-r-8 left-1/2 top-full border-t-[#000000] border-l-transparent border-r-transparent"></div>
                    </div>
                  </div>
                  {data.communityMark[1] ? (
                    <div className="w-[45px] h-5 text-[12px] bg-white font-normal border border-black">
                      {data.communityMark[1]}
                    </div>
                  ) : (
                    ""
                  )}
                </td>
                <td className="justify-end p-1 font-bold text-center">
                  {data.aa}
                </td>
                <td className="p-1 font-bold text-center">{data.hk}</td>
                <td className="p-1 font-bold text-center">{data.ko}</td>
                <td className="p-1 font-bold text-center ">
                  <PlusCircle />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncidentTable;
