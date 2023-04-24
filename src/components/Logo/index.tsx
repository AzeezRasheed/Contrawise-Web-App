import Image from "next/image";
import { FC } from "react";

const Logo: FC = () => {
    return <Image priority src="/svgs/logo.svg" height={40} width={40} alt="logo" />
}

export default Logo;