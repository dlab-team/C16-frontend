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
    name,
    setName,
    url,
    setUrl,
    image,
    setImage,
    partnerId,
    handleUpdateResourceById,
    fileInputRef,
  } = useDashboardResources()

  return (
    <section className={mainStyles.container}>
      <GoBackButton />
      <TitleView
        title="Nuestra Red"
        showIcons={true}
        redirectTo="/dashboard/red/crear"
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
                <div className={styles.wrapper}>
                  <h5 className={styles.title}>Nombre</h5>
                  <input
                    type="text"
                    className={mainStyles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.rightContainer}>
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
              handlePress={() => handleUpdateResourceById(partnerId)}
              isLoading={isLoading}
            />
          </div>
          {dialogIsOpen && (
            <DeleteResourceModal
              dialogIsOpen={dialogIsOpen}
              setDialogIsOpen={setDialogIsOpen}
              message="¿Estás seguro que deseas eliminar este aliado?"
              okButtontext="Eliminar"
              cancelButtonText="Cancelar"
              handleDelete={() => {
                handleDeleteResourceById(partnerId)
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
