import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import "@fontsource/inter";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "../redux/store";

 
function ContraApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (
      Component as typeof Component & {
        getLayout: (page: ReactNode) => ReactNode;
      }
    ).getLayout || ((page: ReactNode) => page);
  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default ContraApp;
