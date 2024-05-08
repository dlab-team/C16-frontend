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
  getAllPartners, 
  getPartnerById, 
  getPartnerByWord,
  createPartner, 
  updatePartnerById, 
  deletePartnerById   
} from '@/services/api/api.partners.service'

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
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [selectedImage, setSelectedImage] = useState(
    'https://th.bing.com/th/id/OIP.qYEC7KeQLQ-i5FCNbWpV7AHaDt?w=335&h=175&c=7&r=0&o=5&pid=1.7',
  )
  const fileInputRef = useRef(null)
  const router = useRouter()
  const { id } = useParams()
  const { user } = useContext(UserContext)
  const idToken = user?.token

  // GET ALL RESOURCES from DB
  async function getResources() {
    try {
      setIsLoading(true)
      const response = await getAllPartners(page, idToken)
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
    router.push(`/dashboard/red/${resourceId}`)
  }

  //if a resource is deleted, filter the resources array
  function filterResources() {
    console.log(resourcesEliminated)
    const filteredResources = allResources.filter(
      (resource) => resource?.id !== resourcesEliminated,
    )
    setAllResources(filteredResources)
  }

  useEffect(() => {
    filterResources()
  }, [resourcesEliminated])

  //function to search by term
  async function searchResources() {
    try {
      setIsLoading(true)
      const response = await getPartnerByWord(search, page, idToken)
      setAllResources(dashboardResourcesAdapter(response?.data))
      setTotalPages(response?.pagination?.totalPages)
      if (response?.data?.length === 0)
        infoMessage(
          'No se encontraron resultados con esos terminos de búsqueda',
        )
    } catch (error) {
      errorMessage('Error al buscar aliados')
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
      setIsLoading(true)
      const response = await getPartnerById(id, idToken)
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
    setName(resourceDataById?.comuna)
    setUrl(resourceDataById?.url)
    setHighlighted(resourceDataById?.highlighted)
    setImage(resourceDataById?.image)
    setResourceId(resourceDataById?.id)
  }

  useEffect(() => {
    id && handleGetResourceById()
  }, [id])

  //function to delete a resource by ID from API
  async function handleDeleteResourceById(dataResourceId) {
    console.log(dataResourceId)
    try {
      setIsLoading(true)
      const response = await deletePartnerById(dataResourceId, idToken)

      if (response?.ok) successMessage('Organización eliminada correctamente')
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
      name,
      url,
      image,
    }

    const formData = handleTransformToFormData(newResourceData)

    try {
      setIsLoading(true)
      await updatePartnerById(dataResourceId, formData, idToken)

      successMessage('Organización actualizada correctamente')
    } catch (error) {
      errorMessage('Ups! algo salio mal, por favor vuelve a intentarlo')
    } finally {
      setIsLoading(false)
    }
  }

  //function to create a new partner and save in DB
  async function handleCreateResource() {
    const newResourceData = {
      userId: user?.data?.id,
      description,
      name,
      url,
      image: selectedImage,
    }

    const formData = handleTransformToFormData(newResourceData)

    try {
      if (!validateEmptyFields()) return

      setIsLoading(true)
      const response = await createPartner(formData, idToken)

      if (!response?.ok) {
        errorMessage('Ups! algo salio mal, por favor vuelve a intentarlo')
        return
      }
      successMessage('Organización creada correctamente')
      resetSate()
    } catch (error) {
      errorMessage('Ups! algo salio mal, por favor vuelve a intentarlo')
    } finally {
      setIsLoading(false)
    }
  } 

  // function to reset the state
  function resetState() {
    setDescription('')
    setName('')
    setUrl('')
    setHighlighted(false)
    setImage('')
    setSelectedImage(
      'https://th.bing.com/th/id/OIP.qYEC7KeQLQ-i5FCNbWpV7AHaDt?w=335&h=175&c=7&r=0&o=5&pid=1.7',
    )
  }

  //validate if the fields are empty
  function validateEmptyFields() {
    if (description === '' || name === '' || url === '') {
      errorMessage('Por favor, complete todos los campos')
      return false
    } else if (description.length > 2000) {
      errorMessage('La descripción no puede tener más de 2000 caracteres')
      return false
    } else if (name.length > 255 || url.length > 255) {
      errorMessage('El nombre y/o la url no pueden tener más de 255 caracteres')
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
    formData.append('name', data.name)
    formData.append('url', data.url)

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
        name,
        setName,
        url,
        setUrl,
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
      }}
    >
      {children}
    </DashboardResourcesContext.Provider>
  )
}

export { DashboardResourcesProvider }

export default DashboardResourcesContext
