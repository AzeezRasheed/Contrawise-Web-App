import * as Yup from "yup";

export const alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
export const splitedAlphabet = alphabet.split(",");

interface AnyPresentValue {
  name: string;
  size: number;
  type: string;
  lastModified?: number;
}

export const createContractSchema = Yup.object().shape({
  parties: Yup.array()
    .of(Yup.string().required("Party is required"))
    .min(2, "Must have at least two parties")
    .required("Parties are required"),
  contractTag: Yup.string().required("Select Tags option is required"),
  contractClass: Yup.string().required("Select Class option is required"),
  agreementDate: Yup.date().required("Agreement date is required"),
  contractDuration: Yup.date().required("Agreement duration is required"),
  noticePeriod: Yup.date().required("Notice period is required"),
  amount: Yup.string().required("Amount is required"),
  comment: Yup.string(),
  attachedFiles: Yup.mixed<AnyPresentValue>().test(
    "fileSize",
    "File is too large",
    (value) => value && value.size <= 10000000 // 10MB
  ),
});
