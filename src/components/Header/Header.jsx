import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
   return (
      <div className="header">
         <div className='container'>
            <div className='header__wrapper'>
               <img src='https://yoursite.com/wp-content/uploads/2020/06/logo-ys.png'></img>
               <ul>
                  <li><NavLink to='/main'>home</NavLink></li>
                  <li><NavLink to='/about'>about</NavLink></li>
                  <li><a href="#">contact</a></li>

               </ul>
            </div>
         </div>
      </div>
   );
}

export default Header;