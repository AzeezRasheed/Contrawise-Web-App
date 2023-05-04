import React, { FC, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Layout from "../../layouts/DashboardLayout";
import Stack from "../../components/Stack";
import Header from "../../components/Dashboard/Header";
import Footer from "../../components/Dashboard/Footer";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import {
  Formik,
  Field,
  FieldArray,
  useFormik,
  FieldInputProps,
  useField,
} from "formik";
import UserSettings from "../../components/Settings/UserSettings";
import ContractSettings from "../../components/Settings/ContractSettings";
import PartiesSettings from "../../components/Settings/PartiesSettings";
import TagSettings from "../../components/Settings/TagSettings";

const Wrapper = styled.div`
  ${tw`
bg-white
flex
h-full
w-full
relative
flex-1
flex-col
`}
`;

const Card = styled.div`
  ${tw`
relative 

overflow-y-scroll
bg-[#F7F9FB]
shadow-2xl
w-full
max-w-[841px]
h-full
md:h-[628px]
border
border-solid
border-[#ECECEC]
rounded-[12px]
p-3
ml-6
mt-6 

`}
`;

interface SettingsFormValues {
  userSettingsList: any[]; // replace "any" with the correct type
  contractSettingsList: any[]; // replace "any" with the correct type
  partiesSettingsList: any[]; // replace "any" with the correct type
  tagsSettingsList: any[]; // replace "any" with the correct type
}

const initialValues = {
  userSettingsList: [],
  contractSettingsList: [],
  partiesSettingsList: [],
  tagsSettingsList: [],
};

const Index: FC = () => {
  const [activeTab, setActiveTab] = useState("user-settings");
  const [inputUserValue, setInputUserValue] = useState("");
  const [inputContractValue, setInputContractValue] = useState("");
  const [inputPartiesValue, setInputPartiesValue] = useState("");
  const [inputTagsValue, setInputTagsValue] = useState("");

  const onSubmit = (values: SettingsFormValues) => {
    console.log(values);
  };
  const {
    values,
    handleSubmit,
    setValues,
    setFieldValue,
    touched,
    errors,
    handleBlur,
    // handleChange
  } = useFormik<SettingsFormValues>({
    initialValues,
    onSubmit,
  });

  const tabs = [
    { id: "user-settings", label: "User Settings" },
    { id: "contract-settings", label: "Contract Settings" },
    { id: "parties-settings", label: "Parties Settings" },
    { id: "tags-settings", label: "Tags Settings" },
  ];

  const renderTabs = () => {
    return tabs.map((tab) => (
      <Button
        key={tab.id}
        onClick={() => {
          setActiveTab(tab.id);
        }}
        className="w-full max-w-[167px] "
      >
        <Stack
          className={`items-start  border-l-[3px] ${
            activeTab === tab.id ? "border-[#B165E9]" : "border-none"
          } py-[14px] px-[20px] w-full bg-white   `}
        >
          <Typography
            className={` font-Inter font-normal text-[14px] leading-[24px] text-[#02020E]   `}
          >
            {tab.label}
          </Typography>
        </Stack>
      </Button>
    ));
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputUserValue(newValue);
  };

  const handleContractChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputContractValue(newValue);
  };

  const handlePartiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputPartiesValue(newValue);
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputTagsValue(newValue);
  };

  const renderPanel = () => {
    switch (activeTab) {
      case "tags-settings":
        return (
          <TagSettings
            value={inputTagsValue}
            handleChange={handleTagsChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            values={values}
          />
        );
      case "contract-settings":
        return (
          <ContractSettings
            value={inputContractValue}
            handleChange={handleContractChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            values={values}
          />
        );
      case "parties-settings":
        return (
          <PartiesSettings
            value={inputPartiesValue}
            handleChange={handlePartiesChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            values={values}
          />
        );
      default:
        return (
          <UserSettings
            value={inputUserValue}
            handleChange={handleUserChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
            values={values}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues}>
        <Stack direction="row" className="h-screen">
          <Layout>
            <Wrapper>
              <div className="static flex w-full  ">
                <div className="w-full">
                  <Header />
                </div>
              </div>
              <Card>
                <div className=" flex flex-row gap-4 w-full flex-wrap">
                  <Stack
                    direction="column"
                    alignItems="start"
                    justifyContent="start"
                    className="gap-10 text-start w-full max-w-[167px] "
                  >
                    <Stack
                      justifyContent="start"
                      alignItems="start"
                      className="ml-4 pt-3 text-start w-full max-w-[167px]  "
                    >
                      <Typography
                        variant="bold"
                        className="text-[14px] font-semibold leading-[15px] font-Inter "
                      >
                        Settings
                      </Typography>
                    </Stack>

                    <Stack direction="column" className="w-full max-w-[167px]">
                      {renderTabs()}
                    </Stack>
                  </Stack>
                  <div className=" flex flex-col mt-10 gap-10 flex-1 text-start w-full">
                    {renderPanel()}
                  </div>
                </div>
              </Card>
              <div className="static flex w-full  ">
                <div className="w-full">
                  <Footer />
                </div>
              </div>
            </Wrapper>
          </Layout>
        </Stack>
      </Formik>
    </form>
  );
};

export default Index;
