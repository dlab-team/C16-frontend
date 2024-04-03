import { useState, useEffect } from 'react'
import {
  AiTwotoneEdit,
  AiOutlineSync,
  AiTwotoneAlert,
  AiOutlineLogout,
} from 'react-icons/ai'
import { YourDataView } from '../components'
import { useWindowDimensions } from '.'

const useProfile = () => {
  const { width } = useWindowDimensions()
  const [componentSelected, setComponentSelected] = useState(0)
  const [showMainMenu, setShowMainMenu] = useState(true)

  const BUTTONS_NAMES = [
    {
      id: 1,
      name: 'Editar perfil',
      icon: <AiTwotoneEdit />,
    },
    {
      id: 2,
      name: 'Cambiar contraseña',
      icon: <AiOutlineSync />,
    },
    {
      id: 3,
      name: 'Notificaciones',
      icon: <AiTwotoneAlert />,
    },
    {
      id: 4,
      name: 'Cerrar Sesión',
      icon: <AiOutlineLogout />,
    },
  ]

  function toggleMainMenu() {
    if (componentSelected !== 0 && width < 920) setShowMainMenu(!showMainMenu)
  }

  useEffect(() => {
    toggleMainMenu()
  }, [componentSelected, width])

  function handleSelectComponentId(id) {
    setComponentSelected(id)
  }

  function renderRightComponent() {
    const RIGHT_COMPONENT = {
      1: <YourDataView />,
    }

    const DEFAULT_COMPONENT = <YourDataView />

    const component = RIGHT_COMPONENT[componentSelected] || DEFAULT_COMPONENT

    return component
  }

  return {
    BUTTONS_NAMES,
    handleSelectComponentId,
    renderRightComponent,
    showMainMenu,
  }
}

export default useProfile
