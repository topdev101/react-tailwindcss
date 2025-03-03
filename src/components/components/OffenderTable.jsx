import React from "react";
import realMadrid from "../../assets/images/real_madrid.png";
import TableRow from "../table/RowTable";

const OffenderTable = () => {
  const data = [
    {
      title: "Playing the ball first",
      first: "Yes",
      second: "",
      third: "No",
      hasColor: [],
    },
    {
      title: "Studs used",
      first: "No",
      second: "",
      third: "Yes",
      hasColor: [3],
    },
    {
      title: "Intensity",
      first: "Low",
      second: "Moderate",
      third: "High",
      hasColor: [3],
    },
    {
      title: "Points of contact",
      first: "Foot",
      second: "Ankle",
      third: "High",
      hasColor: [1],
    },
    {
      title: "Type of contact",
      first: "Slight",
      second: "Glancing",
      third: "Full",
      hasColor: [2],
    },
    {
      title: "Towards the opponent",
      first: "No",
      second: "Partially",
      third: "Direct",
      hasColor: [3],
    },
  ];
  const offenderData = [
    {
      title: "Initiating the contact",
      first: "Pulled",
      second: "Bent",
      third: "Straight",
      hasColor: [],
    },
    {
      title: "Straight leg",
      first: "",
      second: "",
      third: "Yes",
      hasColor: [],
    },
    {
      title: "Lunge/jump",
      first: "",
      second: "",
      third: "Yes",
      hasColor: [3],
    },
    {
      title: "From behind",
      first: "Yes",
      second: "Debatable",
      third: "No",
      hasColor: [3],
    },
    {
      title: "Attempt to play the ball",
      first: "Yes",
      second: "Debatable",
      third: "No",
      hasColor: [],
    },
  ];
  const opponentData = [
    {
      title: "Result/consequence",
      first: "Light",
      second: "Moderate",
      third: "Serious",
      hasColor: [],
    },
    {
      title: "Leg supporting body",
      first: "No",
      second: "Partially",
      third: "Fully",
      hasColor: [1],
    },
    {
      title: "Contact to head/neck",
      first: "",
      second: "",
      third: "Yes",
      hasColor: [],
    },
    {
      title: "Opponent saves himself",
      first: "",
      second: "",
      third: "Yes",
      hasColor: [3],
    },
  ];

  return (
    <div className="bg-green-100">
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
              <td className="px-4 bg-green-200">
                <img src={realMadrid} className="h-6" alt="real" />
                <div>Marsaxlokk</div>
              </td>
              <td className="px-4 text-center bg-green-200">red card</td>
              <td className="px-4 text-center bg-green-200"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pl-3 m-3">
        <div className="flex">
          <div className="w-6/12 text-white bg-[#316538] border-gray-700">
            <div className="flex gap-2">
              <div className="pl-1 font-bold text-white">-</div>
              <div className="text-2xl font-bold text-[19px]">
                Considerations
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-5/12 bg-[#558131] border-[2px] border-black text-black">
            <div className="font-bold text-black"></div>
            <div className="pl-2 font-bold text-black text-[18px]">
              SEVERITY OF OFFENCE
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full">
            <div className="flex">
              <div className="w-1/12">ABC</div>
              <div className="w-5/6">
                <TableRow data={data} />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/12">ABC</div>
              <div className="w-5/6">
                <TableRow data={offenderData} />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/12">ABC</div>
              <div className="w-5/6">
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
