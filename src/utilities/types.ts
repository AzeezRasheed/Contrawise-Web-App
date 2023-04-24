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
