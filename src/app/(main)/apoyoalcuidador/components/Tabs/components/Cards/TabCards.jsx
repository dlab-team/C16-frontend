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
          ? { justifyContent: 'space-between' }
          : { justifyContent: 'flex-start' }
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
          <h6 className={styles.communityName}>Comuna: Santiago Centro</h6>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{item?.title}</h3>
            <p className={styles.p}>{item?.content}</p>
            <Link href="#" target="_blank" className={styles.link}>
              https://www.youtube.com/watch?v=EDQ3kDQGgys&pp=ygUHbWlkdWRldg%3D%3D
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TabCards
