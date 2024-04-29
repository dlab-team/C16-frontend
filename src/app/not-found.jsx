'use client'
import styles from './styles/notfound.module.css'
import Image from 'next/image'

import { useRouter } from 'next/navigation';

const Notfound = () => {

  const router = useRouter();
  const pathname = router.pathname;


  const comebackhome = () => {
    router.push('/'); // Ajusta la ruta según sea necesario
  };
  return (
    <div className={styles.Notfound}>
 <Image
            width={177}
            height={177}
            src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FA%20man%20studies%20a%20tourist%20route.png?alt=media&token=e263ac44-a2bf-4d0b-bc0a-66ec2c1e6bf3"
            className={styles.NotfoundImage}
            alt="notfound"
          />
          <div className={styles.textcontainer} >
            <h1 className={styles.title}> ERROR 404</h1>
            <p className={styles.text}> Página no <br /> encontrada!</p>
            <button  className={`${styles.buttonback} ${pathname === '/' && styles.active}`}
            onClick={comebackhome}>Volver a Home</button>
          </div>
    </div>
  )
}

export default Notfound
