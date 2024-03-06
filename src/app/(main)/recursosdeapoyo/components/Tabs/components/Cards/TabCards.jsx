import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/TabCards.module.css'

const MY_ARRAY = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

function TabCards() {
  return (
    <div className={styles.container}>
      {MY_ARRAY.map((item) => (
        <div className={styles.cardContainer} key={item.id}>
          <Image
            src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg"
            alt="programming image"
            width={300}
            height={200}
            loading="lazy"
            className={styles.cardImage}
          />
          <div className={styles.textContainer}>
            <h3 className={styles.title}>Titulo</h3>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              quis perferendis modi consectetur explicabo neque harum vitae
              eaque illo quam! Eveniet, nisi? Numquam aliquam blanditiis qui
              suscipit veritatis eos odio?
            </p>
            <div className={styles.dateWrapper}>
              <small className={styles.dateText}>May 20th 2020</small>
              <Link href="#" className={styles.link}>
                Leer más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TabCards
