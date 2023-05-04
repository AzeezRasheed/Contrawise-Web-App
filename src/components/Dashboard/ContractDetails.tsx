import React from "react";
import Stack from "../Stack";
import { splitedAlphabet } from "../../helper";
import Typography from "../Typography";
import {
  GetShowAgreementDate,
  GetShowAmount,
  GetShowAttachedFiles,
  GetShowComment,
  GetShowContractClass,
  GetShowContractDuration,
  GetShowContractInfo,
  GetShowNoticePeriod,
} from "../../redux/contractReducer";

function ContractInfo() {
  const ContractInfo = GetShowContractInfo();
  const ContractClass = GetShowContractClass();
  const AgreementDate = GetShowAgreementDate();
  const ContractDuration = GetShowContractDuration();
  const NoticePeriod = GetShowNoticePeriod();
  const Amount = GetShowAmount();
  const AttachedFiles = GetShowAttachedFiles();
  const Comment = GetShowComment();
  console.log(Comment);
  console.log(ContractInfo);
  const Party = ({ index, label }) => {
    return (
      <Stack
        key={index}
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

  console.log(AttachedFiles);
  const CommentFN = ({ title, label }) => {
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

  const TheRest = ({ title, label }) => {
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
  return (
    <Stack
      direction="column"
      justifyContent="start"
      alignItems="start"
      className="gap-4 text-start "
    >
      {ContractInfo &&
        ContractInfo?.parties?.map((value, index) => (
          <Party index={index} label={` ${value}`} />
        ))}

      <TheRest title="Contract Class:" label={ContractClass} />
      <TheRest
        title="Aggrement Date:"
        label={AgreementDate?.toLocaleString()}
      />
      <TheRest
        title="Contract Duration:"
        label={`${AgreementDate?.toLocaleString()} - ${ContractDuration?.toLocaleString()}`}
      />
      <TheRest title="Notice Period:" label={NoticePeriod?.toLocaleString()} />
      <TheRest title="Amount:" label={`$${Amount}`} />
      <TheRest
        title="Attached Files:"
        label={`${AttachedFiles?.length} files`}
      />
      <CommentFN title="Comment:" label={Comment} />
    </Stack>
  );
}

export default ContractInfo;
