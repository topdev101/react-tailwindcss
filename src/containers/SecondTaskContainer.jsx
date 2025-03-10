import React from "react";
import MyMark from "../components/UI/MyMark";
import OffenderTable from "../components/UI/OffenderTable";
import MarkTable from "../components/UI/MarkTable";

const SecondTaskContainer = () => {
  return (
    <div className="flex flex-col 2xl:flex-row">
      <div className="flex flex-col w-full bg-green-100 lg:flex-row 2xl:w-2/3 h-[800px]">
        <div className="w-full lg:w-1/2">
          <MyMark />
        </div>
        <div className="w-full lg:w-1/2">
          <OffenderTable />
        </div>
      </div>
      <div className="bg-green-100 2xl:w-1/3">
        <MarkTable />
      </div>
    </div>
  );
};

export default SecondTaskContainer;
