import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const useNavView = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //function to change the nav style based on the isMenuOpen state
  const changeNavStyle = () => {
    const navContainer = document.getElementById('navContainer');
    if (!isMenuOpen && window.innerWidth <= 768) {
      navContainer.style.display = 'none';
    } else {
      navContainer.style.display = 'flex';
    }
  };

  useEffect(() => {
    /*function to reset the nav styles to default when the window is resized to a width greater than 768px. 
    This is to avoid the nav styles from being applied to the mobile menu when the window is resized to a width less than 768px. */
    const resetDesktopStyles = () => {
      const navContainer = document.getElementById('navContainer');
      navContainer.style.display = 'flex';
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        resetDesktopStyles();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    changeNavStyle();
  };

  return {
    pathname,
    toggleMenu,
  };
};

export default useNavView;
