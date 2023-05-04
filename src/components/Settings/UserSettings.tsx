import React from "react";
import Stack from "../Stack";
import Typography from "../Typography";
import { Field } from "formik";
import Button from "../Button";
import { BiDotsVerticalRounded } from "react-icons/bi";

const UserSettings = ({
  value,
  handleChange,
  handleBlur,
  setFieldValue,
  values,
}) => {
  return (
    <Stack direction="column" alignItems="start" className="gap-4">
      <Stack>
        <Stack
          direction="row"
          alignItems="center"
          className="w-full gap-6 flex-wrap"
        >
          <Stack
            direction="column"
            alignItems="center"
            className="gap-3 w-full max-w-[427px]"
          >
            <div className="flex flex-row items-center w-full justify-between ">
              <div></div>
              <Typography
                variant="black"
                className="text-[14px] text-[#202020] font-bold leading-[24px] font-Poppins "
              >
                Input user
              </Typography>
            </div>
            <Field
              className="border w-full max-w-[427px] flex border-solid border-[#D1D5DB] bg-[#FFFFFF] rounded-[4px] py-[12px] px-[16px] placeholder:text-[#6B7280] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter   "
              name={`userSettingsList`}
              value={value}
              placeholder={`Input user`}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Stack>
          <div className="gap-3 flex flex-col items-center  ">
            <div className="h-5"></div>
            <Button
              onClick={() => {
                setFieldValue("userSettingsList", [
                  ...values.userSettingsList,
                  value,
                ]);
              }}
            >
              <div className="bg-[#22237F] rounded-[4px] px-4 py-2 text-white ">
                Add
              </div>
            </Button>
          </div>
        </Stack>
      </Stack>
      <div className="flex flex-col gap-2 items-start w-full max-w-[427px] lg:ml-12">
        <Typography
          variant="black"
          className="text-[14px] text-[#202020] font-bold leading-[24px] font-Poppins "
        >
          User List
        </Typography>

        {/* Box for user list */}
        {values.userSettingsList.map((value, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-white w-full max-w-[427px] flex justify-between items-center"
          >
            <Typography
              variant="black"
              className="text-[14px] text-[#202020] font-bold leading-[24px] font-Poppins "
            >
              {value}
            </Typography>

            <Button onClick={() => {}} className="mr-1">
              <BiDotsVerticalRounded size={24} />
            </Button>
          </div>
        ))}
      </div>
    </Stack>
  );
};

export default UserSettings;
