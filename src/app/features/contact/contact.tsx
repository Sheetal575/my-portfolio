import styles from "./contact.module.scss"
export const Contact = () => {

    return (
        <div className={styles.contact}>
            <div>
                <div>Let&apos;s get in touch?</div>
                <div className={styles.contact__button}>
                    <button className={styles.download_button}>Download Resume</button>
                    <button className={styles.email_button}>sheetaldadh9@gmail.com</button>
                </div>
            </div>
        </div>
    )
}