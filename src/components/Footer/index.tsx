import { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { contacts } from "../../utilities/data";

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<div className={styles.actions}>
					<strong>About</strong>
					<ul>
						<li>About Us</li>
						<li>Blog</li>
						<li>Careers</li>
						<li>Jobs</li>
						<li>In Press</li>
					</ul>
				</div>
				<hr />
				<div className={styles.actions}>
					<strong>Support</strong>
					<ul>
						<li>Contact Us</li>
						<li>Online Chat</li>
						<li>Twitter</li>
						<li>Facebook</li>
						<li>Instagram</li>
					</ul>
				</div>
				<hr />
				<div className={styles.actions}>
					<strong>FAQ</strong>
					<ul>
						<li>Account</li>
						<li>Manage Deliveries</li>
						<li>Orders</li>
						<li>Payments</li>
						<li>Returns</li>
					</ul>
				</div>
				<hr />
			</div>
			<div>
				{contacts.map((item) => (
					<div key={item.id} className={styles.contact}>
						<div>
							<Image src={item.imgPath} height={20} width={20} alt="" />
						</div>
						<div>
							<div>{item.key}</div>
							<div>{item.value}</div>
						</div>
					</div>
				))}
			</div>
			<div className="d-flex justify-content-between">
				<ul>
					<li>About Us</li>
					<li>Contact</li>
					<li>Privacy policy</li>
					<li>Sitemap</li>
					<li>Term of Use</li>
				</ul>
				<div>&copy;2023, All Rights Reserved</div>
            </div>
            <br />
		</footer>
	);
};

export default Footer;
