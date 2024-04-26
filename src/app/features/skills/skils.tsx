import { BallCanvas } from "../../components/canvas"
import { technologies } from "../constants"
import { Contact } from "../contact/contact"
import styles from "./skills.module.css"

export const Skills = () => {
    return (
        <div className={styles.skills}>
            <div>
                <div className={styles.heading}>
                    Skills
                    <div className={styles.heading__line} />
                </div>
                <div className={styles['subHeading']}>
                    Technologies & Tools
                </div>
            </div>
            <div className={styles['skills__ball']}>
                {technologies.map((technology) => (
                    <div  key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
            <Contact />
        </div>
    )
}