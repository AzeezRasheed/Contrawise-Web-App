import Head from "next/head";
import { FC, ReactNode } from "react";

const CommonHeader: FC<{children: ReactNode}> = ({ children }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            {children}
        </Head>
    );
}

export default CommonHeader;