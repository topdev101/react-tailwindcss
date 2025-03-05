import React from "react";
import IncidentTable from "../components/UI/table/IncidentTable";
import OfficialAnswer from "../components/UI/OfficialAnswer";
import OfficialTable from "../components/UI/table/OfficialTable";

const FirstTaskContainer = () => {
  return (
    <div className="flex flex-col">
      <div>
        <IncidentTable />
      </div>
      <div className="flex lg:flex-row flex-col bg-[#d2e7d6] m-2">
        <div className="w-full lg:w-1/2">
          <OfficialAnswer />
        </div>
        <div className="w-full lg:w-1/2">
          <OfficialTable />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FirstTaskContainer;
