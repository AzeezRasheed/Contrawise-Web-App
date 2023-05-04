import React, { FC } from "react";
import DashboardContractTable from "./DashboardContractTable";
import { AtRiskPanelProps } from "../../utilities/types";

const AtRiskPanel: FC<AtRiskPanelProps> = ({ atRiskData }) => {
  return (
    <>
      <DashboardContractTable userData={atRiskData} />
    </>
  );
};

export default AtRiskPanel;
