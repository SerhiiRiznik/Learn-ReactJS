import React, { useEffect, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import style from './BurgerNav.module.css'
import Navigation from './Navigation'

const BurgerNav = () => {
   let [menuOpen, setMenuOpen] = useState(false)

   useEffect(() => {
      setMenuOpen(false)
   }, [menuOpen]);


   return (
      <Menu isOpen={menuOpen}>
         <Navigation setMenuOpen={setMenuOpen} />
      </Menu>
   )
}

export default BurgerNav