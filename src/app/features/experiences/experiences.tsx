import styles from "./experiences.module.scss";
export const Experiences = () => {
    return (
        <div className={styles.experience} id="experience">
            <div>Experiences</div>
            <div>
                <div className={styles['hand-drawn-line']} />
            </div>
            <div>
                <div className={styles['experience-card']}>
                    KLubworks
                </div>
                <div className={styles['experience-card']}>
                    KLubworks
                </div>
                <div className={styles['experience-card']}>
                    KLubworks
                </div>
            </div>

        </div>
    )
}
