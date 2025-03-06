import React from "react";
import { learningPointData } from "../../../utils/Constant";
import { twMerge } from "tailwind-merge";
import realMadrid from "../../../assets/images/Real Madrid.png";
import barcelona from "../../../assets/images/barcelona.png";
import YellowCard from "../shapes/YellowCard";
import { PlusCircle } from "../svgs/PlusCircle";
import { Play } from "../svgs/Play";
import { PlayCircle } from "../svgs/PlayCircle";
import { Whistle } from "../svgs/Whistle";
import { Flag } from "../svgs/Flag";
import { SpeakingHead } from "../svgs/SpeakingHead";
import { SpeakingBody } from "../svgs/SpeakingBody";
import { Message } from "../svgs/Message";

const LearningPointTable = () => {
  return (
    <div>
      <div className="overflow-x-auto bg-green-100">
        <table className="min-w-full border-collapse bg-[#30633a]">
          <thead>
            <tr>
              <th
                className="text-left w-[300px] text-white pl-2 py-1 bg-[#5e9156]"
                colSpan="12"
              >
                Main incidents
              </th>
            </tr>
          </thead>
          <tbody>
            {learningPointData.map((data, index) => (
              <tr
                className={twMerge(
                  data.bgColor,
                  index === 0 ? "border-b border-gray-300" : ""
                )}
                key={index}
              >
                <td className="p-1 pt-2 pl-3 font-bold text-center bg-white">
                  <div className="border border-black bg-[#b0bf95] w-[50px] h-[30px] flex items-center justify-center">
                    {data.minute}
                  </div>
                </td>
                <td className="p-1 text-center bg-white">
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
                <td className="p-1 bg-white">
                  <b>{data.tSubtopic[0]}</b>
                  <br />
                  <span className="text-sm">{data.tSubtopic[1]}</span>
                </td>
                <td className="p-1 bg-white">
                  <div>
                    <div>
                      <b>{data.Offender[0]}</b>
                    </div>
                    <div className="flex gap-1">
                      {data.Offender[1] === "Barcelona" ? (
                        <img
                          className="w-5 h-5"
                          src={barcelona}
                          alt={data.Offender[1]}
                        />
                      ) : data.Offender[1] === "Real Madrid" ? (
                        <img
                          className="w-5 h-5"
                          src={realMadrid}
                          alt={data.Offender[1]}
                        />
                      ) : (
                        ""
                      )}
                      <span className="text-sm">{data.Offender[2]}</span>
                    </div>
                  </div>
                </td>

                <td className="p-1 text-center bg-white">
                  <div className="flex items-center justify-center">
                    {data.DBR === "whistle" ? (
                      <Whistle color={"#000000"} />
                    ) : data.DBR === "yellowCard" ? (
                      <YellowCard />
                    ) : data.DBR === "flag" ? (
                      <Flag />
                    ) : data.DBR === "speakingHead" ? (
                      <SpeakingHead />
                    ) : data.DBR === "speakingBody" ? (
                      <SpeakingBody />
                    ) : (
                      ""
                    )}
                  </div>
                </td>
                <td className="p-1 text-center bg-white">
                  <div
                    className={twMerge(
                      "relative border border-black flex items-center m-auto justify-center",
                      data.officialMark[1],
                      data.officialMark[2] === "big"
                        ? "w-[55px] h-10"
                        : "w-[45px] h-8"
                    )}
                  >
                    <b>{data.officialMark[0]}</b>
                    {data.hasMessage ? (
                      <div className="absolute top-[-8px] right-[-8px]">
                        <Message />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
                <td className="p-1 text-center bg-white">-</td>
                <td className="flex flex-col bg-white items-center justify-center h-[70px] gap-2 font-bold text-center">
                  <div className="bg-white border flex items-center justify-center border-black w-[45px] h-7">
                    {data.communityMark[0]}
                  </div>
                </td>
                <td className="p-1 font-bold text-center bg-white">
                  {data.aa}
                </td>
                <td className="p-1 font-bold text-center bg-white">
                  {data.hk}
                </td>
                <td className="p-1 font-bold text-center bg-white">
                  {data.ko}
                </td>
                <td className="p-1 font-bold text-center bg-white">
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

export default LearningPointTable;
