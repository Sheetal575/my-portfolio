import styles from "./contact.module.scss";
export const Contact = () => {
  const handleDownloadResume = () => {
    window.open("https://shorturl.at/244MY", "_blank");
  };

  return (
    <div className={styles.contact}>
      <div>
        <div>Let&apos;s get in touch : )</div>
        <div className={styles['contact-email']}>sheetaldadh9@gmail.com</div>
      </div>
      <div className={styles.contact__button}>
        <button
          className={styles.download_button}
          onClick={handleDownloadResume}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};
