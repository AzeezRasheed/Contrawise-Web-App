import React, { FC } from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}
const ContractLabelForm: FC<Props> = ({ label, children }) => {
  return (
    <div className="w-full max-w-[406px] flex flex-col items-start ">
      <label
        htmlFor="aggrementDuration"
        className="text-[#202020] mb-1 leading-[24px] text-[14px] tracking-[0.1px] font-normal font-Poppins  "
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default ContractLabelForm;
