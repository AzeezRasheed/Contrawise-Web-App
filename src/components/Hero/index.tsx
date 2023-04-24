import { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Button from "../Button";
import { APP_NAME, HERO_ACTION_TEXT, HERO_DESCRIPTION, HERO_TITLE_WHITE } from "../../utilities/messages";
import ArrowIcon from "../../svgComponents/ArrowIcon";

const Hero: FC = () => {
	return (
		<div className={styles.hero}>
			<div className="w-100 h-100 position-relative">
				<Image
					src="/images/transparent__plate.png"
					alt=""
					height={350}
					width={350}
					className={styles.imageOne}
				/>
				<Image
					src="/images/transparent__plate.png"
					alt=""
					height={370}
					width={370}
					className={styles.imageStackOne}
				/>
				<Image
					src="/images/transparent__plate.png"
					alt=""
					height={300}
					width={300}
					className={styles.imageStackTwo}
				/>
				<Image
					src="/images/transparent__plate.png"
					alt=""
					height={260}
					width={260}
					className={styles.imageStackThree}
				/>
			</div>
			<div className={styles.content}>
				<div>
					<p className={styles.largeText}>
						{HERO_TITLE_WHITE} <span>{APP_NAME}</span>
					</p>
					<p className={styles.smallText}>{HERO_DESCRIPTION}</p>
					<div className={`${styles.actionArea} d-flex justify-content-center`}>
						<Button ripple onClick={() => {}} className={styles.button}>
							<>
								<span>{HERO_ACTION_TEXT}</span>
								<span>
									<ArrowIcon />
								</span>
							</>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
