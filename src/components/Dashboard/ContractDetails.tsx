import React, { FC } from "react";
import Stack from "../Stack";
import { splitedAlphabet } from "../../helper";
import Typography from "../Typography";
import { GetShowContractInfo } from "../../redux/contractSlice";
import moment from "moment";

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

const ContractInfo = () => {
  const ContractInfo = GetShowContractInfo();

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

  // console.log(AttachedFiles);

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
  const agreementDate = ContractInfo.agreementDate;
  const contractDuration = ContractInfo.contractDuration;
  const noticePeriod = ContractInfo.noticePeriod;

  const formatedDate = (datee: any) => {
    const formatedDate = moment(datee).format("MMMM Do YYYY");
    return formatedDate;
  };

  return (
    <Stack
      direction="column"
      justifyContent="start"
      alignItems="start"
      className="gap-4 text-start "
    >
      {ContractInfo &&
        ContractInfo?.parties?.map((value: string, index: number) => (
          <div key={index}>
            <Party index={index} label={` ${value}`} />
          </div>
        ))}

      <TheRest
        title="Contract Class:"
        label={ContractInfo?.contractClass?.toLocaleString()}
      />

      <TheRest title="Aggrement Date:" label={formatedDate(agreementDate)} />
      <TheRest
        title="Contract Duration:"
        label={`${formatedDate(agreementDate)} - ${formatedDate(
          contractDuration
        )}`}
      />
      <TheRest title="Notice Period:" label={formatedDate(noticePeriod)} />
      <TheRest title="Amount:" label={`$${ContractInfo?.amount}`} />
      <TheRest
        title="Attached Files:"
        label={`${ContractInfo?.attachedFiles?.length} files`}
      />
      <CommentFN title="Comment:" label={ContractInfo?.comment} />
    </Stack>
  );
};

export default ContractInfo;
