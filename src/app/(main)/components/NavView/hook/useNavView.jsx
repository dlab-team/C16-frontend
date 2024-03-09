import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const useNavView = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  //function to change the nav style based on the isMenuOpen state
  const changeNavStyle = (menuOpenState) => {
    const navContainer = document.getElementById('navContainer')

    if (!menuOpenState && window.innerWidth <= 820) {
      navContainer.style.transform = 'translateX(100%)'
      navContainer.style.transition = 'all 250ms ease-in'
    } else {
      navContainer.style.display = 'flex'
      navContainer.style.transform = 'translateX(0%)'
    }
  }

  useEffect(() => {
    /*function to reset the nav styles to default when the window is resized to a width greater than 820px. 
    This is to avoid the nav styles from being applied to the mobile menu when the window is resized to a width less than 820px. */
    const resetDesktopStyles = () => {
      const navContainer = document.getElementById('navContainer')
      if (window.innerWidth > 821) {
        navContainer.style.display = 'flex'
        navContainer.style.transform = 'translateX(0%)'
      } else {
        navContainer.style.display = 'none'
      }
    }

    const handleResize = () => {
      resetDesktopStyles()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => {
      const newState = !prevIsMenuOpen
      changeNavStyle(newState)
      return newState
    })
  }

  /* ToDo: remove o change this function, this is only for devMode */
  async function handleLogin() {
    setIsAuthenticated(!isAuthenticated)
  }

  return {
    pathname,
    toggleMenu,
    isAuthenticated,
    handleLogin,
  }
}

export default useNavView
