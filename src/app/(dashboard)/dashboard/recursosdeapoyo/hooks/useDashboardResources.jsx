import { useContext } from 'react'
import DashboardResourcesContext from '../context/DashboardResourcesProvider'

const useDashboardResources = () => {
  return useContext(DashboardResourcesContext)
}

export default useDashboardResources
