import React, { FC } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiFolderUploadLine } from "react-icons/ri";
import { MdAddBox } from "react-icons/md";
import { Formik, Field, FieldArray, useFormik, FieldInputProps } from "formik";
import { IoMdRemove } from "react-icons/io";
import Stack from "../Stack";
import Typography from "../Typography";
import "react-datepicker/dist/react-datepicker.css";
import { createContractSchema } from "../../helper";
import { contractTag, contractClass } from "../../data";
import SelectForm from "../UI/SelectForm";
import { ContractFormValues } from "../../utilities/types";
import ContractLabelForm from "../UI/ContractLabelForm";
import { useDispatch } from "react-redux";
import { SET_CONTRACT, GetShowContractInfo } from "../../redux/contractSlice";
// import Dropzone from "react-dropzone";
import { useRouter } from "next/router";

// interface OnDropFunction {
//   (acceptedFiles: File[]): void;
// }

function ContractEditForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const contractInfo = GetShowContractInfo();

  const initialValues = {
    parties: contractInfo?.parties ? contractInfo.parties : "",
    tag: contractInfo?.tag ? contractInfo?.tag : "",
    class: contractInfo?.class ? contractInfo?.class : "",
    agreement_date: new Date(),
    termination_date: new Date(),
    notice_date: new Date(),
    amount: contractInfo?.amount ? contractInfo?.amount : "",
    comment: contractInfo?.comment ? contractInfo?.comment : "",
    upload: contractInfo?.upload ? contractInfo?.upload : [],
  };
  const onSubmit = (values: ContractFormValues) => {
    const formData = new FormData();
    dispatch(SET_CONTRACT(values as ContractFormValues));
    console.log(values);
    if (values.upload) {
      formData.append("upload", values.upload);
    }
    // Make a network request with the ContractLabelForm data
  };

  const {
    values,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
    touched,
    errors,
    handleBlur,
  } = useFormik<ContractFormValues>({
    initialValues,
    validationSchema: createContractSchema,
    onSubmit,
  });

  // const [field, meta, helpers] = useField({ name })

  // const onDrop: OnDropFunction = (acceptedFiles) => {
  //   helpers.setValue(acceptedFiles);
  // };
  console.log(values.parties);
  return (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <div className="bg-[#F7F9FB] rounded-[12px] w-full max-w-[932px] ">
          <div className="flex flex-col gap-3 p-6 pb-12">
            {/* This is the Input that allows users to add Party */}

            <FieldArray
              name="parties"
              render={(arrayHelpers) => (
                <div>
                  <Stack
                    direction="row"
                    alignItems="baseline"
                    justifyContent="spacebetween"
                    className="gap-4 flex-wrap"
                  >
                    {values?.parties &&
                      values?.parties?.map((party, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col gap-2 items-start w-full  max-w-[406px]"
                          >
                            <ContractLabelForm label="Add Party">
                              <div
                                className="w-full flex flex-col  items-start"
                                key={index}
                              >
                                <Field
                                  className="border flex border-solid border-[#D1D5DB] bg-[#FFFFFF] rounded-[4px] py-[12px] px-[16px] w-full placeholder:text-[#6B7280] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter   "
                                  name={`parties[${index}]`}
                                  value={values.parties[index]}
                                  placeholder={`${contractInfo?.parties[index]}`}
                                  onChange={handleChange}
                                  error={
                                    touched.parties && Boolean(errors.parties)
                                  }
                                  onBlur={handleBlur}
                                />
                                {touched.parties && errors.parties ? (
                                  <Typography
                                    as={"span"}
                                    className="text-sm text-error"
                                  >
                                    {errors.parties[index]}
                                  </Typography>
                                ) : null}
                                {index > 0 ? (
                                  <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="spacebetween"
                                  >
                                    {index > 1 ? (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          arrayHelpers.remove(index);
                                          setValues({
                                            ...values,
                                            parties: values.parties.filter(
                                              (_, i) => i !== index
                                            ),
                                          });
                                        }}
                                      >
                                        <IoMdRemove size={24} />
                                      </button>
                                    ) : (
                                      <div></div>
                                    )}
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const newIndex = values.parties.length;
                                        arrayHelpers.push("");
                                        handleChange({
                                          target: {
                                            name: `parties[${newIndex}]`,
                                            value: "",
                                          },
                                        });
                                      }}
                                    >
                                      <Stack
                                        direction="row"
                                        alignItems="center"
                                        className="gap-0.5"
                                      >
                                        <MdAddBox
                                          size={24}
                                          className="text-[#22237F]"
                                        />
                                        <Typography
                                          as={"span"}
                                          className="font-Inter italic text-[#22237F] text-[14px] leading-[4px] font-normal "
                                        >
                                          add Party
                                        </Typography>
                                      </Stack>
                                    </button>
                                  </Stack>
                                ) : (
                                  <div></div>
                                )}
                              </div>
                            </ContractLabelForm>
                          </div>
                        );
                      })}
                  </Stack>
                </div>
              )}
            />

            <div className="flex flex-col gap-8">
              {/* This is the select inputs for Tags and Class */}
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <ContractLabelForm label="Select tags">
                  <SelectForm
                    name="tag"
                    label={`${contractInfo?.tag}`}
                    options={contractClass}
                    value={values.tag}
                    onChange={handleChange}
                    error={touched.tag && Boolean(errors.tag)}
                  />
                  {touched.tag && errors.tag ? (
                    <Typography as={"span"} className="text-sm text-error">
                      {errors.tag}
                    </Typography>
                  ) : null}
                </ContractLabelForm>
                <ContractLabelForm label="Select class">
                  <SelectForm
                    name="class"
                    label={`${contractInfo?.class}`}
                    options={contractTag}
                    value={values.class}
                    onChange={handleChange}
                    error={touched.class && Boolean(errors.class)}
                  />
                  {touched.class && errors.class ? (
                    <Typography as={"span"} className="text-sm text-error">
                      {errors.class}
                    </Typography>
                  ) : null}
                </ContractLabelForm>
              </div>

              <div className="flex flex-wrap gap-4 justify-between items-center">
                <ContractLabelForm label="Select agreement date">
                  <div className="relative w-full max-w-[406px]">
                    <Field name="agreement_date" onBlur={handleBlur}>
                      {({ field }: { field: FieldInputProps<any> }) => (
                        <DatePicker
                          {...field}
                          selected={values.agreement_date}
                          onChange={(date) =>
                            setFieldValue("agreement_date", date)
                          }
                          dateFormat="dd/MM/yyyy"
                          className="w-full max-w-[406px] rounded-[4px] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter py-[12px] px-16 border border-solid border-[#D1D5DB] bg-[#FFFFFF]"
                          placeholderText={`${contractInfo?.agreement_date}`}
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                        />
                      )}
                    </Field>
                    {/* {touched.agreement_date && errors.agreement_date ? (
                      <>
                        <Typography as={"span"} className="text-sm text-error">
                          {errors.agreement_date}
                        </Typography>
                      </>
                    ) : null} */}
                    <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
                      <div className="flex flex-row gap-2 items-center ">
                        <AiOutlineCalendar
                          size={24}
                          className="text-[#6B7280]"
                        />
                        <div className=" bg-[#D1D5DB] w-[1px] h-[20px]"></div>
                      </div>
                    </div>
                  </div>
                </ContractLabelForm>

                <ContractLabelForm label="Select agreement duration">
                  <div className="relative w-full max-w-[406px]">
                    <>
                      <div className="relative w-full max-w-[406px]">
                        <Field name="termination_date" onBlur={handleBlur}>
                          {({ field }: { field: FieldInputProps<any> }) => (
                            <DatePicker
                              {...field}
                              selected={values.termination_date}
                              onChange={(date) => {
                                setFieldValue("termination_date", date);
                              }}
                              dateFormat="dd/MM/yyyy"
                              className="w-full max-w-[406px] rounded-[4px] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter py-[12px] px-16 border border-solid border-[#D1D5DB] bg-[#FFFFFF]"
                              placeholderText={`${contractInfo?.termination_date}`}
                              showMonthDropdown
                              showYearDropdown
                              dropdownMode="select"
                            />
                          )}
                        </Field>
                      </div>
                    </>

                    <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
                      <div className="flex flex-row gap-2 items-center ">
                        <AiOutlineCalendar
                          size={24}
                          className="text-[#6B7280]"
                        />
                        <div className=" bg-[#D1D5DB] w-[1px] h-[20px]"></div>
                      </div>
                    </div>
                  </div>
                </ContractLabelForm>
              </div>

              <div className="flex flex-wrap gap-4 justify-between items-center">
                <ContractLabelForm label="Select notice period">
                  <div className="relative w-full max-w-[406px]">
                    <Field name="notice_date">
                      {({ field }) => (
                        <DatePicker
                          {...field}
                          selected={values.notice_date}
                          dateFormat="dd/MM/yyyy"
                          className="w-full max-w-[406px] rounded-[4px] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter py-[12px] px-16 border border-solid border-[#D1D5DB] bg-[#FFFFFF]"
                          placeholderText={`${contractInfo?.notice_date}`}
                          showMonthDropdown
                          showYearDropdown
                          onBlur={handleBlur}
                          onChange={(date) =>
                            setFieldValue("notice_date", date)
                          }
                        />
                      )}
                    </Field>
                    <div className="absolute inset-y-0 left-2 flex items-center px-2 pointer-events-none">
                      <div className="flex flex-row gap-2 items-center ">
                        <AiOutlineCalendar
                          size={24}
                          className="text-[#6B7280]"
                        />
                        <div className=" bg-[#D1D5DB] w-[1px] h-[20px]"></div>
                      </div>
                    </div>
                  </div>
                </ContractLabelForm>

                <ContractLabelForm label="Amount">
                  <div className="relative w-full max-w-[406px]">
                    <Field
                      id="amount"
                      name="amount"
                      placeholder={`${contractInfo?.amount}`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.amount}
                      className={`rounded-[4px] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter py-[12px] px-3 border border-solid border-[#D1D5DB] bg-[#FFFFFF] w-full max-w-[406px] `}
                      error={touched.amount && Boolean(errors.amount)}
                    />
                    {touched.amount && errors.amount ? (
                      <Typography as={"span"} className="text-sm text-error">
                        {errors.amount}
                      </Typography>
                    ) : null}
                  </div>
                </ContractLabelForm>
              </div>

              <div className="flex flex-wrap gap-4 justify-between items-baseline">
                <ContractLabelForm label=" Upload upload">
                  <button className="w-full max-w-[406px]">
                    <div className="relative">
                      <div className=" rounded-[4px] text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.25px] font-Inter py-[12px] px-3 border border-solid border-[#D1D5DB] bg-[#8E8FE1]">
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="spacebetween"
                          className="max-w-[300px] "
                        >
                          <Typography
                            as={"h3"}
                            variant="white"
                            className="text-[14px] leading-[24px] tracking-[0.25px]  "
                          >
                            {values?.upload && `${values?.upload.length} files`}
                          </Typography>
                          <RiFolderUploadLine size={24} />
                          <input
                            id="upload"
                            name="upload"
                            type="file"
                            multiple
                            // required
                            onChange={(event) => {
                              const files = Array.from(event.target.files);
                              setFieldValue("upload", [
                                ...(values.upload || []),
                                ...files,
                              ]);
                            }}
                            className="opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer"
                          />
                        </Stack>
                      </div>
                    </div>
                  </button>
                </ContractLabelForm>

                <ContractLabelForm label="Add comment">
                  <div className="relative w-full max-w-[406px]">
                    <Field
                      as="textarea"
                      rows={4}
                      id="comment"
                      name="comment"
                      className={`rounded-[4px] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter py-[12px] px-3 border border-solid border-[#D1D5DB] bg-[#FFFFFF] w-full max-w-[406px] `}
                      placeholder={`${contractInfo?.comment}`}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.comment}
                      error={touched.comment && Boolean(errors.comment)}
                    />
                    {touched.comment && errors.comment ? (
                      <Typography as={"span"} className="text-sm text-error">
                        {errors.comment}
                      </Typography>
                    ) : null}
                  </div>
                </ContractLabelForm>

                <div className="w-full max-w-[406px] flex flex-row justify-between gap-1 flex-wrap ">
                  <button
                    type="submit"
                    onClick={() => {
                      router.push("/contracts/info");
                    }}
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
                        Save Contract
                      </Typography>
                    </Stack>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </form>
  );
}

export default ContractEditForm;
