import { useState, useEffect, createContext, useMemo, useContext } from 'react'
import { getAllResources, getResourcesByComuna } from '@/services/api'
import { dashboardResourcesAdapter } from '@/app/(dashboard)/dashboard/recursosdeapoyo/adapters'
import { UserContext } from '@/components/context/userContext'
import { errorMessage, infoMessage } from '@/utils/notify'

const ResourcesContext = createContext()

const ResourcesProvider = ({ children }) => {
  const [allResources, setAllResources] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [leadingResource, setLeadingResource] = useState({})
  const [comuna, setComuna] = useState('')
  const [region, setRegion] = useState('')
  const { user } = useContext(UserContext)
  const idToken = user?.token

  // GET ALL RESOURCES from DB
  async function getResources() {
    try {
      setIsLoading(true)
      const response = await getAllResources(page, idToken)
      setAllResources(dashboardResourcesAdapter(response?.data))
      setTotalPages(response?.pagination?.totalPages)

      const isEmpty = Object.keys(leadingResource)?.length === 0
      if (isEmpty) {
        setLeadingResource(response?.data[0])
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (comuna === '') {
      getResources()
    }
      /* if(region=='todas'){
        setPage(1)
        getResources()
      } */
  }, [page, comuna])

  /* function responsible for generating pagination options based on the 
totalPages value. */
  const paginationOptions = useMemo(() => {
    const options = []
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    return options
  }, [totalPages])

  // function responsible for changing the page
  function handlePageChange(event) {
    const selectedPage = parseInt(event.target.value)
    setPage(selectedPage)
  }

  //function to search by comuna
  async function searchResources() {
    try {
      setIsLoading(true)
      const response = await getResourcesByComuna(
        comuna.toLowerCase(),
        page,
        idToken,
      )

      setAllResources(dashboardResourcesAdapter(response?.data))
      setTotalPages(response?.pagination?.totalPages)
      if (response?.data?.length === 0)
        infoMessage(`No se encontraron resultados para la comuna: ${comuna}`)

      if (response?.data[0]?.highlighted) {
        setLeadingResource(response?.data[0])
      } else {
        setLeadingResource({})
      }
    } catch (error) {
      console.error(error)
      errorMessage('Error al buscar recursos')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (comuna !== '' && comuna !== 'none') {
      searchResources()
    }
  }, [comuna, page])

  return (
    <ResourcesContext.Provider
      value={{
        allResources,
        paginationOptions,
        page,
        setPage,
        handlePageChange,
        totalPages,
        leadingResource,
        isLoading,
        comuna,
        setComuna,
        region,
        setRegion,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  )
}

export { ResourcesProvider }

export default ResourcesContext
