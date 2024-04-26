import styles from "./contact.module.css"
export const Contact = () => {
    return (
        <div className={styles.contact}>
            <div>
                <div>Let&apos;s get in touch?</div>
                <button className={styles.download_button}>Download Resume</button>
            </div>
        </div>
    )
}