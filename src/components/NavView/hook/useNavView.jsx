import { useState } from 'react';
import { usePathname } from 'next/navigation';

const useNavView = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //The "changeNavStyle" function changes the display style of a navigation container based on the "isMenuOpen" variable.
  function changeNavStyle() {
    const navContainer = document.getElementById('navContainer');

    if (isMenuOpen) {
      navContainer.style.display = 'flex';
    } else {
      navContainer.style.display = 'none';
    }
  }

  /**
   * Function to toggle the menu.
   * Change the state of isMenuOpen and call the changeNavStyle function.
   */
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    changeNavStyle();
  }

  return {
    pathname,
    toggleMenu,
  };
};

export default useNavView;
