import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../../layouts/DashboardLayout";
import Typography from "../../components/Typography";
import Stack from "../../components/Stack";
import Image from "next/image";
import Header from "../../components/Dashboard/Header";
import Footer from "../../components/Dashboard/Footer";
import data from "../../data/activitiesData";

const Card = styled.div`
  ${tw`
w-full
h-full
// max-w-[1024px]
bg-main
rounded-[12px]
items-center
mb-6
mt-4

`}
`;

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
const index: FC = () => {
  return (
    <Stack direction="row" className="h-screen">
      <Layout>
        <Wrapper>
          <div className="static flex w-full  ">
            <div className="w-full">
              <Header />
            </div>
          </div>
          <div className="relative px-4 h-full overflow-y-scroll">
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
                    className="gap-12 flex-1 "
                  >
                    <Typography
                      as={"span"}
                      className="text-[#737588] leading-[14px] text-[9px] ml-2 font-normal font-Inter"
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
                    className="gap-28 pr-8"
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
                      className="gap-10 flex-1 text-right  "
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
};

export default index;
