import styles from "./experiences.module.css"

const experiences = [
  {
    date: "JANUARY 2023 - PRESENT",
    title: "Software Developer",
    company: "Klubworks",
    description: "Automated critical processes, reducing manual efforts up to 100% through file parsing, consent integration, and workflow monitoring solutions. Leveraged Zeebe workflow automation to accelerate disbursement by 65% for risk, growth, and business development tasks. Developed reusable component libraries and platforms for offer generation, review, document sharing, and investment monitoring."
  },
  {
    date: "JANUARY 2022 - DECEMBER 2023",
    title: "Software Developer Intern",
    company: "Viga Entertainment Pvt Ltd",
    description: "Developed a comprehensive video editing solution featuring a shot sequencer for seamless import, rearrangement, and deletion of shots, improving overall visualization using ReactJS."
  },
  {
    date: "MAY 2022 - JULY 2022",
    title: "Software Developer Intern",
    company: "TruckBuddy",
    description: "Developed a logistics Dashboard using AngularJS for tracking trucks, reports, settlements, and customer logistics details."
  }
]


export const Experiences = () => {

  return (
    <div className={styles['experience-box']}>
      <div className={styles.heading}>
        Work History
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
