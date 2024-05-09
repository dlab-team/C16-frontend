'use client'
import styles from './styles/Page.module.css'
import { SearchBarView, Spinner, TitleView } from '../components'
import { ResourceView } from './components'
import { PaginationView } from '@/app/(main)/components'
import { useDashboardResources } from './hooks'

const DashBoardResources = () => {
  const {
    paginationOptions,
    page,
    handlePageChange,
    totalPages,
    search,
    setSearch,
    allResources,
    isLoading,
  } = useDashboardResources()

  return (
    <section className={styles.container}>
      <TitleView
        title="Nuestra Red"
        showIcons={true}
        redirectTo="/dashboard/red/crear"
      />
      <SearchBarView search={search} setSearch={setSearch} />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          {allResources?.length === 0 ? (
            <h2>No hay aliados para mostrar</h2>
          ) : (
            <ResourceView />
          )}
          {allResources?.length > 0 && (
            <PaginationView
              paginationOptions={paginationOptions}
              currentPage={page}
              handlePageChange={handlePageChange}
              getTotalPages={() => totalPages}
            />
          )}
        </div>
      )}
    </section>
  )
}

export default DashBoardResources
