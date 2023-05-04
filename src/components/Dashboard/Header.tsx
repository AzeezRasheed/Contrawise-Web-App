import React from "react";
import SearchIcon from "../../assets/images/search-normal.svg";
import Image from "next/image";
import tw from "twin.macro";
import styled from "styled-components";
import Stack from "../Stack";
import Button from "../Button";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import Typography from "../Typography";
import { useRouter } from "next/router";

const Container = styled.header`
  ${tw`
py-3 px-4 border border-b border-[#ECECEC]
`}
`;
const FormInput = styled.input`
  ${tw`
md:w-[466px]
w-[300px]
placeholder:text-[10px]
placeholder:text-[#686C75]
placeholder:text-start
placeholder:font-Inter 
h-[44px]
border border-solid
border-[#B165E9]
rounded-[12px]
pl-[40px]
pr-[10px]
bg-[#F7F9FB]
`}
`;

function Header() {
  const router = useRouter();

  return (
    <Container>
      <div className="w-full items-start">
        <Stack
          direction="row"
          justifyContent="start"
          className="gap-6 flex-wrap"
        >
          {/* Form Inputs */}
          <div className="relative">
            <div className="relative">
              <FormInput
                type="text"
                placeholder="Search by names, parties, value, tags etc"
              />
              <Image
                src={SearchIcon}
                alt="icon"
                className="absolute left-3 top-3 w-5 h-5 text-gray-600 pointer-events-none"
              />
            </div>
          </div>

          {/* Button */}

          {router.pathname === "/contracts/create" ? (
            <div></div>
          ) : (
            <Button
              ripple={true}
              onClick={() => {
                router.push("/contracts/create");
                console.log("clicked");
              }}
              className={`w-full `}
            >
              <Stack
                direction="row"
                alignItems="center"
                className="gap-1 px-3 py-2 bg-[#112F82] rounded-[6px]"
              >
                <span className="text-white">
                  <HiOutlineFolderPlus size={26} />
                </span>

                <Typography
                  as="h3"
                  variant="white"
                  className="text-[12px] font-normal leading-[120%] font-Inter "
                >
                  Create new contract
                </Typography>
              </Stack>
            </Button>
          )}
        </Stack>
      </div>
    </Container>
  );
}

export default Header;
