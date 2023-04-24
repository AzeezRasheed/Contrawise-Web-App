import { FC, useContext } from "react";
import Button from "../Button";
import Logo from "../Logo";
import styles from "./index.module.scss";
import { REQUEST_DEMO, APP_NAME } from "../../utilities/messages";
import Hamburger from "../Hamburger";
import { NavigationToggleContext } from "../../contexts/toggle.context";
import Image from "next/image";
import NavigationBar from "../NavigationBar";

const Header: FC = () => {
	const toggleState = useContext(NavigationToggleContext)
	return (
		<header
			className={`${styles.header} d-flex align-items-center justify-content-between`}
		>
			<div className="d-flex align-items-center">
				<Logo />
				<div className={`${styles.title} ms-2`}>{APP_NAME}</div>
				<NavigationBar />
			</div>
			<div className={styles.buttonContainer}>
				<Button
					className={styles.button}
					text={REQUEST_DEMO}
					onClick={() => {}}
					ripple
				/>
			</div>
			<div className={styles.hamContainer}>
				<Hamburger toggleState={toggleState} />
			</div>
		</header>
	);
};

export default Header;
