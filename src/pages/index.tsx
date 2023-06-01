/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Hero from "../components/Hero";
import Layout from "../layouts/BaseLayout";
import styles from "../styles/Home.module.scss";
import { NextPageWithLayout } from "../utilities/types";
import Button from "../components/Button";
import {
  FIFTH_SECTION_TITLE,
  FIRST_SECTION_DESCRIPTION,
  FIRST_SECTION_TITLE,
  FOURTH_SECTION_DESCRIPTION,
  FOURTH_SECTION_TITLE,
  GET_STARTED,
  HOME_TITLE,
  SECOND_SECTION_TITLE,
  THIRD_SECTION_DESCRIPTION,
  THIRD_SECTION_TITLE,
} from "../utilities/messages";
import ArrowIcon from "../svgComponents/ArrowIcon";
import CommonHeader from "../components/CommonHeader";
import Image from "next/image";
import CardCarousel from "../components/CardCarousel";
import Collapsible from "../components/Collapsible";
import { faq } from "../utilities/data";
import {
  GetIsLoginModalOpen,
  GetIsRegisterModalOpen,
  GetIsResetPModalOpen,
  SET_LOGIN_MODAL_OPEN,
} from "../redux/modalSlice";
import { useDispatch } from "react-redux";
import ModalLogin from "../components/Modal/ModalLogin";
import ModalRegister from "../components/Modal/ModalRegister";
import ModalResetP from "../components/Modal/ModalResetP";
import { setLogin, useIsUserLoggedIn } from "../redux/authSlice";
import { useRouter } from "next/router";
import setAuthorizationToken from "../helper/useAuthorizationToken";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isUserLoggedIn = useIsUserLoggedIn();
  const modalLoginIsOpen = GetIsLoginModalOpen();
  const modalResetPIsOpen = GetIsResetPModalOpen();
  const modalRegisterIsOpen = GetIsRegisterModalOpen();

  // we want to keep the user always logged in
  const token = useLocalStorage("token", "", true);
  console.log(token);
  if (token) {
    setAuthorizationToken(token);
    dispatch(setLogin(true));
  }
  return (
    <>
      {modalLoginIsOpen && <ModalLogin isOpen={modalLoginIsOpen} />}
      {modalRegisterIsOpen && <ModalRegister isOpen={modalRegisterIsOpen} />}
      {modalResetPIsOpen && <ModalResetP isOpen={modalResetPIsOpen} />}

      <CommonHeader>
        <title>{HOME_TITLE}</title>
      </CommonHeader>
      <section>
        <Hero />
        <div className={styles.firstSection}>
          <div className={styles.leftSection}>
            <h1 className={styles.boldText}>{FIRST_SECTION_TITLE}</h1>
            <p>{FIRST_SECTION_DESCRIPTION}</p>
            <div className={styles.actionArea}>
              <Button
                ripple
                className={styles.button}
                onClick={() => {
                  isUserLoggedIn
                    ? router.push("/dashboard")
                    : dispatch(SET_LOGIN_MODAL_OPEN(true));
                }}
              >
                <div className="items-center flex justify-center">
                  <span>{GET_STARTED}</span>
                  <span>
                    <ArrowIcon color="#FFFF" />
                  </span>
                </div>
              </Button>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.dashboard}>
              <img src="/svgs/dashboard__1.svg" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.secondSection}>
          <h1>{SECOND_SECTION_TITLE}</h1>
          <img src="/svgs/dashboard__2.svg" alt="" />
        </div>
        <div className={styles.thirdSection}>
          <div>
            <Image
              src="/images/transparent__plate.png"
              alt=""
              height={580}
              width={580}
              className={styles.imageOne}
            />
            <Image
              src="/images/transparent__plate.png"
              alt=""
              height={580}
              width={580}
              className={styles.imageTwo}
            />
          </div>
          <div className={styles.content}>
            <h1>{THIRD_SECTION_TITLE}</h1>
            <p>{THIRD_SECTION_DESCRIPTION}</p>
            <section className={styles.previewableImages}>
              <img src="/svgs/project__status.svg" />
              <img src="/svgs/activities.svg" />
            </section>
          </div>
        </div>
        <div className={`${styles.fourthSection}`}>
          <div>
            <img src="/svgs/cloud.svg" />
            <div className="d-flex flex-column">
              <h1>{FOURTH_SECTION_TITLE}</h1>
              <p>{FOURTH_SECTION_DESCRIPTION}</p>
              <div className={styles.actionArea}>
                <Button
                  ripple
                  className={styles.button}
                  onClick={() => {
                    isUserLoggedIn
                      ? router.push("/dashboard")
                      : dispatch(SET_LOGIN_MODAL_OPEN(true));
                  }}
                >
                  <div className="items-center flex justify-center">
                    <span>{GET_STARTED}</span>
                    <span>
                      <ArrowIcon color="#FFFF" />
                    </span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fifthSection}>
          <div className="d-flex flex-column align-items-center w-100">
            <h1>{FIFTH_SECTION_TITLE}</h1>
            <CardCarousel />
          </div>
        </div>
        <div className={styles.sixthSection}>
          <h1>Frequently Asked Questions</h1>

          <ul>
            {faq.map((item) => (
              <Collapsible key={item.id} title={item.title}>
                <span>{item.content}</span>
              </Collapsible>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
