import Image from 'next/image'
import styles from './styles/AcademyCard.module.css'

const AcademyCard = () => {
  return (
    <div className={styles.cardContainer}>
      <Image
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg"
        alt="card image"
        width={350}
        height={200}
        loading="lazy"
        className={styles.cardImage}
      />
      <div className={styles.textBox}>
        <h4 className={styles.title}>Title</h4>
        <h6 className={styles.description}>
          Lörem ipsum sugrörsseende proda sask för suprana.
        </h6>
        <p className={styles.duration}>
          Duration: <span className={styles.durationSpan}>7 mins</span>
        </p>
        <p className={styles.date}>12 feb 2024</p>
      </div>
    </div>
  )
}

export default AcademyCard
