import { FC, useContext, useRef } from "react";
import { NavigationToggleContext } from "../../contexts/toggle.context";
import { NavigationBarProps, NavigationItem } from "./types";
import Image from "next/image";
import styles from "./index.module.scss";
import Logo from "../Logo";
import { APP_NAME } from "../../utilities/messages";

const NavigationBar: FC<NavigationBarProps> = ({ mobile }) => {
	const [toggled, toggle] = useContext(NavigationToggleContext);
	const dialogRef = useRef<HTMLDivElement>(null);
	const items: NavigationItem[] = [
		{
			title: "Product",
			id: 1,
		},
		{
			title: "Pricing",
			id: 2,
		},
		{
			title: "Company",
			id: 3,
		},
	];

	const _dismiss = (e: any) => {
		if (dialogRef.current && dialogRef.current.contains(e.target)) return;
		toggle(!toggled);
	};

	if (!mobile) {
		return (
			<ul className={styles.nav}>
				{items.map((item) => (
					<li key={item.id}>
						<span>{item.title}</span>
						<span>
							<Image
								src={"/svgs/black__chevron__down.svg"}
								height={8}
								width={14}
								alt=""
							/>
						</span>
					</li>
				))}
			</ul>
		);
	}
	return (
		<>
			<div
				className={`${styles.mobileNav} ${toggled === true && styles.active}`}
				onClick={(e) => _dismiss(e)}
			/>
			<nav
				className={`${styles.dialog} ${toggled === true && styles.active}`}
				ref={dialogRef}
			>
				<div
					className={`${styles.header} d-flex align-items-center w-100 justify-content-center flex-column`}
				>
					<Logo />
					<div className={`ms-2 d-flex justify-content-center mt-0`}>
						{APP_NAME}
					</div>
				</div>
				<ul>
					{items.map((item) => (
						<li
							key={item.id}
							className="d-flex align-items-center justify-content-between"
						>
							<span>{item.title}</span>
							<span>
								<Image
									src="/svgs/black__chevron__down.svg"
									height={12}
									width={12}
									alt=""
								/>
							</span>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default NavigationBar;
