import { Field } from "formik";
import React, { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
  onChange: (option: Option) => void;
}

const SelectForm: FC<Props> = ({ name, label, options, ...rest }) => {
  return (
    <div className="relative w-full max-w-[406px]">
      <Field
        as="select"
        name={name}
        id={name}
        className="block w-full max-w-[406px] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter focus:outline-none rounded-[4px] py-[12px] px-[16px]  border border-solid border-[#D1D5DB] bg-[#FFFFFF]  "
        {...rest}
      >
        {options.map((option: Option) => (
          <option key={option.value} value={option.value} className=" ">
            {option.label}
          </option>
        ))}
      </Field>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <IoIosArrowDown size={28} className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export default SelectForm;
