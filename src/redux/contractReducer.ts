import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  contract: {},
  contractTag: "",
  contractClass: "",
  agreementDate: "",
  contractDuration: null,
  noticePeriod: null,
  amount: "",
  attachedFiles: null,
  comment: "",
};

const ContractReducer = createSlice({
  name: "contractReducer",
  initialState,
  reducers: {
    SET_CONTRACT: (state, action) => {
      state.contract = action.payload;
    },
    SET_DATA: (state, action) => {
      const data = action.payload;

      state.contract = data.contract;
      (state.agreementDate = data.aggrementDate),
        (state.contractTag = data.contractTag),
        (state.agreementDate = data.agreementDate),
        (state.contractDuration = data.contractDuration),
        (state.amount = data.amount),
        (state.comment = data.comment),
        (state.attachedFiles = data.attachedFiles);
    },
  },
});

export default ContractReducer.reducer;

export const { SET_CONTRACT, SET_DATA } = ContractReducer.actions;
function GetShowContractInfo() {
  const showContract = useSelector((state) => state.createContract.contract);

  return showContract;
}

function GetShowContractTag() {
  const contractTag = useSelector(
    (state) => state.createContract.contract.contract
  );

  return contractTag;
}

function GetShowContractClass() {
  const contractClass = useSelector(
    (state) => state.createContract.contract.contractClass
  );

  return contractClass;
}

function GetShowAgreementDate() {
  const agreementDate = useSelector(
    (state) => state.createContract.contract.agreementDate
  );

  return agreementDate;
}

function GetShowContractDuration() {
  const contractDuration = useSelector(
    (state) => state.createContract.contract.contractDuration
  );
  return contractDuration;
}

function GetShowNoticePeriod() {
  const noticePeriod = useSelector(
    (state) => state.createContract.contract.noticePeriod
  );

  return noticePeriod;
}

function GetShowAmount() {
  const amount = useSelector((state) => state.createContract.contract.amount);

  return amount;
}

function GetShowAttachedFiles() {
  const attachedFiles = useSelector(
    (state) => state.createContract.contract.attachedFiles
  );

  return attachedFiles;
}

function GetShowComment() {
  const comment = useSelector((state) => state.createContract.contract.comment);

  return comment;
}

export {
  GetShowContractInfo,
  GetShowContractTag,
  GetShowContractClass,
  GetShowAgreementDate,
  GetShowContractDuration,
  GetShowNoticePeriod,
  GetShowAmount,
  GetShowAttachedFiles,
  GetShowComment,
};
