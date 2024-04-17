import Image from 'next/image'
import { GoBackButton, SaveButton, TitleView } from '../../components'
import styles from './styles/Page.module.css'

const CreateResource = () => {
  return (
    <section className={styles.container}>
      <GoBackButton />
      <TitleView
        title="Recursos de"
        italicTitle="Apoyo"
        showIcons={false}
        redirectTo="/dashboard/recursosdeapoyo/crear"
      />
      <div className={styles.wrapper}>
        <Image
          width={130}
          height={95}
          src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg"
          alt="Resource"
          className={styles.image}
        />
        <h6 className={styles.title}>Descripción</h6>
        <textarea
          name="description"
          id="description"
          placeholder="descripción"
          cols="30"
          rows="3"
          className={styles.textArea}
        />
        <h6 className={styles.title}>Comuna</h6>
        <input
          type="text"
          placeholder="Providencia"
          className={styles.textArea}
        />
        <h6 className={styles.title}>Ingrese URL</h6>
        <input
          type="url"
          placeholder="Providencia"
          className={styles.textArea}
        />
      </div>
      <div className={styles.saveButtonContainer}>
        <SaveButton />
      </div>
    </section>
  )
}

export default CreateResource
