'use client'

import styles from './styles/postacademia.module.css'
import { useState, useEffect, useContext } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import {
  getVideoById,
  updateVideo,
} from '@/services/api/api.academy.service.js'
import { UserContext } from '@/components/context/userContext'
import { errorMessage, successMessage } from '@/utils/notify'

const postred = () => {
  const router = useRouter()
  const pathname = router.pathname
  const { id } = useParams()
  const [video, setVideo] = useState({})
  const { user } = useContext(UserContext)
  const idToken = user.token
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [duration, setDuration] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    fetchVideo()
  }, [])

  useEffect(() => {
    if (video) {
      setTitle(video.title)
      setDescription(video.description)
      setUrl(video.materialURL)
      setDuration(video.duration)
      setAuthor(video.author)
    }
  }, [video])

  const fetchVideo = async () => {
    await getVideoById(id, idToken)
      .then((data) => {
        setVideo(data)
      })
      .catch(() => {
        setVideo({})
      })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      title,
      description,
      materialURL: url,
      duration,
    }
    await updateVideo(id, data, idToken)
      .then(() => {
        successMessage('Video editado exitosamente')
        router.push('/dashboard/academia')
      })
      .catch(() => {
        errorMessage('Error al editar el video')
      })
  }

  const navigateToacademia = () => {
    router.push('/dashboard/academia') // Ajusta la ruta según sea necesario
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
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>

            <div className={styles.redinput}>
              <label htmlFor="nombreOrganizacion">Autor</label>
              <input
                type="text"
                placeholder="Yorem ipsum dolor sit amet consectetur"
                id="nombreOrganizacion"
                value={author}
                disabled
              />
            </div>

            <div className={styles.redinput}>
              <label htmlFor="url">Ingrese URL</label>
              <input
                type="text"
                id="url"
                placeholder="http//:"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                required
              />
            </div>
            <div className={styles.rednumberinput}>
              <label htmlFor="url">Ingrese Duracion (Minutos)</label>
              <input
                type="number"
                id="duration"
                placeholder="1"
                value={duration}
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
                value={description}
                required
              />
            </div>
          </div>
          <div>
            <button type="submit" className={styles.buttonsave}>
              Actualizar Recurso
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default postred
