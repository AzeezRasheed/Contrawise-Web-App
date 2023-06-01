import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Stack from "../../../components/Stack";
import Layout from "../../../layouts/DashboardLayout";
import Header from "../../../components/Dashboard/Header";
import Footer from "../../../components/Dashboard/Footer";
import ContractForms from "../../../components/Dashboard/ContractForms";

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
  return (
    <Stack direction="row" className="h-screen">
      <Layout>
        <Wrapper>
          <div className="static flex w-full  ">
            <div className="w-full">
              <Header />
            </div>
          </div>
          <div className="relative  h-full overflow-y-scroll">
            <ContractForms />
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
