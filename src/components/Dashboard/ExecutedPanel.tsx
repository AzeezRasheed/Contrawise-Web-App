import React, { FC } from "react";
import DashboardContractTable from "./DashboardContractTable";
import { ExecutedPanelProps } from "../../utilities/types";


const ExecutedPanel: FC<ExecutedPanelProps> = ({ executedData }) => {
  return (
    <>
      <DashboardContractTable userData={executedData} />
    </>
  );
};

export default ExecutedPanel;
