import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import "@fontsource/inter";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import setAuthorizationToken from "../helper/useAuthorizationToken";
import { setLogin } from "../redux/authSlice";
import { useLocalStorage } from "../hooks/useLocalStorage";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  );
}

export default ContraApp;
