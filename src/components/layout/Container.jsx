import React from "react";
import MyMark from "../components/MyMark";

const Container = () => {
  return (
    // <div className="overflow-x-auto">
    //   <table className="min-w-full bg-white">
    //     <thead className="bg-green-600 text-white">
    //       <tr>
    //         <th className="py-2 px-4 border-b w-24">Minute</th>
    //         <th className="py-2 px-4 border-b w-24">Time</th>
    //         <th className="py-2 px-4 border-b w-[600px] text-left">
    //           Topic <br />
    //           subtopic
    //         </th>
    //         <th className="py-2 px-4 border-b w-[300px] text-left">Offender</th>
    //         <th className="py-2 px-4 border-b">Decision by referee</th>
    //         <th className="py-2 px-4 border-b">Official mark</th>
    //         <th className="py-2 px-4 border-b">My mark</th>
    //         <th className="py-2 px-4 border-b">Community mark</th>
    //         <th className="py-2 px-4 border-b">A.B.</th>
    //         <th className="py-2 px-4 border-b">D.A</th>
    //         <th className="py-2 px-4 border-b">P.C.</th>
    //         <th className="py-2 px-4 border-b">P.G</th>
    //         <th className="py-2 px-4 border-b"></th>
    //       </tr>
    //     </thead>
    //     <tbody className="h-24">
    //       <tr>
    //         <td className="py-2 px-4 border-b bg-gray-200">Row 1 Col 1</td>
    //         <td className="py-2 px-4 border-b bg-gray-200">0:01</td>
    //         <td className="py-2 px-4 border-b bg-gray-200">
    //           <b>Lack of respect</b>
    //           <br />
    //           Tripping
    //         </td>
    //         <td className="py-2 px-4 border-b bg-gray-200">Marsaxlokk</td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center">
    //           Yellow Card
    //         </td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center"></td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center">
    //           2
    //         </td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center">
    //           2.8
    //         </td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center">
    //           2
    //         </td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center">
    //           3
    //         </td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center">
    //           2
    //         </td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center">
    //           2
    //         </td>
    //         <td className="py-2 px-4 border-b bg-gray-200 items-center text-center">
    //           Plus Icon
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
    <div>
      <div className="w-1/3">
        <MyMark />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Container;
