import { AiOutlineCheck } from 'react-icons/ai'
import Image from 'next/image'
import { FiTrash } from 'react-icons/fi'
import { GoBackButton, SaveButton, TitleView } from '../../components'
import mainStyles from './styles/PageId.module.css'
import styles from '../components/ResourceView/styles/ResourceView.module.css'

const EditResource = () => {
  return (
    <section className={mainStyles.container}>
      <GoBackButton />
      <TitleView
        title="Recursos de"
        italicTitle="Apoyo"
        showIcons={true}
        redirectTo="/dashboard/recursosdeapoyo/crear"
      />
      <div className={mainStyles.wrapper}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <Image
              width={130}
              height={95}
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg"
              alt="Resource"
              className={styles.image}
            />
            <div className={styles.textContainer}>
              <h5 className={styles.title}>Descripción</h5>
              <textarea
                name="description"
                required
                autoFocus
                value={
                  'Sorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
                className={mainStyles.description}
              />
              <label htmlFor="remember" className={styles.rememberInput}>
                <div className={styles.checkboxContainer}>
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className={styles.checkboxRound}
                  />
                  <span className={styles.span}>
                    <AiOutlineCheck size={10} />
                  </span>
                </div>
                Destacar recurso
              </label>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.wrapper}>
              <h5 className={styles.title}>Comuna</h5>
              <input
                type="text"
                className={mainStyles.input}
                value={'Providencia'}
              />
            </div>
            <div className={styles.wrapper}>
              <h5 className={styles.title}>Link</h5>
              <input type="text" className={mainStyles.link} value={'http'} />
            </div>
            <div className={styles.buttonContainer}>
              <button className={`${styles.button} ${styles.remove}`}>
                <FiTrash size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={mainStyles.buttonContainer}>
        <SaveButton />
      </div>
    </section>
  )
}

export default EditResource
