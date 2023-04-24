import Head from "next/head";
import { FC, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavigationBar from "../../components/NavigationBar";
import { NavigationToggleContext } from "../../contexts/toggle.context";
import { BaseLayoutProps } from "./interface";

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
	const navigationToggleState = useState(false);
	return (
		<>
			<main>
				<NavigationToggleContext.Provider value={navigationToggleState}>
					<Header />
					<NavigationBar mobile />
				</NavigationToggleContext.Provider>
				{children}
				<Footer />
			</main>
		</>
	);
};

export default BaseLayout;
