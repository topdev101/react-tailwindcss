import React from "react";
import MyMark from "../components/MyMark";
import OffenderTable from "../components/OffenderTable";

const Container = () => {
  return (
    // <div className="overflow-x-auto">
    //   <table className="min-w-full bg-white">
    //     <thead className="text-white bg-green-600">
    //       <tr>
    //         <th className="w-24 px-4 py-2 border-b">Minute</th>
    //         <th className="w-24 px-4 py-2 border-b">Time</th>
    //         <th className="py-2 px-4 border-b w-[600px] text-left">
    //           Topic <br />
    //           subtopic
    //         </th>
    //         <th className="py-2 px-4 border-b w-[300px] text-left">Offender</th>
    //         <th className="px-4 py-2 border-b">Decision by referee</th>
    //         <th className="px-4 py-2 border-b">Official mark</th>
    //         <th className="px-4 py-2 border-b">My mark</th>
    //         <th className="px-4 py-2 border-b">Community mark</th>
    //         <th className="px-4 py-2 border-b">A.B.</th>
    //         <th className="px-4 py-2 border-b">D.A</th>
    //         <th className="px-4 py-2 border-b">P.C.</th>
    //         <th className="px-4 py-2 border-b">P.G</th>
    //         <th className="px-4 py-2 border-b"></th>
    //       </tr>
    //     </thead>
    //     <tbody className="h-24">
    //       <tr>
    //         <td className="px-4 py-2 bg-gray-200 border-b">Row 1 Col 1</td>
    //         <td className="px-4 py-2 bg-gray-200 border-b">0:01</td>
    //         <td className="px-4 py-2 bg-gray-200 border-b">
    //           <b>Lack of respect</b>
    //           <br />
    //           Tripping
    //         </td>
    //         <td className="px-4 py-2 bg-gray-200 border-b">Marsaxlokk</td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b">
    //           Yellow Card
    //         </td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b"></td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b">
    //           2
    //         </td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b">
    //           2.8
    //         </td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b">
    //           2
    //         </td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b">
    //           3
    //         </td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b">
    //           2
    //         </td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b">
    //           2
    //         </td>
    //         <td className="items-center px-4 py-2 text-center bg-gray-200 border-b">
    //           Plus Icon
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div className="flex">
      <div className="w-1/3">
        <MyMark />
      </div>
      <div className="w-1/3">
        <OffenderTable />
      </div>
      <div></div>
    </div>
  );
};

export default Container;
