import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "./Header";
import Footer from "./Footer";

const DashboardContainer = styled.main`
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

interface DashboardProps {
  children: React.ReactNode;
}

const Layout: React.FC<DashboardProps> = ({ children }) => {
  return (
    <DashboardContainer>
      {/* Dashboard */}
      <div className="static flex w-full  ">
        <div className="w-full">
          <Header />
        </div>
      </div>
      <div className="relative overflow-y-scroll">{children}</div>
      <div className="static flex w-full  ">
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Layout;
