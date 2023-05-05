import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../../layouts/DashboardLayout";
import Stack from "../../components/Stack";
import Typography from "../../components/Typography";
import { FiFolder } from "react-icons/fi";
import Image from "next/image";
import DashboardContractTable from "../../components/Dashboard/DashboardContractTable";
import Dashboard from "../../components/Dashboard/Dashboard";
import data from "../../data/dashboardData";
import userData from "../../components/Dashboard/dummiedata";

const Boxs = styled.div`
  ${tw`
w-[232px]
h-[92px]
border 
border-solid
border-[#B165E9]
rounded-[12px]
items-center
justify-center
`}
`;

const Card = styled.div`
  ${tw`
w-full
h-full
max-w-[732px]
bg-main
rounded-[12px]
items-center
mb-6
`}
`;

interface BoxProp {
  label: string;
  color: string;
  number: number;
}
const Box: FC<BoxProp> = ({ label, color, number }) => (
  <Boxs
    style={{
      backgroundColor: color,
    }}
  >
    <div className="m-auto flex items-center text-center h-full justify-center">
      <Stack
        direction="column"
        justifyContent="spacebetween"
        alignItems="center"
        className="p-4 gap-6 text-center"
      >
        <Stack
          direction="row"
          justifyContent="spacebetween"
          alignItems="center"
        >
          <Typography
            as={"h4"}
            variant="bold"
            className="leading-[15px] text-[14px] font-bold font-Inter"
          >
            {label}
          </Typography>
          <span className="text-[#292D32]">
            <FiFolder size={28} />
          </span>
        </Stack>
        <Stack
          direction="row"
          justifyContent="spacebetween"
          alignItems="center"
        >
          <div></div>
          <Typography
            as={"h3"}
            variant="black"
            className="leading-[15px] text-[20px] font-bold font-Inter"
          >
            {number}
          </Typography>
        </Stack>
      </Stack>
    </div>
  </Boxs>
);
const Index: FC = () => {
  return (
    <Stack direction="row" className="h-screen">
      <Layout>
        <Dashboard>
          <Stack
            direction="column"
            alignItems="center"
            className="m-auto px-3 py-4"
          >
            <Stack
              direction="row"
              alignItems="center"
              className="flex-wrap gap-3 mb-4"
            >
              <Box label="Drafts" color="#E8E9F7" number={10} />
              <Box label="Executed" color="#D9DAF5" number={300} />
              <Box label="At Risk" color="#BCBDF5" number={500} />
              <Box label="Archive" color="#8E8FE1" number={500} />
            </Stack>
            <Card>
              <Stack
                direction="column"
                alignItems="center"
                className="p-3 gap-2"
              >
                {/* Activities --->>> Header */}
                <Stack
                  direction="row"
                  justifyContent="spacebetween"
                  alignItems="center"
                >
                  <Typography
                    as={"h3"}
                    variant="bold"
                    className="leading-[15px] text-[10px] font-bold font-Inter"
                  >
                    Activities
                  </Typography>
                  <div></div>
                </Stack>
                {/* by,activities,time -->>> Description */}

                <Stack
                  direction="row"
                  justifyContent="spacebetween"
                  alignItems="center"
                  className="gap-28 pl-2 pr-12 border-b border-solid border-b-[#ECECEC] "
                >
                  <div className="w-[90px]">
                    <Typography
                      as={"span"}
                      className="text-[#737588] leading-[14px] text-[9px] font-normal font-Inter"
                    >
                      By
                    </Typography>
                  </div>

                  <Stack
                    direction="row"
                    justifyContent="spacebetween"
                    className="gap-10 flex-1 "
                  >
                    <Typography
                      as={"span"}
                      className="text-[#737588] leading-[14px] text-[9px] font-normal font-Inter"
                    >
                      Activity
                    </Typography>
                  </Stack>
                  <Typography
                    as={"span"}
                    className="text-[#737588] leading-[14px] text-[9px] font-normal font-Inter"
                  >
                    Time
                  </Typography>
                </Stack>

                {/* This is where we map all the values of the user coming from the backend */}
                {/* user datas */}
                {data.map((user, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    justifyContent="spacebetween"
                    alignItems="center"
                    className="md:gap-28 gap-10 pr-8"
                  >
                    <div>
                      <Stack
                        direction="row"
                        alignItems="center"
                        className="gap-2"
                      >
                        <Image
                          src={user.img}
                          alt="User"
                          className="w-8 h-8 rounded-full"
                        />
                        <Typography
                          as={"span"}
                          variant="black"
                          className=" leading-[14px] text-[9px] font-normal font-Inter"
                        >
                          {user.name}
                        </Typography>
                      </Stack>
                    </div>

                    <Stack
                      direction="row"
                      justifyContent="spacebetween"
                      className="gap-10 flex-1 "
                    >
                      <Typography
                        as={"span"}
                        className="text-[#737588] leading-[14px] text-[9px] font-normal font-Inter"
                      >
                        {user.activity}
                      </Typography>
                      <Typography
                        as={"span"}
                        variant="black"
                        className=" leading-[14px] text-[9px] font-normal font-Inter"
                      >
                        {user.date}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Card>

            {/* Recent contracts table */}
            <Stack direction="column" alignItems="center" className="gap-3 ">
              <Stack
                direction="row"
                justifyContent="spacebetween"
                alignItems="center"
              >
                <Typography
                  as={"h3"}
                  variant="bold"
                  className=" leading-[15px] text-[11px]  font-bold font-Inter"
                >
                  Recent contracts
                </Typography>
                <div></div>
              </Stack>

              <DashboardContractTable userData={userData} />
            </Stack>
          </Stack>
        </Dashboard>
      </Layout>
    </Stack>
  );
};

export default Index;
