import React, { useState, useEffect, createContext, useMemo } from 'react'
import FAKE_RESOURCES_DATA from '../mockupData/fakeResourcesData'
import { resourcesInfoAdapter } from '../adapters'

const ResourcesContext = createContext()

const ResourcesProvider = ({ children }) => {
  const [resources, setResources] = useState([])
  const [tabActive, setTabActive] = useState(1)
  const [tabName, setTabName] = useState('tutoriales')

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

  useEffect(() => {
    const filteredResources = filterResourcesByType()
    setResources(resourcesInfoAdapter(filteredResources.slice(0, 4)))
  }, [tabName])

  return (
    <ResourcesContext.Provider
      value={{ TABS_NAMES, tabActive, handleTabActive, setTabName, resources }}
    >
      {children}
    </ResourcesContext.Provider>
  )
}

export { ResourcesProvider }

export default ResourcesContext
