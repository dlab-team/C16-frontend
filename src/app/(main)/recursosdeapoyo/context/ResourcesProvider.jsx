import { useState, useEffect, createContext } from 'react'
import FAKE_RESOURCES_DATA from '../mockupData/fakeResourcesData'
import { resourcesInfoAdapter } from '../adapters'

const ResourcesContext = createContext()

const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState([])
  const [paginationOptions, setPaginationOptions] = useState([])
  const [tabActive, setTabActive] = useState(1)
  const [tabName, setTabName] = useState('tutoriales')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  const TABS_NAMES = [
    {
      id: 1,
      name: 'Tutoriales',
    },
    {
      id: 2,
      name: 'Manuales',
    },
    {
      id: 3,
      name: 'Testimonios',
    },
  ]

  // function to handle the tab active change.
  function handleTabActive(id) {
    setTabActive(id)
  }

  //function to filter the fake resources by type
  //ToDo: remove o change this function
  function filterResourcesByType() {
    const filteredResources = FAKE_RESOURCES_DATA.filter(
      (resource) => resource.type.toLowerCase() === tabName.toLowerCase(),
    )

    return filteredResources
  }

  // Function to calculate the total number of pages
  const getTotalPages = () => {
    const filteredResources = filterResourcesByType()
    return Math.ceil(filteredResources.length / itemsPerPage)
  }

  useEffect(() => {
    const totalPages = getTotalPages()
    const options = []
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    setPaginationOptions(options)
  }, [getTotalPages])

  // Function to handle pagination selection change
  function handlePageChange(event) {
    setCurrentPage(parseInt(event.target.value)) // Ensure numeric value
  }

  // Get the current page of resources based on pagination
  const getPaginatedResources = () => {
    const filteredResources = filterResourcesByType()
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return resourcesInfoAdapter(filteredResources.slice(startIndex, endIndex))
  }

  useEffect(() => {
    const paginatedResources = getPaginatedResources()
    setResources(paginatedResources)
  }, [tabName, currentPage, itemsPerPage])

  return (
    <ResourcesContext.Provider
      value={{
        TABS_NAMES,
        tabActive,
        handleTabActive,
        setTabName,
        resources,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
        getTotalPages,
        paginationOptions,
        handlePageChange,
      }}
    >
      {children}
    </ResourcesContext.Provider>
  )
}

export { ResourcesProvider }

export default ResourcesContext
