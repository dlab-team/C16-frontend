'use client'

import { IoIosArrowBack } from 'react-icons/io'
import Image from 'next/image'
import styles from './styles/formred.module.css'
import { AiOutlineUpload } from 'react-icons/ai'
import { useRouter } from 'next/navigation';


const FormRed = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const navigateToNuestraRed = () => {
    router.push('/dashboard/red'); // Ajusta la ruta según sea necesario
  };

  return (
    <div className={styles.formred}>
      <div className={styles.formtitle}>
        <div>
          <button   className={`${styles.formtitlebutton} ${pathname === '/dashboard/red' && styles.active}`}
          onClick={navigateToNuestraRed}
          >
            <IoIosArrowBack />
          </button>
          <h1>Nuestra red</h1>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.formborder}>
            <div className={styles.image}>
              <label htmlFor="uploadimage">
                <Image
                  width={177}
                  height={177}
                  src="https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/adm_image%2FFrame%2039944.png?alt=media&token=6a41f843-37e2-43d7-bd8d-9403619f80c5"
                  className={styles.profileImage}
                  alt=""
                />
              </label>

              <input
                type="file"
                id="uploadimage"
                className={styles.inpuUpload}
              />
              <div className={styles.iconimage}>
                <AiOutlineUpload />
              </div>
            </div>
            <div className={styles.redinput}>
              <label htmlFor="nombreOrganizacion">
                Nombre de la organización
              </label>
              <input type="text" id="nombreOrganizacion" />
            </div>
            <div className={styles.redinput}>
              <label htmlFor="url">Ingrese URL</label>
              <input type="text" id="url" />
            </div>
            <div className={styles.redDescription}>
              <label htmlFor="descripcion">Descripción</label>
              <input type="text" id="descripcion" />
            </div>
          </div>
          <div>
            <button className={styles.buttonsave}> Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormRed
