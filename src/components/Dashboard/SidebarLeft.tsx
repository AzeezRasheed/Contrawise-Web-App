import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Typography from "../Typography/";
import Logo from "../../assets/images/LogoWhite.png";
import Image from "next/image";
import Stack from "../Stack";
import Button from "../Button";
import { RxDashboard } from "react-icons/rx";
import { BsBarChart } from "react-icons/bs";
import { HiOutlineFolder } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import { useRouter } from "next/router";
import UserImg from "../../assets/images/UserImg.png";
import ModalLogout from "../Modal/ModalLogout";
import { SET_MODAL_OPEN, GetIsModalOpen } from "../../redux/modalSlice";
import { useDispatch } from "react-redux";
const Container = styled.div`
  ${tw`
  flex-none
  bg-primary
  h-screen
  w-[196px] 
  transition-all
  duration-500
  ease-in-out
  transform  
  top-0
  left-0
  overflow-x-hidden
  z-50
  absolute
  sm:relative
    `}
`;

const RoundedTriangle = styled.div`
  ${tw`
flex   w-[7px] h-[18px] rounded-[4px] 
    `}
`;

interface Props {
  isLeftMobileMenuOpen: boolean;
}
interface Button {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const SidebarLeft: React.FC<Props> = ({
  isLeftMobileMenuOpen,
  //   setIsLeftMobileMenuOpen,
}) => {
  const router = useRouter();

  const LinkButton: React.FC<Button> = ({ path, label, icon }) => (
    <Button
      ripple={true}
      onClick={() => {
        router.push(path);
      }}
      className={`w-[170px] `}
    >
      <Stack
        direction="row"
        justifyContent="spacebetween"
        alignItems="center"
        className={`gap-4 text-start py-2 px-2 rounded-[6px] ${
          router.pathname === path ? "bg-[#F2F3FC] " : "bg-none "
        } `}
      >
        <div>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="spacebetween"
            className={`gap-3 text-start  flex flex-1 `}
          >
            <div
              className={`${
                router.pathname === path ? "text-primary " : "text-[#8E8FE1] "
              }`}
            >
              {icon}
            </div>
            <Typography
              className={`text-[13px] font-Inter leading-[120%] font-normal ${
                router.pathname === path ? "text-primary " : "text-[#8E8FE1] "
              } `}
              as="h2"
            >
              {label}
            </Typography>
          </Stack>
        </div>

        <RoundedTriangle
          className={` ${
            router.pathname === path ? "bg-[#B165E9] " : "bg-none "
          } `}
        />
      </Stack>
    </Button>
  );

  const dispatch = useDispatch();

  return (
    <Container className={isLeftMobileMenuOpen ? "-translate-x-64" : ""}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="spacebetween"
        className="px-2 py-4 h-full "
      >
        <Stack direction="column" alignItems="center" className="gap-16 ">
          <Stack direction="row" alignItems="center" className="gap-2 ">
            <Image src={Logo} alt="ContraWatch" />
            <Typography
              variant="white"
              className="text-[16px] font-DmSans leading-[21px] font-bold  "
              as="h2"
            >
              ContraWatch
            </Typography>
          </Stack>
          <Stack direction="column" alignItems="center" className="gap-3">
            <LinkButton
              path="/dashboard"
              label="Dashboard"
              icon={<RxDashboard size={26} />}
            />
            <LinkButton
              path="/activities"
              label="Activities"
              icon={<BsBarChart size={26} />}
            />
            <LinkButton
              path={
                router.pathname === "/contracts/create"
                  ? "/contracts/create"
                  : router.pathname === "/contracts/info"
                  ? "/contracts/info"
                  : "/contracts"
              }
              label="Contracts"
              icon={<HiOutlineFolder size={26} />}
            />
          </Stack>
        </Stack>

        <Stack
          direction="column"
          justifyContent="spacebetween"
          className="gap-24"
        >
          <Stack direction="column" alignItems="center" className="gap-3">
            <LinkButton
              path="/settings"
              label="Settings"
              icon={<FiSettings size={26} className="text-[#8E8FE1]" />}
            />

            <Button
              ripple={true}
              onClick={() => {
                dispatch(SET_MODAL_OPEN(true));
              }}
              className={`w-[170px] `}
            >
              <Stack
                direction="row"
                justifyContent="spacebetween"
                alignItems="center"
                className={`gap-4 text-start py-2 px-2 rounded-[6px] bg-none
                } `}
              >
                <div>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="spacebetween"
                    className={`gap-3 text-start  flex flex-1 `}
                  >
                    <div>
                      <AiOutlineLogout size={26} className="text-[#8E8FE1]" />
                    </div>
                    <Typography
                      className={`text-[13px] font-Inter leading-[120%] font-normal text-[#8E8FE1]  `}
                      as="h2"
                    >
                      Logout
                    </Typography>
                  </Stack>
                </div>

                <RoundedTriangle />
              </Stack>
            </Button>
          </Stack>

          <Stack direction="row" alignItems="center" className="gap-3">
            <Image
              className="w-[48px] h-[48px] rounded-full "
              alt="User"
              src={UserImg}
            />
            <Typography
              className="text-[12px] w-full font-DmSans leading-[16px] font-bold text-[#FFFFFF]"
              as="h2"
            >
              Idoko Ichaba
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SidebarLeft;
