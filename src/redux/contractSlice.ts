import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface ContractState {
  contract?: any;
  contractTag: string;
  contractClass: string;
  agreementDate: any;
  contractDuration: any;
  noticePeriod: any;
  amount: string;
  attachedFiles: any;
  comment: string;
}

type ContractActionPayload = {
  contract?: any;
  contractTag: string;
  agreementDate: any;
  contractDuration: any;
  noticePeriod: any;
  amount: string;
  comment: string;
  attachedFiles: any;
};

interface ContractAction {
  type: string;
  payload: ContractActionPayload;
}

const initialState: ContractState = {
  contract: {},
  contractTag: "",
  contractClass: "",
  agreementDate: "",
  contractDuration: "",
  noticePeriod: "",
  amount: "",
  attachedFiles: [],
  comment: "",
};

const contractSlice = createSlice({
  name: "contractSlice",
  initialState,
  reducers: {
    SET_CONTRACT: (state: ContractState, action: ContractAction) => {
      state.contract = action.payload;
    },
    SET_DATA: (state: ContractState, action: ContractAction) => {
      const data = action.payload;

      state.contract = data.contract;
      (state.agreementDate = data.agreementDate),
        (state.contractTag = data.contractTag),
        (state.agreementDate = data.agreementDate),
        (state.contractDuration = data.contractDuration),
        (state.amount = data.amount),
        (state.comment = data.comment),
        (state.attachedFiles = data.attachedFiles);
    },
  },
});

export default contractSlice.reducer;

export const { SET_CONTRACT, SET_DATA } = contractSlice.actions;

function GetShowContractInfo() {
  const showContract = useSelector(
    (state: ContractState) => state.contract.contract
  );

  return showContract;
}

export { GetShowContractInfo };
