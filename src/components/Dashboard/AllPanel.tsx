import React, { FC } from "react";
import DashboardContractTable from "./DashboardContractTable";
import { AllPanelProps } from "../../utilities/types";

const AllPanel: FC<AllPanelProps> = ({ allData }) => {
  return (
    <>
      <DashboardContractTable userData={allData} />
    </>
  );
};

export default AllPanel;
