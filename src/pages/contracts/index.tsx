import React, { useEffect, useState } from "react";
import Stack from "../../components/Stack";
import Layout from "../../layouts/DashboardLayout";
import Header from "../../components/Dashboard/Header";
import Footer from "../../components/Dashboard/Footer";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import DraftPanel from "../../components/Dashboard/DraftPanel";
import ExecutedPanel from "../../components/Dashboard/ExecutedPanel";
import ArchievePanel from "../../components/Dashboard/ArchievePanel";
import AtRiskPanel from "../../components/Dashboard/AtRiskPanel";
import AllPanel from "../../components/Dashboard/AllPanel";
import {
  GetShowArchivedInfo,
  GetShowAtRiskInfo,
  GetShowContractsInfo,
  GetShowDraftInfo,
  GetShowExecutedInfo,
} from "../../redux/contractSlice";

const Wrapper = styled.div`
  ${tw`
bg-white
flex
h-full
w-full
relative
flex-1
flex-col
`}
`;

function Index() {
  const [activeTab, setActiveTab] = useState("all");

  const contracts = GetShowContractsInfo();

  // i already sorted out the contracts based on their class and stored them in redux store
  const draft = GetShowDraftInfo();
  const executed = GetShowExecutedInfo();
  const at_risk = GetShowAtRiskInfo();
  const archived = GetShowArchivedInfo();

  const tabs = [
    { id: "all", label: "All" },
    { id: "draft", label: "Draft" },
    { id: "executed", label: "Executed" },
    { id: "archive", label: "Archive" },
    { id: "at-risk", label: "At Risk" },
  ];
  console.log(activeTab);

  const renderTabs = () => {
    return tabs.map((tab) => (
      <Button
        key={tab.id}
        className="flex flex-column items-center gap-2 "
        onClick={() => {
          setActiveTab(tab.id);
        }}
      >
        <Stack direction="column" alignItems="center">
          <Stack direction="row" className="gap-2">
            <Typography
              className={`text-[${
                activeTab === tab.id ? "#22237F" : "#808091"
              }] font-Inter font-normal text-[14px] leading-[7px]`}
            >
              {tab.label}
            </Typography>
            <Typography
              className={`text-[${
                activeTab === tab.id ? "#22237F" : "#808091"
              }] font-Inter font-normal text-[14px] leading-[7px]`}
            >
              {tab.label === "All" && `(${contracts.length})`}
              {tab.label === "Executed" && `(${executed.length})`}
              {tab.label === "Draft" && `(${draft.length})`}
              {tab.label === "Archive" && `(${archived.length})`}
              {tab.label === "At Risk" && `(${at_risk.length})`}
            </Typography>
          </Stack>
          {activeTab === tab.id ? (
            <div className="bg-[#B165E9] w-full h-[5px] rounded-[4px] "></div>
          ) : (
            <div></div>
          )}
        </Stack>
      </Button>
    ));
  };

  // Sort contract by created_at in descending order
  const sortedContracts = [...contracts].sort(
    (a: any, b: any) => new Date(b.created_at) - new Date(a.created_at)
  );

  // Sort draft by created_at in descending order
  const sortedDraft = [...draft].sort(
    (a: any, b: any) => new Date(b.created_at) - new Date(a.created_at)
  );

  // Sort executed by created_at in descending order
  const sortedExecuted = [...executed].sort(
    (a: any, b: any) => new Date(b.created_at) - new Date(a.created_at)
  );

  // Sort at_risk by created_at in descending order
  const sortedAtRisk = [...at_risk].sort(
    (a: any, b: any) => new Date(b.created_at) - new Date(a.created_at)
  );

  // Sort archived by created_at in descending order
  const sortedArchived = [...archived].sort(
    (a: any, b: any) => new Date(b.created_at) - new Date(a.created_at)
  );

  const renderPanel = () => {
    switch (activeTab) {
      case "draft":
        return <DraftPanel draftData={sortedDraft} />;
      case "executed":
        return <ExecutedPanel executedData={sortedExecuted} />;
      case "archive":
        return <ArchievePanel archiveData={sortedArchived} />;
      case "at-risk":
        return <AtRiskPanel atRiskData={sortedAtRisk} />;
      default:
        return <AllPanel allData={sortedContracts} />;
    }
  };
  return (
    <Stack direction="row" className="h-screen">
      <Layout>
        <Wrapper>
          <div className="static flex w-full  ">
            <div className="w-full">
              <Header />
            </div>
          </div>
          <div className="relative  h-full overflow-y-scroll  w-full p-10 ">
            <Stack direction="column" alignItems="start" className="gap-10">
              <Stack
                direction="row"
                justifyContent="spacebetween"
                className="gap-10 width-full flex-wrap  "
              >
                {renderTabs()}
              </Stack>
              {renderPanel()}
            </Stack>
          </div>
          <div className="static flex w-full  ">
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </Wrapper>
      </Layout>
    </Stack>
  );
}

export default Index;
