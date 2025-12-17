import { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import UseAuth from "../../../context/UseAuth";

import HamburgerNav from './HamburgerNav'
import NavLinks from './NavLinks';
import Logo from './Logo'
import Button from '../loginHome/Button'



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { logout } = UseAuth();


  const toggleActive = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const handleLogout = () => {
    logout();
    navigate('/')
  }

  return (
    <>

      <header className='bg-purple-900 flex justify-around items-center p-2'>

        <Link to={'/home'}>
          <Logo />

        </Link>

        {/* 🖥️ NAV DESKTOP */}
        <nav className='hidden md:flex bg-amber-900'>
          <NavLinks className='flex gap-5' />
        </nav>

        {/* 📱 HAMBURGER */}
        <div className='flex md:hidden z-20'>
          <HamburgerNav isOpen={isOpen} toggle={toggleActive} />
        </div>

        {/* 📱 NAV MOBILE */}

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2, ease: 'easeOut', duration: 1 }}
            className='flex flex-col justify-center items-center md:hidden absolute inset-0 bg-purple-900 z-10'
          >

            <NavLinks onClick={closeMenu} className='flex flex-col items-center gap-5' />

            <div className='scale-70 w-full h-full absolute grid place-items-end'>
              {isOpen && (
                <Button
                  onClick={handleLogout}
                  nameButton={'Cerrar Sesión'} />
              )}
            </div>
          </motion.nav>
        )}


      </header>

    </>
  )
}
export default Header