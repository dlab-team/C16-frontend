'use client'
import Image from 'next/image'
import { PiUploadSimpleBold } from 'react-icons/pi'
import { AiOutlineDown } from 'react-icons/ai'
import { GoBackButton, SaveButton, TitleView } from '../../components'
import styles from './styles/Page.module.css'
import { useDashboardResources } from '../hooks'
import regionesData from '../../../../(auth)/auth/componets/CompleteProfile/regionesData.json'
import filterStyles from '../../../../(main)/apoyoalcuidador/components/Tabs/components/FiltersView/styles/FiltersView.module.css'

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
    region,
    setRegion,
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
        <div
          className={filterStyles.selectContainer}
          style={{ marginBottom: '0.6rem' }}
        >
          <select
            name="region"
            id="region"
            className={filterStyles.select}
            value={region}
            onChange={(e) => {
              setRegion(e.target.value)
              setComuna('none')
            }}
          >
            <option value="none">Selecciona región</option>
            {regionesData?.regiones.map((region, index) => (
              <option key={index} value={region?.region}>
                {region?.region}
              </option>
            ))}
          </select>
          <AiOutlineDown className={filterStyles.icon} />
        </div>
        <div
          className={filterStyles.selectContainer}
          style={{ marginBottom: '1rem' }}
        >
          <select
            name="comuna"
            id="comuna"
            value={comuna}
            onChange={(e) => {
              setComuna(e.target.value)
            }}
            disabled={region === 'none'}
            className={filterStyles.select}
            required
          >
            <option value="none">Selecciona comuna</option>
            {regionesData.regiones
              .find((r) => r?.region === region)
              ?.comunas?.map((comuna, index) => (
                <option key={index} value={comuna}>
                  {comuna}
                </option>
              ))}
          </select>
          <AiOutlineDown className={filterStyles.icon} />
        </div>
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
