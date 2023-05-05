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
  contractTag: string;
  contractClass: any;
  agreementDate: any;
  contractDuration: any;
  noticePeriod: any;
  amount: string;
  comment: string;
  attachedFiles: any;
}

export interface ContractActionPayload {
  parties: string[];
  contractTag: string;
  contractClass: string;
  agreementDate: any;
  contractDuration: any;
  noticePeriod: any;
  amount: string;
  comment: string;
  attachedFiles: any;
}
