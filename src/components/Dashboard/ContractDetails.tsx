import React, { FC, useEffect, useState } from "react";
import Stack from "../Stack";
import { splitedAlphabet } from "../../helper";
import Typography from "../Typography";
import { GetShowContractInfo } from "../../redux/contractSlice";
import moment from "moment";
import { useRouter } from "next/router";
import { GET_CONTRACT } from "../../services/contractServices";

interface PartyProps {
  label: string;
  index: number;
}

interface CommentProps {
  title: string;
  label: string;
}

interface TheRestProps {
  title: string;
  label: string;
}

// interface ContractInfoProps {
//   ContractInfo: {
//     parties?: string[];
//   };
// }

const ContractInfo = (props: any) => {
  const { contract } = props;
  const [data, setData] = useState(null);
  const Party: FC<PartyProps> = ({ index, label }) => {
    return (
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        className="text-center gap-2"
      >
        <Typography
          as={"h3"}
          className="text-[#202020] font-Poppins text-[20px] leading-[24px] tracking-[0.1px] text-center font-normal"
        >
          Party {splitedAlphabet[index]}:
        </Typography>
        <Typography
          as={"span"}
          className="text-[#02020E] font-Poppins text-[20px] leading-[120%] tracking-[0.1px] text-center font-light "
        >
          {label}
        </Typography>
      </Stack>
    );
  };

  // console.log(upload);

  const CommentFN: FC<CommentProps> = ({ title, label }) => {
    return (
      <Stack
        direction="column"
        justifyContent="start"
        alignItems="start"
        className="text-center gap-2"
      >
        <Typography
          as={"h3"}
          className="text-[#202020] font-Poppins text-[20px] leading-[24px] tracking-[0.1px] text-center font-normal"
        >
          {title}
        </Typography>
        <Typography
          as={"span"}
          className="text-[#02020E] font-Poppins text-[20px] leading-[120%] tracking-[0.1px] text-center font-light "
        >
          {label}
        </Typography>
      </Stack>
    );
  };

  const TheRest: FC<TheRestProps> = ({ title, label }) => {
    return (
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
        className="text-center gap-2  "
      >
        <Typography
          as={"h3"}
          className="text-[#202020] font-Poppins text-[20px] leading-[24px] tracking-[0.1px] text-center font-normal"
        >
          {title}
        </Typography>
        <Typography
          as={"span"}
          className="text-[#02020E] font-Poppins text-[20px] leading-[120%] tracking-[0.1px] text-center font-light "
        >
          {label}
        </Typography>
      </Stack>
    );
  };

  const formatedDate = (date: any) => {
    const formatedDate = moment(date).format("MMMM Do YYYY");
    return formatedDate;
  };

  return (
    <>
      {contract.map((contractItem: any, index: number) => (
        <div key={index}>
          <Stack
            direction="column"
            justifyContent="start"
            alignItems="start"
            className="gap-4 text-start"
          >
            {contractItem?.parties?.map(
              (value: { name: string }, partyIndex: number) => (
                <div key={partyIndex}>
                  <Party index={partyIndex} label={` ${value?.name}`} />
                </div>
              )
            )}

            <TheRest title="Contract Class:" label={contractItem?.class} />

            <TheRest
              title="Agreement Date:"
              label={formatedDate(new Date(contractItem?.agreement_date))}
            />
            <TheRest
              title="Contract Duration:"
              label={`${formatedDate(
                new Date(contractItem?.agreement_date)
              )} - ${formatedDate(new Date(contractItem?.termination_date))}`}
            />
            <TheRest
              title="Notice Period:"
              label={formatedDate(new Date(contractItem?.notice_date))}
            />
            <TheRest title="Amount:" label={`$${contractItem?.amount}`} />
            {/* <TheRest
            title="Attached Files:"
            label={`${contractItem?.upload?.length} files`}
          /> */}
            <CommentFN
              title="comment:"
              label={contractItem?.comments[0]?.content}
            />
          </Stack>
        </div>
      ))}
    </>
  );
};

export default ContractInfo;
