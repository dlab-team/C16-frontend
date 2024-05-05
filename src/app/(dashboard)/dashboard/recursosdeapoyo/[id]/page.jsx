'use client'
import { AiOutlineCheck } from 'react-icons/ai'
import { PiUploadSimpleBold } from 'react-icons/pi'
import Image from 'next/image'
import { FiTrash } from 'react-icons/fi'
import {
  DeleteResourceModal,
  GoBackButton,
  SaveButton,
  Spinner,
  TitleView,
} from '../../components'
import mainStyles from './styles/PageId.module.css'
import styles from '../components/ResourceView/styles/ResourceView.module.css'
import { useDashboardResources } from '../hooks'

const EditResource = () => {
  const {
    isLoading,
    handleDeleteResourceById,
    handleGoBack,
    dialogIsOpen,
    setDialogIsOpen,
    description,
    setDescription,
    comuna,
    setComuna,
    url,
    setUrl,
    highlighted,
    setHighlighted,
    image,
    setImage,
    resourceId,
    handleUpdateResourceById,
    fileInputRef,
  } = useDashboardResources()

  return (
    <section className={mainStyles.container}>
      <GoBackButton />
      <TitleView
        title="Recursos de"
        italicTitle="Apoyo"
        showIcons={true}
        redirectTo="/dashboard/recursosdeapoyo/crear"
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={mainStyles.wrapper}>
            <div className={styles.container}>
              <div className={styles.leftContainer}>
                <div className={mainStyles.imageContainer}>
                  <Image
                    width={130}
                    height={95}
                    src={
                      typeof image === 'string'
                        ? image
                        : URL.createObjectURL(image)
                    }
                    alt={description}
                    className={styles.image}
                  />
                  <span className={mainStyles.span}>
                    <PiUploadSimpleBold size={18} />
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className={mainStyles.inputImage}
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className={styles.textContainer}>
                  <h5 className={styles.title}>Descripción</h5>
                  <textarea
                    name="description"
                    required
                    autoFocus
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={mainStyles.description}
                  />
                  <label htmlFor="remember" className={styles.rememberInput}>
                    <div className={styles.checkboxContainer}>
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        className={styles.checkboxRound}
                        checked={highlighted}
                        onChange={() => setHighlighted(!highlighted)}
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
                    value={comuna}
                    onChange={(e) => setComuna(e.target.value)}
                  />
                </div>
                <div className={styles.wrapper}>
                  <h5 className={styles.title}>Link</h5>
                  <input
                    type="text"
                    className={mainStyles.link}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={`${styles.button} ${styles.remove}`}
                    onClick={() => setDialogIsOpen(!dialogIsOpen)}
                  >
                    <FiTrash size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={mainStyles.buttonContainer}>
            <SaveButton
              handlePress={() => handleUpdateResourceById(resourceId)}
              isLoading={isLoading}
            />
          </div>
          {dialogIsOpen && (
            <DeleteResourceModal
              dialogIsOpen={dialogIsOpen}
              setDialogIsOpen={setDialogIsOpen}
              message="¿Estás seguro que deseas eliminar este recurso?"
              okButtontext="Eliminar"
              cancelButtonText="Cancelar"
              handleDelete={() => {
                handleDeleteResourceById(resourceId)
                handleGoBack()
              }}
              isLoading={isLoading}
            />
          )}
        </>
      )}
    </section>
  )
}

export default EditResource
