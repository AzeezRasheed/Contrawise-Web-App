import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface ContractState {
  contract?: any;
  contracts?: any;
  tag: string;
  customClass: string;
  agreement_date: any;
  termination_date: any;
  notice_date: any;
  amount: string;
  upload: any;
  comment: string;
  draft: any;
  executed: any;
  at_risk: any;
  archived: any;
}

type ContractActionPayload = {
  contract?: any;
  contracts?: any;
  tag: string;
  agreement_date: any;
  termination_date: any;
  notice_date: any;
  amount: string;
  comment: string;
  upload: any;
  draft: any;
  executed: any;
  at_risk: any;
  archived: any;
};

interface ContractAction {
  type: string;
  payload: ContractActionPayload;
}

const initialState: ContractState = {
  contract: {},
  contracts: [],
  draft: [],
  executed: [],
  at_risk: [],
  archived: [],
  tag: "",
  customClass: "",
  agreement_date: "",
  termination_date: "",
  notice_date: "",
  amount: "",
  upload: [],
  comment: "",
};

const contractSlice = createSlice({
  name: "contractSlice",
  initialState,
  reducers: {
    SET_CONTRACT: (state: ContractState, action: ContractAction) => {
      state.contract = action.payload;
    },
    SET_CONTRACTS: (state: ContractState, action: ContractAction) => {
      state.contracts = action.payload;
    },
    SET_DRAFT: (state: ContractState, action: ContractAction) => {
      state.draft = action.payload;
    },
    SET_EXECUTED: (state: ContractState, action: ContractAction) => {
      state.executed = action.payload;
    },
    SET_AT_RISK: (state: ContractState, action: ContractAction) => {
      state.at_risk = action.payload;
    },
    SET_ARCHIVED: (state: ContractState, action: ContractAction) => {
      state.archived = action.payload;
    },
    SET_DATA: (state: ContractState, action: ContractAction) => {
      const data = action.payload;

      state.contract = data.contract;
      (state.agreement_date = data.agreement_date),
        (state.tag = data.tag),
        (state.agreement_date = data.agreement_date),
        (state.termination_date = data.termination_date),
        (state.amount = data.amount),
        (state.comment = data.comment),
        (state.upload = data.upload);
    },
  },
});

export default contractSlice.reducer;

export const {
  SET_CONTRACT,
  SET_DATA,
  SET_CONTRACTS,
  SET_DRAFT,
  SET_EXECUTED,
  SET_AT_RISK,
  SET_ARCHIVED,
} = contractSlice.actions;

function GetShowContractInfo() {
  const showContract = useSelector(
    (state: ContractState) => state.contract.contract
  );

  return showContract;
}

function GetShowContractsInfo() {
  const showContracts = useSelector(
    (state: ContractState) => state.contract.contracts
  );

  return showContracts;
}

function GetShowDraftInfo() {
  const draft = useSelector((state: ContractState) => state.contract.draft);

  return draft;
}

function GetShowExecutedInfo() {
  const executed = useSelector(
    (state: ContractState) => state.contract.executed
  );

  return executed;
}

function GetShowAtRiskInfo() {
  const at_risk = useSelector((state: ContractState) => state.contract.at_risk);

  return at_risk;
}

function GetShowArchivedInfo() {
  const archived = useSelector(
    (state: ContractState) => state.contract.archived
  );

  return archived;
}

export {
  GetShowContractInfo,
  GetShowContractsInfo,
  GetShowDraftInfo,
  GetShowExecutedInfo,
  GetShowAtRiskInfo,
  GetShowArchivedInfo,
};
