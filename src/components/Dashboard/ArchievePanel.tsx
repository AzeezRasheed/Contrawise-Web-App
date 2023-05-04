import React, { FC } from "react";
import DashboardContractTable from "./DashboardContractTable";
import { ArchivePanelProps } from "../../utilities/types";

const ArchievePanel: FC<ArchivePanelProps> = ({ archiveData }) => {
  return (
    <>
      <DashboardContractTable userData={archiveData} />
    </>
  );
};

export default ArchievePanel;
