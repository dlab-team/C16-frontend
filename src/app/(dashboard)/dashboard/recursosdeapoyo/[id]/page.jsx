'use client'
import { AiOutlineCheck, AiOutlineDown } from 'react-icons/ai'
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
import regionesData from '../../../../(auth)/auth/componets/CompleteProfile/regionesData.json'
import filterStyles from '../../../../(main)/apoyoalcuidador/components/Tabs/components/FiltersView/styles/FiltersView.module.css'

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
    title,
    setTitle,
    region,
    setRegion,
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
            <div className={styles.container} style={{ height: 'auto' }}>
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
                  <h5 className={styles.title}>Título</h5>
                  <input
                    type="text"
                    className={mainStyles.input}
                    style={{ width: '25rem', marginBottom: '0.8rem' }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
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
                <div className={styles.wrapper} style={{ width: '14rem' }}>
                  <h5 className={styles.title}>Comuna</h5>
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
                      {region === 'none' || region !== '' ? (
                        <>
                          {regionesData.regiones
                            .find((r) => r?.region === region)
                            ?.comunas?.map((comuna, index) => (
                              <option key={index} value={comuna}>
                                {comuna}
                              </option>
                            ))}
                        </>
                      ) : (
                        <option value={comuna}>{comuna}</option>
                      )}
                    </select>
                    <AiOutlineDown className={filterStyles.icon} />
                  </div>
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
