import { FC, ReactNode, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const Collapsible: FC<{ children: ReactNode; title: string }> = ({
	children,
	title,
}) => {
	const [toggled, toggle] = useState(false);
	return (
		<div className={`${styles.collapsible} my-3`}>
			<header onClick={() => toggle(!toggled)}>
				<span>{title}</span>
				<span className={toggled ? styles.active : ""}>
					<Image
						src="/svgs/collapsible__icon.svg"
						height={20}
						width={20}
						alt=""
					></Image>
				</span>
			</header>
			<section className={toggled ? styles.active : ""}>
				<hr />
				<div className="mb-3 pb-3 pt-3">
					<p>{children}</p>
				</div>
			</section>
		</div>
	);
};

export default Collapsible;
