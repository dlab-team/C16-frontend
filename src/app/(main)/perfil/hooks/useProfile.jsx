import { useEffect, useState } from 'react'
import { AiOutlineLogout, AiOutlineSync, AiTwotoneAlert, AiTwotoneEdit } from 'react-icons/ai'

import { useWindowDimensions } from '.'
import { ChangePasswordView, NotificationsView, YourDataView } from '../components'

const useProfile = () => {
  const { width } = useWindowDimensions()
  const [componentSelected, setComponentSelected] = useState(0)
  const [showMainMenu, setShowMainMenu] = useState(true)
  const [read, setRead] = useState(false)
  const [optionSelected, setOptionSelected] = useState(1)
  const [paginationItems, setPaginationItems] = useState([])

  const BUTTONS_NAMES = [
    {
      id: 1,
      name: 'Editar perfil',
      icon: <AiTwotoneEdit />,
    },
   /*  {
      id: 2,
      name: 'Cambiar contraseña',
      icon: <AiOutlineSync />,
    },
    {
      id: 3,
      name: 'Notificaciones',
      icon: <AiTwotoneAlert />,
    }, */
    {
      id: 4,
      name: 'Cerrar Sesión',
      icon: <AiOutlineLogout />,
    },
  ]

  //Function to toggle the main menu if the selected component is not 0 and the width is less than 920px
  function toggleMainMenu() {
    if (componentSelected !== 0 && width < 920) setShowMainMenu(!showMainMenu)
  }

  useEffect(() => {
    toggleMainMenu()
  }, [componentSelected, width])

  //A function that handles the selection of a component and sets it as selected and selected option.
  function handleSelectComponentId(id) {
    setComponentSelected(id)
    setOptionSelected(id)
  }

  //return the total pages
  function getTotalPages() {
    return 1
  }

  /*The paginationOptions function generates a list of options for pagination based on the total number of pages.
Each option has a numeric value corresponding to the page number. */
  function paginationOptions() {
    const totalPages = getTotalPages()
    const options = []
    for (let i = 1; i <= totalPages; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>,
      )
    }
    setPaginationItems(options)
  }

  useEffect(() => {
    paginationOptions()
  }, [])

  function handlePageChange() {}

  /*A function that renders a specific component based on the selection of a component. 
  If no component is selected, a default component is rendered. */
  function renderRightComponent() {
    const RIGHT_COMPONENT = {
      1: <YourDataView />,
      2: <ChangePasswordView />,
      3: (
        <NotificationsView
          read={read}
          setRead={setRead}
          paginationOptions={paginationItems}
          currentPage={1}
          handlePageChange={handlePageChange}
          getTotalPages={getTotalPages}
        />
      ),
    }

    const DEFAULT_COMPONENT = <YourDataView />

    const component = RIGHT_COMPONENT[componentSelected] || DEFAULT_COMPONENT

    return component
  }

  //show main menu
  function handleGoBack() {
    setShowMainMenu(!showMainMenu)
    setComponentSelected(0)
  }

  return {
    BUTTONS_NAMES,
    handleSelectComponentId,
    renderRightComponent,
    showMainMenu,
    handleGoBack,
    optionSelected,
  }
}

export default useProfile
