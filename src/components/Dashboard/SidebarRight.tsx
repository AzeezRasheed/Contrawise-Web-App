import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Stack from "../Stack";
import { BsBell } from "react-icons/bs";
import GreenBell from "../../assets/images/GreenBell.png";
import RedBell from "../../assets/images/RedBell.png";

import Typography from "../Typography/";
import Image from "next/image";
const Container = styled.div`
  ${tw`
  flex-none
  bg-white
  h-screen
  w-full
  // max-w-[216px]
  border
  border-solid
  border-[#ECECEC]
  transition-all
  duration-500
  ease-in-out
  transform  
  top-0
  right-0
  overflow-x-hidden
  z-50
  relative
    `}
`;

interface NotificationFC {
  time: string;
  label: string;
  icon: string;
}
const SidebarRight = (
  {
    //   setIsLeftMobileMenuOpen,
  }
) => {
  const Notification: React.FC<NotificationFC> = ({ time, label, icon }) => (
    <Stack
      direction="row"
      justifyContent="spacebetween"
      alignItems="center"
      className="gap-10"
    >
      <Stack
        direction="row"
        alignItems="center"
        className="gap-3 flex-1 l text-start"
      >
        <div>
          {icon === "red" ? (
            <Image
              src={RedBell}
              alt="Contract Expiring"
              className="w-[24px] h-[24px]  "
            />
          ) : (
            <Image
              src={GreenBell}
              alt="Request to edit"
              className="w-[24px] h-[24px]  "
            />
          )}
        </div>
        <Typography
          className={`text-[8px] font-Inter  font-normal text-[#1C1C1C] `}
          as="h2"
        >
          {label}
        </Typography>
      </Stack>

      <div className="w-[35px]">
        <Typography
          className={`text-[8px] font-Inter font-normal text-[#999999] `}
          as="h2"
        >
          {time}
        </Typography>
      </div>
    </Stack>
  );
  return (
    <Container>
      <Stack
        direction="column"
        alignItems="center"
        className="gap-10 px-2 py-6"
      >
        <Stack
          direction="row"
          justifyContent="spacebetween"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" className="gap-3 flex-1">
            <BsBell size={28} />
            <Typography
              as="h2"
              variant="bold"
              className="text-[10px] font-Inter leading-[15px] font-semibold  "
            >
              Notifications
            </Typography>
          </Stack>

          <div className="w-full"></div>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          className="gap-3 flex m-auto "
        >
          <Notification label="Contract Expiring" time="Just now" icon="red" />
          <Notification
            label="Request to edit..."
            time="Just now"
            icon="green"
          />
          <Notification label="Contract Expiring" time="Just now" icon="red" />
          <Notification
            label="Request to edit..."
            time="Just now"
            icon="green"
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default SidebarRight;
