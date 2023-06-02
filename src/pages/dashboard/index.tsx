import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Layout from "../../layouts/DashboardLayout";
import Stack from "../../components/Stack";
import Typography from "../../components/Typography";
import { FiFolder } from "react-icons/fi";
import DashboardContractTable from "../../components/Dashboard/DashboardContractTable";
import Dashboard from "../../components/Dashboard/Dashboard";
import PieChart from "../../components/Dashboard/PieChart";
import { useDispatch } from "react-redux";
import { GET_CONTRACTS } from "../../services/contractServices";
import {
  GetShowArchivedInfo,
  GetShowAtRiskInfo,
  GetShowContractsInfo,
  GetShowDraftInfo,
  GetShowExecutedInfo,
  SET_ARCHIVED,
  SET_AT_RISK,
  SET_CONTRACTS,
  SET_DRAFT,
  SET_EXECUTED,
} from "../../redux/contractSlice";
import Spinner from "../../components/Loader/Spinner";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useRouter } from "next/router";

const Boxs = styled.div`
  ${tw`
w-full
md:w-[232px]
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
bg-main
flex-1
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
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useLocalStorage("token", "", true);

  // useEffect(() => {
  //   if (!token) {
  //     router.push("/");
  //   }
  // }, [token]);

  // const user_name = useLocalStorage("user_name", "", true);
  const [isLoading, setLoading] = useState(false);
  const contracts = GetShowContractsInfo();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await GET_CONTRACTS();
        if (data) {
          setLoading(false);
          dispatch(SET_CONTRACTS(data));
        }
      } catch (error) {
        setLoading(false);
        // Handle the error appropriately
      }
    };

    fetchData();
  }, [dispatch]);

  // Filter for draft
  useEffect(() => {
    const filteredCollection = contracts.filter(
      (contract: any) =>
        contract?.class &&
        contract.class.toLowerCase().includes("draft".toLowerCase())
    );
    dispatch(SET_DRAFT(filteredCollection));
  }, [contracts, dispatch]);

  // Filter for executed
  useEffect(() => {
    const filteredCollection = contracts.filter(
      (contract: any) =>
        contract?.class &&
        contract.class.toLowerCase().includes("executed".toLowerCase())
    );
    dispatch(SET_EXECUTED(filteredCollection));
  }, [contracts, dispatch]);

  // Filter for at_risk
  useEffect(() => {
    const filteredCollection = contracts.filter(
      (contract: any) =>
        contract?.class &&
        contract.class.toLowerCase().includes("at-risk".toLowerCase())
    );
    dispatch(SET_AT_RISK(filteredCollection));
  }, [contracts, dispatch]);

  // Filter for archived
  useEffect(() => {
    const filteredCollection = contracts.filter(
      (contract: any) =>
        contract?.class &&
        contract.class.toLowerCase().includes("archived".toLowerCase())
    );
    dispatch(SET_ARCHIVED(filteredCollection));
  }, [contracts, dispatch]);

  const draft = GetShowDraftInfo();
  const executed = GetShowExecutedInfo();
  const at_risk = GetShowAtRiskInfo();
  const archived = GetShowArchivedInfo();

  // Create a copy of contracts array
  const contractsCopy = [...contracts];

  // Sort contracts by created_at in descending order
  const sortedContracts = contractsCopy.sort(
    (a: any, b: any) => new Date(b.created_at) - new Date(a.created_at)
  );

  // Get the first ten contracts
  const firstTenContracts = sortedContracts.slice(0, 19);

  return (
    <Stack direction="row" className="h-screen">
      <Layout>
        <Dashboard>
          {isLoading ? (
            <Spinner />
          ) : (
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              className="m-auto px-3 py-4"
            >
              <Stack
                direction="row"
                alignItems="center"
                className="flex-wrap justify-between   gap-3 mb-4"
              >
                <Box label="Drafts" color="#E8E9F7" number={draft.length} />
                <Box
                  label="Executed"
                  color="#D9DAF5"
                  number={executed.length}
                />
                <Box label="At Risk" color="#BCBDF5" number={at_risk.length} />
                <Box label="Archive" color="#8E8FE1" number={archived.length} />
              </Stack>

              {/* Pie Chart */}
              <Stack
                direction="row"
                alignItems="baseline"
                justifyContent="center"
                className="flex flex-wrap gap-10 m-auto   "
              >
                <div className="  bg-main rounded-[12px] items-center px-4 py-3 gap-2 ">
                  <Typography
                    as={"h3"}
                    variant="bold"
                    className="leading-[15px] text-[10px] font-bold font-Inter"
                  >
                    Project Status
                  </Typography>
                  <PieChart />
                </div>
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
                        className="gap-10 flex-1 w-full "
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
                    {firstTenContracts.map((contract, index) => (
                      <Stack
                        key={index}
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
                          className="gap-10 flex-1  "
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
              </Stack>

              {/* Recent contracts table */}
              <Stack
                direction="column"
                alignItems="center"
                className="gap-3 mt-4 "
              >
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

                <DashboardContractTable userData={firstTenContracts} />
              </Stack>
            </Stack>
          )}
        </Dashboard>
      </Layout>
    </Stack>
  );
};

export default Index;
