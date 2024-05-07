'use client'
import Image from 'next/image'
import { PiUploadSimpleBold } from 'react-icons/pi'
import { GoBackButton, SaveButton, TitleView } from '../../components'
import styles from './styles/Page.module.css'
import { useDashboardResources } from '../hooks'

const CreateResource = () => {
  const {
    description,
    setDescription,
    comuna,
    setComuna,
    url,
    setUrl,
    selectedImage,
    setSelectedImage,
    isLoading,
    handleCreateResource,
    fileInputRef,
    title,
    setTitle,
  } = useDashboardResources()

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
        <div className={styles.imageContainer}>
          <Image
            width={130}
            height={95}
            src={
              typeof selectedImage === 'string'
                ? selectedImage
                : URL.createObjectURL(selectedImage)
            }
            alt="Image selected to upload"
            className={styles.image}
          />
          <span className={styles.span}>
            <PiUploadSimpleBold size={18} />
          </span>
          <input
            type="file"
            accept="image/*"
            className={styles.inputImage}
            name="uploadImage"
            ref={fileInputRef}
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        </div>
        <h6 className={styles.title}>Título</h6>
        <input
          type="text"
          placeholder="título del recurso"
          className={styles.textArea}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h6 className={styles.title}>Descripción</h6>
        <textarea
          name="description"
          id="description"
          placeholder="descripción"
          cols="30"
          rows="3"
          className={styles.textArea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h6 className={styles.title}>Comuna</h6>
        <input
          type="text"
          placeholder="Providencia"
          className={styles.textArea}
          value={comuna}
          onChange={(e) => setComuna(e.target.value)}
        />
        <h6 className={styles.title}>Ingrese URL</h6>
        <input
          type="url"
          placeholder="https://ejemplo.com"
          className={styles.textArea}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className={styles.saveButtonContainer}>
        <SaveButton
          title="Guardar cambios"
          handlePress={handleCreateResource}
          isLoading={isLoading}
        />
      </div>
    </section>
  )
}

export default CreateResource
