import { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";

export type NextPageWithLayout = {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
} & NextPage;

export type PageLayoutProps = {
  children: React.ReactNode;
};

export type BooleanStateType = [
  param0: boolean,
  param1: Dispatch<SetStateAction<boolean>>
];

export interface ContractData {
  contractTitle: string;
  company1: string;
  company2: string;
  username1: string;
  username2: string;
  date: string;
  owner: string;
  img: { imageUrl: string }[];
  contractType: string;
  id: number;
}

export interface ContractTableProps {
  userData: ContractData[];
}

export interface PanelProps {
  draftData: ContractData[];
}

export interface ExecutedPanelProps {
  executedData: ContractData[];
}

export interface ArchivePanelProps {
  archiveData: ContractData[];
}

export interface AtRiskPanelProps {
  atRiskData: ContractData[];
}
export interface DraftPanelProps {
  draftData: ContractData[];
}

export interface AllPanelProps {
  allData: ContractData[];
}

export interface ContractFormValues {
  parties: string[];
  tag: string;
  customClass: string;
  agreement_date: Date | null;
  termination_date: Date | null;
  notice_date: Date | null;
  amount: string;
  comment: string;
  upload: any;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface SignupFormValues {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  country: string;
  industry: string;
  password: string;
  phoneNumber: string;
  confirm_password: string;
}

export interface ContractActionPayload {
  parties: string[];
  tag: string;
  customClass: string;
  agreement_date: any;
  termination_date: any;
  notice_date: any;
  amount: string;
  comment: string;
  upload: any;
}

export interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  org_admin: boolean;
  org: number;
}
