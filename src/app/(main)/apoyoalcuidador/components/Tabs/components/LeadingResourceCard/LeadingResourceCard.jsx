import Image from 'next/image'
import Link from 'next/link'
import styles from './styles/LeadingResourceCard.module.css'
import { useResources } from '@/app/(main)/apoyoalcuidador/hooks'

const LeadingResourceCard = () => {
  const { leadingResource } = useResources()

  return (
    <>
      {Object.keys(leadingResource)?.length > 0 && (
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h6 className={styles.communityName}>
              Comuna: {leadingResource?.comuna}
            </h6>
            <h4 className={styles.title}>{leadingResource?.title}</h4>
            <p className={styles.p}>{leadingResource?.description}</p>
            <Link
              href={leadingResource?.url}
              target="_blank"
              className={styles.link}
            >
              {leadingResource?.url}
            </Link>
          </div>
          <Image
            src={leadingResource?.image}
            alt={leadingResource?.description}
            width={300}
            height={200}
            loading="lazy"
            className={styles.image}
          />
        </div>
      )}
    </>
  )
}

export default LeadingResourceCard
