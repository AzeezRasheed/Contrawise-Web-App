import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../../layouts/DashboardLayout";
import Typography from "../../components/Typography";
import Stack from "../../components/Stack";
import Image from "next/image";
import Header from "../../components/Dashboard/Header";
import Footer from "../../components/Dashboard/Footer";
import data from "../../data/activitiesData";
import { GetShowContractsInfo } from "../../redux/contractSlice";
import Spinner from "../../components/Loader/Spinner";

const Card = styled.div`
  ${tw`
w-full
h-full
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
const Index: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const contracts = GetShowContractsInfo();
  console.log(contracts);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       setLoading(false);
  //       setContracts(data);
  //       console.log(data)
  //     } catch (error) {
  //       setLoading(false);
  //       // Handle the error appropriately
  //     }
  //   };

  //   fetchData();
  // }, []);
  // Create a copy of contracts array
  const contractsCopy = [...contracts];
  console.log(contracts);
  // Sort contracts by created_at in descending order
  const sortedContracts = contractsCopy.sort(
    (a: any, b: any) => new Date(b.created_at) - new Date(a.created_at)
  );
  console.log(sortedContracts);
  return (
    <Stack direction="row" className="h-screen">
      <Layout>
        <Wrapper>
          <div className="static flex w-full  ">
            <div className="w-full">
              <Header />
            </div>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="relative px-4  overflow-y-scroll">
              <Card>
                <Stack
                  direction="column"
                  alignItems="center"
                  className="p-3 gap-2 "
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
                    <div className=" w-[50px]  md:w-[130px]">
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
                      className="gap-10 flex-1 w-full max-w-[600px]  "
                    >
                      <Typography
                        as={"span"}
                        className="text-[#737588] leading-[14px] text-[9px] font-normal font-Inter"
                      >
                        Activity
                      </Typography>
                      <Typography
                        as={"span"}
                        className="text-[#737588] leading-[14px] text-[9px] font-normal font-Inter"
                      >
                        Time
                      </Typography>
                    </Stack>
                  </Stack>

                  {/* This is where we map all the values of the user coming from the backend */}
                  {/* user datas */}
                  {sortedContracts.map((contract, Index) => (
                    <Stack
                      key={Index}
                      direction="row"
                      justifyContent="spacebetween"
                      alignItems="center"
                      className="md:gap-28 gap-10 pr-8"
                    >
                      <div className="flex w-[130px] ">
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="start"
                          className="gap-2 "
                        >
                          {/* <Image
                            src={user.img}
                            alt="User"
                            className="w-8 h-8 rounded-full"
                          /> */}
                          <Typography
                            as={"span"}
                            variant="black"
                            className=" leading-[14px] text-[9px] font-normal font-Inter"
                          >
                            {contract?.user?.first_name}{" "}
                            {contract?.user?.last_name}
                          </Typography>
                        </Stack>
                      </div>

                      <Stack
                        direction="row"
                        justifyContent="spacebetween"
                        className="gap-10 flex-1 max-w-[620px] "
                      >
                        <Typography
                          as={"span"}
                          className="text-[#737588] leading-[14px] text-[9px] font-normal font-Inter"
                        >
                          created a contract
                        </Typography>
                        <Typography
                          as={"span"}
                          variant="black"
                          className=" leading-[14px] text-[9px] font-normal font-Inter"
                        >
                          {new Date(contract?.created_at).toLocaleTimeString(
                            [],
                            {
                              hour: "numeric",
                              minute: "numeric",
                              hour12: true,
                            }
                          )}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Card>
            </div>
          )}
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

export default Index;
