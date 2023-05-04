import React, { useState } from "react";
import Stack from "../../components/Stack";
import Layout from "../../layouts/DashboardLayout";
import Header from "../../components/Dashboard/Header";
import Image from "next/image";
import Footer from "../../components/Dashboard/Footer";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import AllData from "./allData";
import DraftsData from "./draftData";
import ExecutedData from "./executedData";
import AtRiskData from "./atRiskData";
import ArchiveData from "./archiveData";
import DraftPanel from "../../components/Dashboard/DraftPanel";
import ExecutedPanel from "../../components/Dashboard/ExecutedPanel";
import ArchievePanel from "../../components/Dashboard/ArchievePanel";
import AtRiskPanel from "../../components/Dashboard/AtRiskPanel";
import AllPanel from "../../components/Dashboard/AllPanel";

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

function index() {
  const [activeTab, setActiveTab] = useState("all");

  const allData = AllData;
  const draftsData = DraftsData;
  const executedData = ExecutedData;
  const atRiskData = AtRiskData;
  const archiveData = ArchiveData;

  // interface TabProps {
  //   id: string;
  // }

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
              {tab.label === "All" && `(${allData.length})`}
              {tab.label === "Executed" && `(${executedData.length})`}
              {tab.label === "Draft" && `(${draftsData.length})`}
              {tab.label === "Archive" && `(${archiveData.length})`}
              {tab.label === "At Risk" && `(${atRiskData.length})`}
            </Typography>
          </Stack>
          {activeTab === tab.id ? <div className="bg-[#B165E9] w-full h-[5px] rounded-[4px] "></div> : <div></div>}
        </Stack>
      </Button>
    ));
  };

  const renderPanel = () => {
    switch (activeTab) {
      case "draft":
        return <DraftPanel draftData={draftsData} />;
      case "executed":
        return <ExecutedPanel executedData={executedData} />;
      case "archive":
        return <ArchievePanel archiveData={archiveData} />;
      case "at-risk":
        return <AtRiskPanel atRiskData={atRiskData} />;
      default:
        return <AllPanel allData={allData} />;
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

export default index;
