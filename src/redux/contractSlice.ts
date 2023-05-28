import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface ContractState {
  contract?: any;
  tag: string;
  customClass: string;
  agreement_date: any;
  termination_date: any;
  notice_date: any;
  amount: string;
  upload: any;
  comment: string;
}

type ContractActionPayload = {
  contract?: any;
  tag: string;
  agreement_date: any;
  termination_date: any;
  notice_date: any;
  amount: string;
  comment: string;
  upload: any;
};

interface ContractAction {
  type: string;
  payload: ContractActionPayload;
}

const initialState: ContractState = {
  contract: {},
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

export const { SET_CONTRACT, SET_DATA } = contractSlice.actions;

function GetShowContractInfo() {
  const showContract = useSelector(
    (state: ContractState) => state.contract.contract
  );

  return showContract;
}

export { GetShowContractInfo };
