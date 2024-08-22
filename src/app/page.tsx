"use client"
import styles from "./page.module.scss";
import Link from "next/link";
import { Experiences } from "@/features/experiences/experiences";
import { Skills } from "@/features/skills/skils";
import SEO from "@/features/seo";

export default function Home() {


  const heroSection = (
    <div className={styles["hero-section"]}>
      <div className={styles.name}>
        <h1>Hello,</h1>
        <h1>I&apos;m Sheetal.</h1>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/sheetal-dadhich-a48980191/" target="_blank" rel="noopener noreferrer">
          <button type="button" className={styles['social-button']} >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z" fill="black" />
            </svg>

          </button>
        </Link>
        <Link href="https://github.com/Sheetal575" target="_blank" rel="noopener noreferrer">
          <button className={styles['social-button']} >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 2.23858 2.23858 0 5 0H27C29.7614 0 32 2.23858 32 5V27C32 29.7614 29.7614 32 27 32H5C2.23858 32 0 29.7614 0 27V5ZM8 16.1675C8 11.7639 11.5718 8.192 15.9755 8.192C20.3792 8.192 23.951 11.7639 24 16.1675C24 19.6905 21.7492 22.6752 18.5688 23.7516C18.1774 23.8006 18.0306 23.5559 18.0306 23.3602V21.1584C18.0306 20.4244 17.7859 19.9351 17.4924 19.6905C19.2538 19.4948 21.1132 18.8587 21.1132 15.7761C21.1132 14.8954 20.7706 14.1614 20.2814 13.6232C20.2852 13.6078 20.2906 13.5885 20.297 13.5655C20.3719 13.2953 20.5892 12.5111 20.1835 11.5192C20.1835 11.5192 19.4985 11.3235 17.9816 12.351C17.3456 12.2042 16.6605 12.1064 15.9755 12.1064C15.2905 12.1064 14.6055 12.1553 13.9694 12.351C12.4526 11.3235 11.7676 11.5192 11.7676 11.5192C11.3351 12.5763 11.6105 13.3975 11.6669 13.5657L11.6697 13.5743C11.1315 14.1614 10.8379 14.8464 10.8379 15.7272C10.8379 18.8097 12.6973 19.4948 14.4587 19.6905C14.263 19.8862 14.0184 20.2287 13.9694 20.7669C13.5291 20.9626 12.4037 21.3052 11.6697 20.0819C11.6697 20.0819 11.2294 19.299 10.4465 19.2501C10.4465 19.2501 9.66364 19.2501 10.3976 19.7394C10.3976 19.7394 10.9358 19.9841 11.2783 20.9137C11.2783 20.9137 11.7676 22.4795 13.9694 21.9902V23.3602C13.9694 23.5559 13.8226 23.8006 13.4312 23.7516C10.2997 22.6752 8 19.6905 8 16.1675Z" fill="black" />
            </svg>

          </button>
        </Link>
        <Link href="mailto:sheetaldadh9@gmail.com" target="_blank" rel="noopener noreferrer">
          <button className={styles['social-button']}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="5" fill="black" />
              <path d="M11.4643 15.5574V15.5529V11.0489L11.4228 11.0181H11.4193L10.4735 10.3183C9.89499 9.88873 9.07048 9.90951 8.55776 10.4153C8.21479 10.7548 8 11.226 8 11.7491V12.9969L11.4643 15.5574Z" fill="white" />
              <path d="M20.4717 15.5529V15.5574L23.936 12.9969V11.7491C23.936 11.2329 23.7281 10.7617 23.3886 10.4222C22.8829 9.91746 22.0843 9.85822 21.5096 10.2826L20.5133 11.0181L20.4717 11.0489V15.5529Z" fill="white" />
              <path d="M12.1572 16.0649L15.7622 18.7296C15.8845 18.8201 16.0518 18.8201 16.1741 18.7296L19.7788 16.0649V11.5609L15.968 14.3785L12.1572 11.5609V16.0649Z" fill="white" />
              <path d="M20.4717 16.4186V21.6536C20.4717 21.8448 20.6269 22 20.8181 22H23.0699C23.5483 22 23.936 21.6123 23.936 21.1339V13.8578L20.4717 16.4186Z" fill="white" />
              <path d="M11.4643 16.4186L8 13.8578V21.1339C8 21.6123 8.38766 22 8.86608 22H11.1179C11.3091 22 11.4643 21.8448 11.4643 21.6536V16.4186Z" fill="white" />
            </svg>

          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.animation_wrapper}>
        <div className={`${styles.particle} ${styles.particle_1}`}></div>
        <div className={`${styles.particle} ${styles.particle_2}`}></div>
        <div className={`${styles.particle} ${styles.particle_3}`}></div>
        <div className={`${styles.particle} ${styles.particle_4}`}></div>
      </div>

      <div className="page_wrapper">
        <section className={styles.main}>
          {heroSection}
        </section>
        <section id="experience">
          <Experiences />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div>

    </>
  );
}
