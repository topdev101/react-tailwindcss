import React from "react";
import MyMark from "../components/UI/MyMark";
import OffenderTable from "../components/UI/OffenderTable";
import MarkTable from "../components/UI/MarkTable";

const Task1Container = () => {
  return (
    <div className="flex flex-col 2xl:flex-row">
      <div className="flex flex-col w-full lg:flex-row 2xl:w-2/3">
        <div className="w-full lg:w-1/2">
          <MyMark />
        </div>
        <div className="w-full lg:w-1/2">
          <OffenderTable />
        </div>
      </div>
      <div className="2xl:w-1/3">
        <MarkTable />
      </div>
    </div>
  );
};

export default Task1Container;
