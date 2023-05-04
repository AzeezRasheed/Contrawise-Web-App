import { FC } from "react";
import { ButtonProps } from "./types";
import Ripple from "react-ripples";
import styles from "./index.module.scss";

const Button: FC<ButtonProps> = (props) => {
  const allProps = { ...props };
  delete allProps.ripple;
  const button = (
    <button
      {...allProps}
      className={`${styles.button} ${props.className || ""}`}
    >
      {props.text || props.children}
    </button>
  );
  if (props.ripple) return <Ripple>{button}</Ripple>;
  return button;
};

export default Button;
