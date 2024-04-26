'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
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
import { DeleteResourceModal } from '..'

const MainButtons = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

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
        <button
          className={styles.button}
          onClick={() => setDialogIsOpen(!dialogIsOpen)}
        >
          <AiOutlineLogout />
          Cerrar Sesión
        </button>
      </div>
      {dialogIsOpen && (
        <DeleteResourceModal
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
          message="¿Estás seguro que deseas Cerrar Sesión?"
          cancelButtonText="Cancelar"
          okButtontext="Cerrar"
        />
      )}
    </section>
  )
}

export default MainButtons
