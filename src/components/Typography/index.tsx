import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg" | "authSubTitle";
  variant?: "white" | "body" | "black" | "bold" | "purple";
  as?: React.ElementType;
}
const Typography: FC<Props> = ({
  size = "base",
  variant = "black",
  as = "p",
  className,
  children,
}) => {
  const Tag = as;

  const sizes = {
    sm: "font-medium text-sm leading-normal",
    base: "font-medium  leading-normal",
    lg: "font-semibold text-lg md:text-2xl leading-relaxed",
    authSubTitle: "font-Inter font-normal text-[20px] leading-[24px]  ",
  };

  const variants = {
    white: "text-[#FFFFFF]",
    body: "text-[#02020E]",
    black: "text-[#000000] ",
    bold: "text-[#1C1C1C]",
    purple: "text-[#B165E9]",
  };

  return (
    <Tag
      className={`${size && sizes[size]} ${
        variants && variants[variant]
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Typography;
