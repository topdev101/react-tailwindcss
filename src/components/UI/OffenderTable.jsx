import React from "react";
import realMadrid from "../../assets/images/Real Madrid.png";
import TableRow from "./table/RowTable";
import { data, opponentData, offenderData } from "../../utils/Constant";
import YellowCard from "./shapes/YellowCard";

const OffenderTable = () => {
  return (
    <div className="pb-12 bg-green-100">
      <div className="overflow-x-auto">
        <table className="w-full bg-white min-w-fa-pull-left">
          <thead className="text-white bg-green-800 opacity-90">
            <tr className="">
              <th className="w-1/2 px-4 text-left">Offender</th>
              <th className="w-1/3 px-4 text-center">
                Decision <br /> by referee
              </th>
              <th className="w-1/3 px-4 text-center">
                Official <br />
                mark
              </th>
            </tr>
          </thead>
          <tbody className="h-[70px]">
            <tr>
              <td className="px-4 bg-[#c1dfc7]">
                <div className="flex gap-2">
                  <div>
                    <img src={realMadrid} className="h-6" alt="real" />
                  </div>
                  <div>Real Madrid</div>
                </div>
              </td>
              <td className="px-4 text-center bg-[#c1dfc7]">
                <YellowCard />
              </td>
              <td className="px-4 text-center bg-[#c1dfc7]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pl-3 m-3">
        <div className="flex">
          <div className="w-7/12 text-white bg-[#316538] border-gray-700">
            <div className="flex gap-2">
              <div className="w-[40px] flex justify-center items-center text-white">
                <div className="h-[3px] w-[20px] bg-white"></div>
              </div>
              <div className="text-2xl font-bold text-[19px]">
                Considerations
              </div>
            </div>
          </div>
          <div className="flex w-6/12 bg-[#558131] border-[2px] border-black text-black">
            <div className="font-bold text-black"></div>
            <div className="pl-2 font-bold text-black text-[18px]">
              SEVERITY OF OFFENCE
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full">
            <div className="flex">
              <div className="flex items-center justify-center w-1/12 h-[228px] border border-black bg-[#70ad46]">
                <span className="-rotate-90 text-[20px] font-bold text-black whitespace-nowrap">
                  Main criteria
                </span>
              </div>
              <div className="w-11/12">
                <TableRow data={data} />
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center justify-center w-1/12 h-[190px] border border-black bg-[#a9cf8b]">
                <span className="-rotate-90 text-[20px] text-black whitespace-nowrap font-bold">
                  Offender
                </span>
              </div>
              <div className="w-11/12">
                <TableRow data={offenderData} />
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center justify-center w-1/12 h-[152px] border border-black bg-[#c6dfb6]">
                <span className="-rotate-90 text-[20px] text-black whitespace-nowrap font-bold">
                  Opponent
                </span>
              </div>
              <div className="w-11/12">
                <TableRow data={opponentData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffenderTable;
