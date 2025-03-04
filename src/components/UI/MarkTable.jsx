import React from "react";
import { twMerge } from "tailwind-merge";
import PlusButton from "./Button/PlusButton";

const MarkTable = () => {
  const markData = [
    [-1, 1.7, 2, 2, 0, 2],
    [2, 1.0, -1, -1, -1, -1],
    [2, 1.7, 2, 2, 2, 0],
    [0, 0.7, -1, -1, -1, -1],
    [1, 1.7, 0, 1, 2, 2],
    [2, 1.7, 2, 2, 0, 2],
    [-1, 1.0, 0, 2, -1, -1],
    [-1, 0.7, -1, -1, -1, -1],
    [2, 1.7, 2, 0, 0, 2],
    [2, 1.7, -1, -1, -1, -1],
    [-1, 1.0, -1, -1, -1, -1],
    [-1, 1.7, -1, -1, -1, -1],
    [1, 1.7, -1, -1, -1, -1],
    [-1, 1.7, 0, 1, 2, 2],
    [2, 0.7, -1, -1, -1, -1],
  ];
  return (
    <div>
      <table className="w-full bg-green-200 min-w-fa-pull-left">
        <thead className="text-white bg-green-800 opacity-90">
          <tr>
            <th className="text-center w-[100px]">
              My <br /> mark{" "}
            </th>
            <th className="w-[120px] p-0 m-0 text-center">
              Community <br />
              mark
            </th>
            <th className="text-center">A.B.</th>
            <th className="text-center">D.A</th>
            <th className="text-center">P.C</th>
            <th className="text-center">P.G</th>
            <th className="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[70px] font-bold">
            <td className="relative text-center bg-green-200">
              <div className="absolute bg-gradient-to-r from-white to-[#c4cf73] transform -translate-x-1/2 -translate-y-1/2 border border-black w-10 h-7 top-1/2 left-1/2">
                <div className="opacity-60">2</div>
              </div>
            </td>
            <td className="relative text-center bg-green-200">
              <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-black h-7 top-1/2 left-1/2">
                2.8
              </div>
            </td>
            <td className="relative text-center bg-green-200">
              <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 h-7 top-1/2 left-1/2">
                2
              </div>
            </td>
            <td className="relative text-center bg-green-200">
              <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 h-7 top-1/2 left-1/2">
                3
              </div>
            </td>
            <td className="relative text-center bg-green-200">
              <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 h-7 top-1/2 left-1/2">
                2
              </div>
            </td>
            <td className="relative text-center bg-green-200 ">
              <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 h-7 top-1/2 left-1/2">
                2
              </div>
            </td>

            <td className="relative text-center bg-green-200">
              <div className="w-[5px]">
                <PlusButton />
              </div>
            </td>
          </tr>
          <tr className="h-[45px] bg-green-100">
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          {markData.map((marks, index) => (
            <tr key={index} className="h-[38px]">
              {marks.map((mark, i) => (
                <td key={i} className="relative text-center bg-green-100">
                  <div
                    className={twMerge(
                      i === 1 ? "bg-white" : "",
                      (i === 0 || i === 1) && mark !== -1
                        ? "absolute transform border border-black -translate-x-1/2 -translate-y-1/2  w-10 h-7 top-1/2 left-1/2"
                        : ""
                    )}
                  >
                    <b>{mark !== -1 ? mark : ""}</b>
                  </div>
                </td>
              ))}
              <td className="relative text-center bg-green-100">
                <div></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarkTable;
