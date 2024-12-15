import styles from "./experiences.module.scss"

const experiences = [
  {
    date: "JANUARY 2023 - PRESENT",
    title: "Software Developer 1",
    company: "Klubworks",
    description:  <p>Responsible for frontend developement of internal application <b>Portal</b> with open source <b>Camunda Workflow</b> which helps business team to do their task and easy tracking,&nbsp;
    <b>Klub AI</b>, platform for easy onboarding for brands and better UX for data visualization and real-time chat functionality,&nbsp;
    <b>Component Library</b> with 20+ reusable UI components, ensuring consistent design language, improved developer productivity, and enhanced cross-application user experience.
    </p>
  },
  {
    date: "JANUARY 2022 - DECEMBER 2023",
    title: "Software Developer Intern",
    company: "Viga Entertainment Pvt Ltd",
    description: "Focused on developing responsive frontend features, including video visualization tools, 3D modal viewers with react-three/fibre, responsive task management views including table, card , gantt to track tasks and application settings to customise features."
  },
  {
    date: "MAY 2022 - JULY 2022",
    title: "Software Developer Intern",
    company: "TruckBuddy",
    description: "Developed logistics management dashboards and interfaces to track truck reports, manage driver statuses, and streamline operational processes using frontend technologies."
  }
]


export const Experiences = () => {

  return (
    <div className={styles['experience-box']}>
      <div className={styles.heading}>
        <div>Work History</div>
        <div className={styles.heading__line} />
      </div>
      <div className={styles.experience}>
        <div>
          {experiences.map((data, index) => (
            <div key = {index}>
              <div className={styles['experience--date']}>{data?.date}</div>
              <div>
                <div className={styles['experience--title']}>{data?.title}</div>
                <div className={styles['experience--company']}>{data?.company}</div>
                <div className={styles['experience--description']}>{data?.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
