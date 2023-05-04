import React from "react";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import Stack from "../Stack";
import Typography from "../Typography";
import { useRouter } from "next/router";

function ContractButton() {
  const router = useRouter();
  return (
    <div className="w-full max-w-[406px] flex flex-row justify-between gap-1 flex-wrap ">
      {/* <button
        type="submit"
        onClick={() => router.push("/contracts/[contractsDetail]", "/contracts/info")}
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
            className="text-[14px] font-normal leading-[24px] font-Inter "
          >
            Create new contract
          </Typography>
        </Stack>
      </button> */}
      <button
        onClick={() =>
          router.push("/contracts/[contractsDetail]", "/contracts/info")
        }
      >
        <Stack
          alignItems="center"
          className=" px-4 py-2.5 bg-[#112F82] rounded-[6px]"
        >
          <Typography
            as="h3"
            variant="white"
            className="text-[14px] font-normal leading-[24px] font-Inter "
          >
            Publish Contract
          </Typography>
        </Stack>
      </button>
    </div>
  );
}

export default ContractButton;
