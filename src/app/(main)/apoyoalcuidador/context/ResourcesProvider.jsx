import { useState, useEffect, createContext } from 'react'
import FAKE_RESOURCES_DATA from '../mockupData/fakeResourcesData'
import { resourcesInfoAdapter } from '../adapters'

const ResourcesContext = createContext()

const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState([])
  const [paginationOptions, setPaginationOptions] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  //function to filter the fake resources by type
  //ToDo: remove o change this function
  function filterResourcesByType() {
    return FAKE_RESOURCES_DATA
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
  }, [currentPage, itemsPerPage])

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
  }, [currentPage, itemsPerPage])

  return (
    <ResourcesContext.Provider
      value={{
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
