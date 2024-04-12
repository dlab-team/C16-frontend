import { PaginationView } from '@/app/(main)/components'
import { ResourcesTopView, Tabs } from '..'
import { useResources } from '../../hooks'

const ContainerView = () => {
  const { paginationOptions, currentPage, handlePageChange, getTotalPages } =
    useResources()

  return (
    <main>
      <ResourcesTopView />
      <Tabs />
      <PaginationView
        paginationOptions={paginationOptions}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        getTotalPages={getTotalPages}
      />
    </main>
  )
}

export default ContainerView
