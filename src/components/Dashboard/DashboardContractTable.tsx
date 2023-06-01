import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Stack from "../Stack";
import { IoDocumentTextOutline } from "react-icons/io5";
import Typography from "../Typography";
import Image from "next/image";
import { ContractTableProps } from "../../utilities/types";
import { GetShowContractsInfo } from "../../redux/contractSlice";
const Table = styled.table`
  ${tw`
  w-full text-sm   min-w-full ml-0
`}
`;

const TableRow = styled.tr`
  ${tw`
  bg-[#F7F9FB] items-center w-full m-auto flex rounded-[12px] 
`}
`;

const TableCell = styled.th`
  ${tw`
px-6 py-3 items-start  m-auto flex 
`}
`;

const DashboardContractTable: FC<ContractTableProps> = ({ userData }) => {
  const colors = ["#B165E9", "#112F82", "#F074A8"];

  return (
    <Stack
      direction="column"
      className="gap-1 mb-4 overflow-x-auto lg:w-full relative align-middle "
    >
      {userData.length > 1 && (
        <>
          {userData.map((data, i) => {
            // const numOverflow = data?.img.length - 3;

            return (
              <Table key={i}>
                <thead>
                  <TableRow>
                    <TableCell>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="start"
                        className="gap-2 text-start w-[165px]"
                      >
                        <span className="text-[#B5C6D0]">
                          <IoDocumentTextOutline size={30} />
                        </span>
                        <Typography
                          as={"h3"}
                          variant="black"
                          className="text-center leading-[14px] text-[11px] font-normal font-DmSans   "
                        >
                          {data?.title}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack
                        direction="column"
                        alignItems="center"
                        className="gap-2"
                      >
                        <Stack
                          direction="column"
                          alignItems="start"
                          className="gap-1 text-start"
                        >
                          <Typography
                            as={"h3"}
                            variant="black"
                            className="text-center leading-[14px] text-[11px] font-normal font-DmSans   "
                          >
                            {data?.parties[0]?.name}
                          </Typography>
                          <Typography
                            as={"span"}
                            className="text-center text-[#737588] leading-[13px] text-[10px] font-normal font-DmSans   "
                          >
                            {data?.user?.first_name}
                            {""} {data?.user?.last_name}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="column"
                          alignItems="start"
                          className="gap-1 text-start"
                        >
                          <Typography
                            as={"h3"}
                            variant="black"
                            className="text-center leading-[14px] text-[11px] font-normal font-DmSans   "
                          >
                            {data?.parties[1]?.name}
                          </Typography>
                          <Typography
                            as={"span"}
                            className="text-center text-[#737588] leading-[13px] text-[10px] font-normal font-DmSans   "
                          >
                            {data?.user?.first_name}
                            {""} {data?.user?.last_name}
                          </Typography>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack
                        direction="column"
                        alignItems="center"
                        className="gap-2"
                      >
                        <Stack
                          direction="column"
                          alignItems="start"
                          className="gap-1 text-start"
                        >
                          <Typography
                            as={"span"}
                            className="text-center text-[#737588] leading-[13px] text-[10px] font-normal font-DmSans   "
                          >
                            Created
                          </Typography>
                          <Typography
                            as={"h3"}
                            variant="black"
                            className="text-center leading-[14px] text-[11px] font-normal font-DmSans   "
                          >
                            {new Date(data?.created_at).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="column"
                          alignItems="start"
                          className="gap-1 text-start"
                        >
                          <Typography
                            as={"span"}
                            className="text-center text-[#737588] leading-[13px] text-[10px] font-normal font-DmSans   "
                          >
                            Owner
                          </Typography>
                          <Typography
                            as={"h3"}
                            variant="black"
                            className="text-center leading-[14px] text-[11px] font-normal font-DmSans   "
                          >
                            {data?.user?.first_name}
                            {""} {data?.user?.last_name}
                          </Typography>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack
                        direction="row"
                        alignItems="center"
                        className="gap-3 flex m-auto"
                      >
                        <Stack
                          direction="column"
                          alignItems="center"
                          className="gap-2 flex-1"
                        >
                          <Typography
                            as={"span"}
                            className="text-center text-[#737588] leading-[13px] text-[10px] font-normal font-DmSans   "
                          >
                            Shared with
                          </Typography>
                          <div className="flex -space-x-4 ">
                            {/* {data?.img.slice(0, 3).map((item, index) => (
                              <div key={index}>
                                {item.imageUrl ? (
                                  <>
                                    <Image
                                      src={item.imageUrl}
                                      alt="user"
                                      className="  rounded-full   w-10 h-10 border-2  border-white "
                                    />
                                  </>
                                ) : (
                                  <>
                                    <Typography
                                      className={`flex items-center justify-center w-10 h-10 text-[12px] leading-[16px] font-medium text-white bg-[${
                                        colors[
                                          Math.floor(
                                            Math.random() * colors.length
                                          )
                                        ]
                                      }] border-2  border-white rounded-full`}
                                    >
                                      {data?.username1.split("")[0]}
                                    </Typography>
                                  </>
                                )}
                              </div>
                            ))} */}
                          </div>
                          <div>nil</div>
                        </Stack>
                        {/* {numOverflow > 0 ? (
                      <Typography
                        as={"span"}
                        className="text-center text-[#737588] leading-[16px] text-[12px] font-normal font-DmSans   "
                      >
                        +{numOverflow}
                      </Typography>
                    ) : (
                      <div></div>
                    )} */}
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography
                        as={"span"}
                        className="text-center text-[#737588] leading-[13px] text-[10px] font-normal font-DmSans   "
                      >
                        {data?.class}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </thead>
              </Table>
            );
          })}
        </>
      )}
    </Stack>
  );
};

export default DashboardContractTable;
