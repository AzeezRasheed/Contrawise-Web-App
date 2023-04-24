import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import "@fontsource/inter";

function ContraApp({ Component, pageProps }: AppProps) {
	const getLayout =
		(
			Component as typeof Component & {
				getLayout: (page: ReactNode) => ReactNode;
			}
		).getLayout || ((page: ReactNode) => page);
	return getLayout(<Component {...pageProps} />);
}

export default ContraApp;
