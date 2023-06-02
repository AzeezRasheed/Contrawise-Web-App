import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiFolderUploadLine } from "react-icons/ri";
import { splitedAlphabet } from "../../helper";
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
import { SET_CONTRACT } from "../../redux/contractSlice";
import { useRouter } from "next/router";
import { CREATE_CONTRACT } from "../../services/contractServices";
import Spinner from "../Loader/Spinner";
// import Dropzone from "react-dropzone";

const initialValues = {
  parties: ["", ""],
  tag: "",
  customClass: "",
  agreement_date: new Date(),
  termination_date: new Date(),
  notice_date: new Date(),
  amount: "",
  comment: "",
  upload: [],
};

function ContractForms() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values: ContractFormValues) => {
    const {
      agreement_date,
      amount,
      comment,
      notice_date,
      parties,
      termination_date,
      upload,
      customClass,
    } = values;

    const contractData = {
      title: "Abudu20 ",
      class: customClass,
      agreement_date: agreement_date.getTime(),
      termination_date: termination_date.getTime(),
      notice_date: notice_date.getTime(),
      amount,
      category: "2",
      comment,
      parties,
      upload: Array.from(upload),
    };

    // const contractData = new FormData();
    // contractData.append("title", "Abudu20");
    // contractData.append("class", customClass);
    // contractData.append("agreement_date", agreement_date.getTime());
    // contractData.append("termination_date", termination_date.getTime());
    // contractData.append("notice_date", notice_date.getTime());
    // contractData.append("amount", amount);
    // contractData.append("category", "2");
    // contractData.append("comment", comment);
    // contractData.append("parties", parties);

    // Append each file individually with unique keys
    // const uploadArray = Array.from(upload);
    // uploadArray.forEach((file, index) => {
    //   contractData.append(`upload[${index}]`, file);
    // });

    setIsLoading(true);
    try {
      const data = await CREATE_CONTRACT(contractData);
      dispatch(SET_CONTRACT(values as any));
      setIsLoading(false);
      console.log(data);
      data && router.push("/contracts/[id]", `/contracts/${data?.id}`);
    } catch (error) {
      // Handle error
      setIsLoading(false);
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    setValues,
    setFieldValue,
    touched,
    errors,
    isValid,
    handleBlur,
  } = useFormik<ContractFormValues>({
    initialValues,
    validationSchema: createContractSchema,
    onSubmit,
  });

  // const uploadArray = ;

  return (
    <div>
      {isLoading && <Spinner />}
      <form onSubmit={handleSubmit} className="p-4 ">
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
                      {values?.parties?.map((party, index) => {
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
                                  value={party[index]}
                                  placeholder={`Input party ${splitedAlphabet[index]}`}
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
                {/* This is the select inputs for Tags and customClass */}
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <ContractLabelForm label="Select tags">
                    <SelectForm
                      name="tag"
                      label="Select an option"
                      options={contractTag}
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
                      name="customClass"
                      label="Select an option"
                      options={contractClass}
                      value={values.customClass}
                      onChange={handleChange}
                      error={touched.customClass && Boolean(errors.customClass)}
                    />
                    {touched.customClass && errors.customClass ? (
                      <Typography as={"span"} className="text-sm text-error">
                        {errors.customClass}
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
                            placeholderText="Select a date"
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
                                placeholderText="Select a date"
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
                        {({ ...field }) => (
                          <DatePicker
                            {...field}
                            selected={values.notice_date}
                            dateFormat="dd/MM/yyyy"
                            className="w-full max-w-[406px] rounded-[4px] text-[#6B7280] text-[14px] leading-[24px] tracking-[0.25px] font-Inter py-[12px] px-16 border border-solid border-[#D1D5DB] bg-[#FFFFFF]"
                            placeholderText="Select a date"
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
                        placeholder="amount"
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
                              {values?.upload?.length === 0
                                ? "Select upload"
                                : `${values?.upload?.length} ${
                                    values?.upload.length < 2 ? "file" : "files"
                                  } `}
                            </Typography>
                            <RiFolderUploadLine size={24} />
                            <input
                              id="upload"
                              name="upload"
                              type="file"
                              multiple
                              onChange={(event) => {
                                const files = event.target.files;
                                setFieldValue("upload", files);
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
                        placeholder="|   Input Text"
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

                  <button type="submit">
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
              </div>
            </div>
          </div>
        </Formik>
      </form>
    </div>
  );
}

export default ContractForms;
