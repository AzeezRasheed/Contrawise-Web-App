import { FC } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Button from "../Button";
import {
  APP_NAME,
  HERO_ACTION_TEXT,
  HERO_DESCRIPTION,
  HERO_TITLE_WHITE,
} from "../../utilities/messages";
import ArrowIcon from "../../svgComponents/ArrowIcon";
import { useRouter } from "next/router";
import {
  GetIsLoginModalOpen,
  GetIsRegisterModalOpen,
  SET_LOGIN_MODAL_OPEN,
  SET_LOGOUT_MODAL_OPEN,
} from "../../redux/modalSlice";
import { useDispatch } from "react-redux";
import { GetIsLogoutModalOpen } from "../../redux/modalSlice";
import ModalLogout from "../Modal/ModalLogout";
import ModalLogin from "../Modal/ModalLogin";
import { useIsUserLoggedIn } from "../../redux/authSlice";
import ModalRegister from "../Modal/ModalRegister";

const Hero: FC = () => {
  const dispatch = useDispatch();
  const modalLoginIsOpen = GetIsLoginModalOpen();
  const modalRegisterIsOpen = GetIsRegisterModalOpen();
  const router = useRouter();
  const isUserLoggedIn = useIsUserLoggedIn();
  return (
    <div className={styles.hero}>
      {modalLoginIsOpen && <ModalLogin isOpen={modalLoginIsOpen} />}
      {modalRegisterIsOpen && <ModalRegister isOpen={modalRegisterIsOpen} />}
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
            <Button
              ripple
              onClick={() => {
                isUserLoggedIn
                  ? router.push("/dashboard")
                  : dispatch(SET_LOGIN_MODAL_OPEN(true));
              }}
              className={styles.button}
            >
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
