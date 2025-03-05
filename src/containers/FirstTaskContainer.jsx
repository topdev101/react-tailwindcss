import React from "react";
import IncidentTable from "../components/UI/table/IncidentTable";
import OfficialAnswer from "../components/UI/OfficialAnswer";

const FirstTaskContainer = () => {
  return (
    <div>
      <div>
        <IncidentTable />
      </div>
      <div>
        <OfficialAnswer />
      </div>
      <div></div>
    </div>
  );
};

export default FirstTaskContainer;
