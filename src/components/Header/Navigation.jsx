import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import BurgerNav from './BurgerNav';
import style from './Header.module.css'
import classNames from 'classnames'

const Navigation = ({ setMenuOpen = () => { }, ...props }) => {
   return (
      <>
         <ul className='nav flex-column'>
            <li className={classNames('nav-item')}><NavLink onClick={(e) => { setMenuOpen() }} to='/profile' className='nav-link' activeClassName={style.active}>Profile</NavLink></li>
            <li className={classNames('nav-item')}><NavLink onClick={(e) => { setMenuOpen() }} to='/dialogs' className='nav-link' activeClassName={style.active}>Massagers</NavLink></li>
            <li className={classNames('nav-item')}><NavLink onClick={(e) => { setMenuOpen() }} to='/news' className='nav-link' activeClassName={style.active}>News</NavLink></li>
            <li className={classNames('nav-item')}><NavLink onClick={(e) => { setMenuOpen() }} to='/music' className='nav-link' activeClassName={style.active}>Music</NavLink></li><br />
            <li className={classNames('nav-item')}><NavLink onClick={(e) => { setMenuOpen() }} to='/settings' className='nav-link' activeClassName={style.active}>Settings</NavLink></li><br />
            <li className={classNames('nav-item')}><NavLink onClick={(e) => { setMenuOpen() }} to='/users' className='nav-link' activeClassName={style.active}>Users</NavLink></li><br />
            <li className={classNames('nav-item')}><NavLink onClick={(e) => { setMenuOpen() }} to='/' className='nav-link' activeClassName={style.active}>Info</NavLink></li>
         </ul>
      </>
   )

}

export default Navigation;