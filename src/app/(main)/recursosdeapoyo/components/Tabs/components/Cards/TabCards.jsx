import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/TabCards.module.css'
import { useResources } from '../../../../hooks'

function TabCards() {
  const { resources } = useResources()

  return (
    <div
      style={
        resources.length > 3
          ? { 'justify-content': 'space-between' }
          : { 'justify-content': 'flex-start' }
      }
      className={styles.container}
    >
      {resources.map((item) => (
        <div className={styles.cardContainer} key={item?.id}>
          <Image
            src={item?.imgUrl}
            alt={item?.title}
            width={300}
            height={200}
            loading="lazy"
            className={styles.cardImage}
          />
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{item?.title}</h3>
            <p className={styles.p}>{item?.content}</p>
            <div className={styles.dateWrapper}>
              <small className={styles.dateText}>{item?.createdAt}</small>
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
