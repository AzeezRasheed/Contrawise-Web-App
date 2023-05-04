import React, { FC } from "react";
import DashboardContractTable from "./DashboardContractTable";
import { DraftPanelProps } from "../../utilities/types";

const DraftPanel: FC<DraftPanelProps> = ({ draftData }) => {
  return (
    <>
      <DashboardContractTable userData={draftData} />
    </>
  );
};

export default DraftPanel;
