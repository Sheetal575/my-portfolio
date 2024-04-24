import styles from "./contact.module.scss"
export const Contact = () => {
    return (
        <div className={styles.contact}>
            <div>
                <div>Let's get in touch?</div>
                <button className={styles['download-button']}>Download Resume</button>
            </div>
        </div>
    )
}