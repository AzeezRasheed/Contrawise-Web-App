import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Stack from "../Stack";
import Typography from "../Typography";

const Container = styled.footer`
  ${tw`
  py-3 px-4  bg-white 
`}
`;
const Links = styled.ul`
  ${tw`
[text-decoration: none]
flex
gap-4
`}
`;

const IndividualLink = styled.li`
  ${tw`
[text-decoration: none]
font-normal
text-[12px]
leading-[18px]
font-Inter
text-black text-opacity-40 
hover:text-opacity-100
cursor-pointer
`}
`;

function Footer() {
  return (
      <Container>
        <Stack
          direction="row"
          justifyContent="spacebetween"
          alignItems="center"
        >
          <div className="">
            <Stack direction="row" className="gap-2">
              <span className="font-normal text-[12px] text-black text-opacity-40 leading-[18px] ">
                © {new Date().getFullYear()}
              </span>
              <Typography
                as="h2"
                className="font-normal text-[12px] text-black text-opacity-40 leading-[18px] "
              >
                ContraWatch
              </Typography>
            </Stack>
          </div>

          <div className="">
            <Links>
              <IndividualLink>About</IndividualLink>
              <IndividualLink>Support</IndividualLink>
              <IndividualLink>Contact Us</IndividualLink>
            </Links>
          </div>
        </Stack>
      </Container>
  );
}

export default Footer;
