'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineComment,
  AiOutlineFile,
  AiOutlinePlaySquare,
  AiOutlineTeam,
  AiOutlineLogout,
} from 'react-icons/ai'
import styles from './styles/MainButtons.module.css'

const MainButtons = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <section className={styles.mainButtonsContainer}>
      <Link href="/" className={styles.link}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/iconos%2FRNC_Horizontal_Color.png?alt=media&token=7d7203c1-39ce-4e3f-b560-e7194ea0f8ac"
          alt="logo Ronda"
          width={230}
          height={158}
          loading="lazy"
          className={styles.logo}
        />
      </Link>
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${pathname === '/dashboard' && styles.active}`}
          onClick={() => router.push('/dashboard')}
        >
          <AiOutlineHome />
          Inicio
        </button>
        <button
          className={`${styles.button} ${pathname === '/dashboard/usuarios' && styles.active}`}
          onClick={() => router.push('/dashboard/usuarios')}
        >
          <AiOutlineUser />
          Usuarios
        </button>
        <button
          className={`${styles.button} ${pathname === '/dashboard/comentarios' && styles.active}`}
          onClick={() => router.push('/dashboard/comentarios')}
        >
          <AiOutlineComment />
          Comentarios
        </button>
        <button
          className={`${styles.button} ${pathname === '/dashboard/recursosdeapoyo' && styles.active}`}
          onClick={() => router.push('/dashboard/recursosdeapoyo')}
        >
          <AiOutlineFile />
          Recursos de Apoyo
        </button>
        <button
          className={`${styles.button} ${pathname === '/dashboard/academia' && styles.active}`}
          onClick={() => router.push('/dashboard/academia')}
        >
          <AiOutlinePlaySquare />
          Recursos de Academia
        </button>
        <button
          className={`${styles.button} ${pathname === '/dashboard/red' && styles.active}`}
          onClick={() => router.push('/dashboard/red')}
        >
          <AiOutlineTeam />
          Nuestra Red
        </button>
        <button className={styles.button}>
          <AiOutlineLogout />
          Cerrar Sesión
        </button>
      </div>
    </section>
  )
}

export default MainButtons
