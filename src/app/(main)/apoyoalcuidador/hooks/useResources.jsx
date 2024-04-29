import { useContext } from 'react'
import ResourcesContext from '../context/ResourcesProvider'

const useResources = () => {
  return useContext(ResourcesContext)
}

export default useResources
