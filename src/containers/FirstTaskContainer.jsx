import React from "react";
import IncidentTable from "../components/UI/table/IncidentTable";
import OfficialAnswer from "../components/UI/OfficialAnswer";
import OfficialTable from "../components/UI/table/OfficialTable";
import LearningPointTable from "../components/UI/table/LearningPointTable";
import RefereeTable from "../components/UI/table/RefereeTable";
import IncidentScreen from "../components/UI/IncidentScreen";

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
      <div>
        <IncidentScreen />
      </div>
      <div>
        <LearningPointTable />
        <RefereeTable />
      </div>
    </div>
  );
};

export default FirstTaskContainer;
