'use client'
import styles from './styles/creditos.module.css'
import Image from 'next/image'
import { CiLinkedin } from 'react-icons/ci'
const creditos = () => {
  const Backend = [
    {
      id: 1,
      nombre: 'Angel Hincho',
      url: '',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2010.png?alt=media&token=f0284169-6059-4d56-8ff6-fda589c14515',
    },
    {
      id: 2,
      nombre: 'Ernesto Lopez',
      url: 'https://www.linkedin.com/in/ernesto-lopez-5a21941a1/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2015.png?alt=media&token=bfdedaf6-f701-4e09-a272-a806ed592cfe',
    },
    {
      id: 3,
      nombre: 'Felipe Burboa',
      url: 'https://www.linkedin.com/in/felipe-burboa/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2F1702327400235%201.png?alt=media&token=03f8ea6a-42bb-4af8-9b3f-48a2de0085cf',
    },
    {
      id: 4,
      nombre: 'Felipe Guzman',
      url: ' https://www.linkedin.com/in/felipe-guzman102/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2010.png?alt=media&token=f0284169-6059-4d56-8ff6-fda589c14515',
    },
  ]

  const diseño = [
    {
      id: 1,
      nombre: 'Bárbara Gutierrez',
      url: 'https://www.linkedin.com/in/bagutierrezv',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2013.png?alt=media&token=dd8c8f17-1d02-49a8-8bea-9d05afb898a0',
    },
    {
      id: 2,
      nombre: 'Macarena Ramdohr',
      url: '',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2014.png?alt=media&token=e1238045-53bc-449b-98b1-0045f78966ed',
    },
    {
      id: 3,
      nombre: 'Paula Mendez',
      url: 'https://www.linkedin.com/in/paulamr/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2010.png?alt=media&token=f0284169-6059-4d56-8ff6-fda589c14515',
    },
  ]
  const frontend = [
    {
      id: 1,
      nombre: 'Sebastian Güiza',
      url: 'https://www.linkedin.com/in/sebastian-güiza/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2012.png?alt=media&token=325ab9d7-1e75-484b-9156-9ee873b7c653',
    },

    {
      id: 2,
      nombre: 'Diego Fernandez',
      url: 'https://www.linkedin.com/in/diegofernandezdev/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2010.png?alt=media&token=f0284169-6059-4d56-8ff6-fda589c14515',
    },
    {
      id: 3,
      nombre: 'Ingrid Morales',
      url: 'https://www.linkedin.com/in/ingrid-morales-mu%C3%B1oz-412538127/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%209.png?alt=media&token=de35def7-0a79-4c8e-8660-d63222ac6c4c',
    },
    {
      id: 4,
      nombre: 'Manuel Florez',
      url: 'https://www.linkedin.com/in/manuel14mds/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2011.png?alt=media&token=a302780d-b691-4385-9a2c-4eb49488c593',
    },

    {
      id: 5,
      nombre: 'Daniel García',
      url: '',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2018.png?alt=media&token=c0bc3187-ee58-48d1-b9b2-ae72dec4a049',
    },
  ]

  const TlPo = [
    {
      id: 1,
      nombre: 'René Donaire',
      url: 'https://www.linkedin.com/in/rene-donaire/',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2016.png?alt=media&token=0b716f66-6458-4ebc-bc63-a909b50e6935',
    },
    {
      id: 2,
      nombre: 'Mauricio Santelices',
      url: '',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2Fno%20tocar!%2FRectangle%2017.png?alt=media&token=cd8c69f2-9ddf-43b5-8a49-9d507cf7caf4',
    },
  ]

  return (
    <div className={styles.credits}>
      <h1 className={styles.creditsTitle}>Equipo de Desarrollo</h1>
      <div className={styles.team}>
        <h3 className={styles.subtitle}> Backend</h3>
        <div className={styles.seccionparner}>
          {Backend.map((user) => (
            <div key={user.id} className={styles.parner}>
              <Image
                src={user.photo}
                width={130}
                height={130}
                alt={user.nombre}
                className={styles.userphoto}
              />
              <strong>{user.nombre}</strong>
              {user.url && (
                <a className={styles.link} href={user.url} target="_blank">
                  <CiLinkedin />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.team}>
        <h3> Diseño UX/UI</h3>
        <div className={styles.seccionparner}>
          {diseño.map((user) => (
            <div key={user.id} className={styles.parner}>
              <Image
                src={user.photo}
                width={130}
                height={130}
                alt={user.nombre}
                className={styles.userphoto}
              />
              <strong>{user.nombre}</strong>
              {user.url && (
                <a className={styles.link} href={user.url} target="_blank">
                  <CiLinkedin />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.team}>
        <h3> Frontend</h3>
        <div className={styles.seccionfrontend}>
          {frontend.map((user) => (
            <div key={user.id} className={styles.parner}>
              <Image
                src={user.photo}
                width={130}
                height={130}
                alt={user.nombre}
                className={styles.userphoto}
              />
              <strong>{user.nombre}</strong>
              {user.url && (
                <a className={styles.link} href={user.url} target="_blank">
                  <CiLinkedin />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.team}>
        <h3> Technical Líder - Product Owner</h3>
        <div className={styles.seccionTLPO}>
          {TlPo.map((user) => (
            <div key={user.id} className={styles.parner}>
              <Image
                src={user.photo}
                width={130}
                height={130}
                alt={user.nombre}
                className={styles.userphoto}
              />
              <strong>{user.nombre}</strong>
              {user.url && (
                <a className={styles.link} href={user.url} target="_blank">
                  <CiLinkedin />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default creditos
