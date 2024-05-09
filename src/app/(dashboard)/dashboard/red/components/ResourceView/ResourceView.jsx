'use client'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCheck, AiOutlineEdit } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'
import styles from './styles/ResourceView.module.css'
import { DeleteResourceModal } from '../../../components'
import { useDashboardResources } from '../../hooks'

const ResourceView = () => {
  const {
    dialogIsOpen,
    setDialogIsOpen,
    handleNavigateToResource,
    handleDeleteResourceById,
    isLoading,
    allResources,
    handleDeleteButtonClick,
    setResourceEliminated,
    resourcesEliminated,
  } = useDashboardResources()
  console.log(allResources)
  return (
    <>
      {allResources?.map((resource) => (
        <div className={styles.container} key={resource?.id}>
          <div className={styles.leftContainer}>
            <Image
              width={130}
              height={95}
              src={resource?.image}
              alt={resource?.description}
              className={styles.image}
            />
            <div className={styles.wrapper}>
              <h5 className={styles.title}>Nombre</h5>
              <p className={`${styles.description} ${styles.field}`}>
                {resource?.name}
              </p>
            </div>

            <div className={styles.textContainer}>
              <h5 className={styles.title}>Descripción</h5>
              <p className={styles.description}>{resource?.description}</p>
            </div>
          </div>
          <div className={styles.rightContainer}>
            
          <div className={styles.wrapper}>
              <h5 className={styles.title}>Link</h5>
              <Link
                href={resource?.url}
                target="_blank"
                className={`${styles.description} ${styles.field}`}
              >
                {resource?.url}
              </Link>
            </div>
            <div className={styles.wrapper}>
              <p className={`${styles.description} ${styles.field}`}>
                {resource?.comuna}
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={`${styles.button} ${styles.edit}`}
                onClick={() => handleNavigateToResource(resource?.id)}
              >
                <AiOutlineEdit size={20} />
              </button>
              <button
                className={`${styles.button} ${styles.remove}`}
                onClick={() => handleDeleteButtonClick(resource?.id)}
              >
                <FiTrash size={20} />
              </button>
            </div>
          </div>
          {dialogIsOpen && (
            <DeleteResourceModal
              dialogIsOpen={dialogIsOpen}
              setDialogIsOpen={setDialogIsOpen}
              message="¿Estás seguro que deseas eliminar este aliado?"
              okButtontext="Eliminar"
              cancelButtonText="Cancelar"
              handleDelete={() => {
                handleDeleteResourceById(resourcesEliminated)
                setResourceEliminated(null)
              }}
              isLoading={isLoading}
            />
          )}
        </div>
      ))}
    </>
  )
}

export default ResourceView
