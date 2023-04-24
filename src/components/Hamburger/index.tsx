import { FC } from "react";
import styles from "./index.module.scss";
import { HamburgerProps } from "./types";

const Hamburger: FC<HamburgerProps> = ({ toggleState }) => {
	const [toggled, toggle] = toggleState;
	return (
		<div
			className={`${styles.hamburger} ${toggled && styles.active}`}
			onClick={() => toggle(!toggled)}
		>
			<span />
			<span />
			<span />
		</div>
	);
};

export default Hamburger;
