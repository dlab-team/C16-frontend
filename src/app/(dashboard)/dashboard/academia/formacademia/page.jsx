'use client'

import { IoIosArrowBack } from 'react-icons/io'
import Image from 'next/image'
import styles from './styles/formacademia.module.css'
import { AiOutlineUpload } from 'react-icons/ai'
import { useRouter } from 'next/navigation';


const Formacademia = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const navigateToacademia = () => {
    router.push('/dashboard/academia'); // Ajusta la ruta según sea necesario
  };

  return (
    <div className={styles.Formacademia}>
      <div className={styles.formtitle}>
        <div>
          <button   className={`${styles.formtitlebutton} ${pathname === '/dashboard/academia' && styles.active}`}
          onClick={navigateToacademia}
          >
            <IoIosArrowBack />
          </button>
          <div className={styles.titleAcademia}>
          <h1>Recursos de <p className={styles.titlephilosofer}>Academia</p> </h1>
          </div>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.formborder}>

            {/*
            para subir imagen 
            
            
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
            </div> */}

            <div className={styles.redinput}>
              <label htmlFor="nombreOrganizacion">
            Titulo
              </label>
              <input type="text" placeholder='Yorem ipsum dolor sit amet consectetur' id="nombreOrganizacion" />
            </div>

        
        

            <div className={styles.redinput}>
              <label htmlFor="url">Ingrese URL</label>
              <input type="text" id="url"  placeholder='http//:'/>
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

export default Formacademia
