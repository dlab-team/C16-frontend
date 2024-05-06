import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/TabCards.module.css'
import { useResources } from '../../../../hooks'

function TabCards() {
  const { allResources } = useResources()

  return (
    <>
      {Object.keys(allResources)?.length > 0 ? (
        <div className={styles.container}>
          {allResources?.map((item) => (
            <div className={styles.cardContainer} key={item?.id}>
              <Image
                src={item?.image}
                alt={item?.description}
                width={300}
                height={200}
                loading="lazy"
                className={styles.cardImage}
              />
              <h6 className={styles.communityName}>Comuna: {item?.comuna}</h6>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{item?.title}</h3>
                <p className={styles.p}>{item?.description}</p>
                <Link href={item?.url} target="_blank" className={styles.link}>
                  {item?.url}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>No hay recursos para mostrar</h2>
      )}
    </>
  )
}

export default TabCards
