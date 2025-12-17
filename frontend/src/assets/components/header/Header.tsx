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

      <header className='bg-purple-900 w-full flex justify-around lg:justify-between items-center p-8'>

        <Link to={'/home'}>
          <Logo />
        </Link>

        {/* 🖥️ NAV DESKTOP */}
        <nav className='hidden lg:flex'>
          <NavLinks className='flex text-white text-2xl gap-10' />
        </nav>

        <div className='hidden lg:flex'>
          <Button
            onClick={handleLogout}
            nameButton={'Cerrar Sesión'}
          />
        </div>

        {/* 📱 HAMBURGER */}
        <div className='flex lg:hidden z-20'>
          <HamburgerNav isOpen={isOpen} toggle={toggleActive} />
        </div>

        {/* 📱 NAV MOBILE */}

        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2, ease: 'easeOut', duration: 1 }}
            className='flex flex-col w-full justify-center items-center lg:hidden absolute inset-0 bg-purple-900 z-10'
          >

            <NavLinks onClick={closeMenu} className='flex flex-col items-center gap-8 text-2xl text-white' />

            <div className='scale-100 w-full h-100 absolute grid place-items-end'>
              {isOpen &&(
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