'use client'

import { IoIosArrowBack } from 'react-icons/io'
import styles from './styles/formacademia.module.css'
import { useRouter } from 'next/navigation'
import { createVideo } from '@/services/api/api.academy.service.js'
import { useContext, useState } from 'react'
import { UserContext } from '@/components/context/userContext'
import { errorMessage, successMessage } from '@/utils/notify'

const Formacademia = () => {
  const router = useRouter()
  const pathname = router.pathname
  const { user } = useContext(UserContext)
  const idToken = user.token
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [duration, setDuration] = useState('')

  const navigateToacademia = () => {
    router.push('/dashboard/academia') // Ajusta la ruta según sea necesario
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      title,
      description,
      materialURL: url,
      duration,
    }
    await createVideo(data, idToken)
      .then(() => {
        successMessage('Video creado exitosamente')
        router.push('/dashboard/academia')
      })
      .catch(() => {
        errorMessage('Error al crear el video')
      })
  }

  return (
    <div className={styles.Formacademia}>
      <div className={styles.formtitle}>
        <div>
          <button
            className={`${styles.formtitlebutton} ${pathname === '/dashboard/academia' && styles.active}`}
            onClick={navigateToacademia}
          >
            <IoIosArrowBack />
          </button>
          <div className={styles.titleAcademia}>
            <h1>
              Recursos de <p className={styles.titlephilosofer}>Academia</p>
            </h1>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formborder}>
            <div className={styles.redinput}>
              <label htmlFor="nombreOrganizacion">Titulo</label>
              <input
                type="text"
                placeholder="Yorem ipsum dolor sit amet consectetur"
                id="nombreOrganizacion"
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>

            <div className={styles.redinput}>
              <label htmlFor="url">Ingrese URL</label>
              <input
                type="text"
                id="url"
                placeholder="http//:"
                onChange={(event) => setUrl(event.target.value)}
                required
              />
            </div>
            <div className={styles.rednumberinput}>
              <label htmlFor="url">Ingrese Dúracion (Minutos)</label>
              <input
                type="number"
                id="duration"
                placeholder="1"
                min="1"
                onChange={(event) => setDuration(event.target.value)}
                required
              />
            </div>
            <div className={styles.redDescription}>
              <label htmlFor="descripcion">Descripción</label>
              <input
                type="text"
                id="descripcion"
                placeholder="Descripción corta del video"
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <button type="submit" className={styles.buttonsave}>
              Crear Recurso
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Formacademia
