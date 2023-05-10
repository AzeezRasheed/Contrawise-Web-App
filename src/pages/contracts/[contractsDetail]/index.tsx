import React, { FC } from "react";
import Header from "../../../components/Dashboard/Header";
import Footer from "../../../components/Dashboard/Footer";
import Stack from "../../../components/Stack";
import Layout from "../../../layouts/DashboardLayout";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../../../assets/images/Logo.svg";
import Image from "next/image";
import ContractDetails from "../../../components/Dashboard/ContractDetails";
import Typography from "../../../components/Typography";
import { BsArrowDown, BsBookmarkCheck } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { GetShowContractInfo } from "../../../redux/contractSlice";

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

interface Props {
  label: string;
  icon: React.ReactNode;
}

const Buttons: FC<Props> = ({ label, icon, onClick }) => (
  <button type="submit" onClick={onClick}>
    <Stack
      direction="row"
      alignItems="center"
      className="gap-1 px-4 py-3 bg-[#112F82] border border-solid border-[B165E9] rounded-[6px]"
    >
      <Typography
        as="h3"
        variant="white"
        className="text-[10px] font-normal  font-Inter "
      >
        {label}
      </Typography>
      <span className="text-white">{icon}</span>
    </Stack>
  </button>
);
function Index() {
  const router = useRouter();
  const contractInfo = GetShowContractInfo();
  console.log(contractInfo);
  return (
    <Stack direction="row" className="h-screen">
      <Layout>
        <Wrapper>
          <div className="static flex w-full  ">
            <div className="w-full">
              <Header />
            </div>
          </div>
          <div className="relative  h-full overflow-y-scroll bg-white shadow-2xl w-full max-w-[841px] p-10 ml-4">
            <Stack direction="column" alignItems="start" className="gap-14">
              <Image
                src={Logo}
                alt="ContraWatch"
                className="w-[209.61px] h-[38px] "
              />
              <ContractDetails />
              <div className="w-full  flex flex-row items-center gap-3 flex-wrap ">
                <Buttons label="Download" icon={<BsArrowDown />} />
                <Buttons
                  label="Edit"
                  icon={<BiEditAlt />}
                  onClick={() => {
                    router.push("/contracts/edit");
                  }}
                />
                <Buttons label="Archive" icon={<BsBookmarkCheck />} />
              </div>
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
