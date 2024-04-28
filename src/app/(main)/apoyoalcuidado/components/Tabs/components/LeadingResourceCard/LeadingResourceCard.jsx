import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/LeadingResorceCard.module.css'

const LeadingResourceCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h6 className={styles.communityName}>Comuna: Santiago Centro</h6>
        <h4 className={styles.title}>Credencial de Cuidador</h4>
        <p className={styles.p}>
          Es un hecho establecido desde hace mucho tiempo que un lector se
          distraerá con el contenido legible de una página cuando mire su
          diseño. El objetivo de utilizar Lorem Ipsum es que...
        </p>
        <Link href="#" target="_blank" className={styles.link}>
          https://www.youtube.com/watch?v=EDQ3kDQGgys&pp=ygUHbWlkdWRldg%3D%3D
        </Link>
      </div>
      <Image
        src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg"
        alt="fake image"
        width={300}
        height={200}
        loading="lazy"
        className={styles.image}
      />
    </div>
  )
}

export default LeadingResourceCard
