'use client'
import {
  useState,
  useEffect,
  createContext,
  useMemo,
  useContext,
  useRef,
} from 'react'
import { useRouter, useParams } from 'next/navigation'
import { UserContext } from '@/components/context/userContext'
import {
  createResource,
  deleteResourceById,
  getAllResources,
  getResourceById,
  getResourcesByWord,
  updateResourceById,
} from '@/services/api'
import {
  dashboardResourceByIdAdapter,
  dashboardResourcesAdapter,
} from '../adapters'
import { errorMessage, infoMessage, successMessage } from '@/utils/notify'

const DashboardResourcesContext = createContext()

const DashboardResourcesProvider = ({ children }) => {
  const [allResources, setAllResources] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [resourcesEliminated, setResourceEliminated] = useState(null)
  const [search, setSearch] = useState('')
  const [resourceDataById, setResourceDataById] = useState({})
  const [resourceId, setResourceId] = useState('')
  const [description, setDescription] = useState('')
  const [comuna, setComuna] = useState('')
  const [region, setRegion] = useState('')
  const [url, setUrl] = useState('')
  const [highlighted, setHighlighted] = useState(false)
  const [image, setImage] = useState('')
  const [selectedImage, setSelectedImage] = useState(
    'https://th.bing.com/th/id/OIP.qYEC7KeQLQ-i5FCNbWpV7AHaDt?w=335&h=175&c=7&r=0&o=5&pid=1.7',
  )
  const [title, setTitle] = useState('')
  const fileInputRef = useRef(null)
  const router = useRouter()
  const { id } = useParams()
  const { user } = useContext(UserContext)
  const idToken = user?.token

  // GET ALL RESOURCES from DB
  async function getResources() {
    try {
      setIsLoading(true)
      const response = await getAllResources(page, idToken)
      setAllResources(dashboardResourcesAdapter(response?.data))
      setTotalPages(response?.pagination?.totalPages)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (search === '') getResources()
  }, [page, search, id])

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

  function handleNavigateToResource(resourceId) {
    router.push(`/dashboard/recursosdeapoyo/${resourceId}`)
  }

  //if a resource is deleted, filter the resources array
  function filterResources() {
    const filteredResources = allResources.filter(
      (resource) => resource?.id !== resourcesEliminated,
    )
    setAllResources(filteredResources)
  }

  //function to search by term
  async function searchResources() {
    try {
      setIsLoading(true)
      const response = await getResourcesByWord(search, page, idToken)
      setAllResources(dashboardResourcesAdapter(response?.data))
      setTotalPages(response?.pagination?.totalPages)
      if (response?.data?.length === 0)
        infoMessage(
          'No se encontraron resultados con esos terminos de búsqueda',
        )
    } catch (error) {
      errorMessage('Error al buscar recursos')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (search !== '') searchResources()
  }, [search, page])

  //function to get a resource by ID from API
  async function handleGetResourceById() {
    try {
      setRegion('')
      setIsLoading(true)
      const response = await getResourceById(id, idToken)
      setResourceDataById(dashboardResourceByIdAdapter(response))
      getStateData(dashboardResourceByIdAdapter(response))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  function getStateData(resourceDataById) {
    setDescription(resourceDataById?.description)
    setComuna(resourceDataById?.comuna)
    setUrl(resourceDataById?.url)
    setHighlighted(resourceDataById?.highlighted)
    setImage(resourceDataById?.image)
    setResourceId(resourceDataById?.id)
    setTitle(resourceDataById?.title)
  }

  useEffect(() => {
    id && handleGetResourceById()
  }, [id])

  //function to delete a resource by ID from API
  async function handleDeleteResourceById(dataResourceId) {
    try {
      setIsLoading(true)
      const response = await deleteResourceById(dataResourceId, idToken)

      if (response?.ok) successMessage('Recurso eliminado correctamente')
      filterResources()
      resetSate()
    } catch (error) {
      errorMessage('Ups! algo salio mal, por favor vuelve a intentarlo')
    } finally {
      setIsLoading(false)
    }
  }

  function handleGoBack() {
    router.back()
  }

  //function to update a resource by ID from API
  async function handleUpdateResourceById(dataResourceId) {
    const newResourceData = {
      userId: resourceDataById?.userId,
      description,
      comuna,
      url,
      highlighted,
      image,
      title,
    }

    const formData = handleTransformToFormData(newResourceData)

    try {
      setIsLoading(true)
      await updateResourceById(dataResourceId, formData, idToken)

      successMessage('Recurso actualizado correctamente')
    } catch (error) {
      errorMessage('Ups! algo salio mal, por favor vuelve a intentarlo')
    } finally {
      setIsLoading(false)
    }
  }

  //function to create a new resource and save in DB
  async function handleCreateResource() {
    const newResourceData = {
      userId: user?.data?.id,
      description,
      comuna,
      url,
      highlighted: false,
      image: selectedImage,
      title,
    }

    const formData = handleTransformToFormData(newResourceData)

    try {
      if (!validateEmptyFields()) return

      setIsLoading(true)
      const response = await createResource(formData, idToken)

      if (!response?.ok) {
        errorMessage('Ups! algo salio mal, por favor vuelve a intentarlo')
        return
      }

      successMessage('Recurso creado correctamente')
      resetSate()
    } catch (error) {
      errorMessage('Ups! algo salio mal, por favor vuelve a intentarlo')
    } finally {
      setIsLoading(false)
    }
  }

  // function to reset the state
  function resetSate() {
    setDescription('')
    setComuna('')
    setUrl('')
    setHighlighted(false)
    setImage('')
    setSelectedImage(
      'https://th.bing.com/th/id/OIP.qYEC7KeQLQ-i5FCNbWpV7AHaDt?w=335&h=175&c=7&r=0&o=5&pid=1.7',
    )
    setTitle('')
    setRegion('')
  }

  //validate if the fields are empty
  function validateEmptyFields() {
    if (description === '' || comuna === '' || url === '' || title === '') {
      errorMessage('Por favor, complete todos los campos')
      return false
    } else if (description.length > 2000) {
      errorMessage('La descripción no puede tener más de 2000 caracteres')
      return false
    } else if (comuna.length > 255 || url.length > 255) {
      errorMessage('La comuna y/o la url no pueden tener más de 255 caracteres')
      return false
    } else if (
      selectedImage ===
      'https://th.bing.com/th/id/OIP.qYEC7KeQLQ-i5FCNbWpV7AHaDt?w=335&h=175&c=7&r=0&o=5&pid=1.7'
    ) {
      errorMessage('Por favor, seleccione una imagen')
      return false
    }
    return true
  }

  function handleTransformToFormData(data) {
    const formData = new FormData()
    data.userId && formData.append('userId', data.userId)
    formData.append('image', data.image)
    formData.append('description', data.description)
    formData.append('comuna', data.comuna)
    formData.append('url', data.url)
    formData.append('highlighted', data.highlighted)
    formData.append('title', data.title)

    return formData
  }

  const handleDeleteButtonClick = (resourceId) => {
    setResourceEliminated(resourceId)
    setDialogIsOpen(!dialogIsOpen)
  }

  return (
    <DashboardResourcesContext.Provider
      value={{
        allResources,
        paginationOptions,
        page,
        handlePageChange,
        totalPages,
        dialogIsOpen,
        setDialogIsOpen,
        handleNavigateToResource,
        isLoading,
        search,
        setSearch,
        handleDeleteResourceById,
        handleGoBack,
        handleUpdateResourceById,
        description,
        setDescription,
        comuna,
        setComuna,
        url,
        setUrl,
        highlighted,
        setHighlighted,
        selectedImage,
        setSelectedImage,
        resourceId,
        handleCreateResource,
        fileInputRef,
        image,
        setImage,
        handleDeleteButtonClick,
        setResourceEliminated,
        resourcesEliminated,
        title,
        setTitle,
        region,
        setRegion,
      }}
    >
      {children}
    </DashboardResourcesContext.Provider>
  )
}

export { DashboardResourcesProvider }

export default DashboardResourcesContext
