import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
   return (
      <div className=' container'>
         <nav className='d'>
            <div className='d'>
               {/* <img className='' style={{ width: '100px' }} src='https://yoursite.com/wp-content/uploads/2020/06/logo-ys.png'></img> */}
               <ul className='nav nav-tabs justify-content-end'>
                  <li className='nav-item ' ><NavLink className='nav-link' to='/main'>home</NavLink></li>
                  <li className='nav-item'><NavLink className='nav-link' to='/about'>about</NavLink></li>
                  <li className='nav-item'><NavLink className='nav-link' to='/contact'>contact</NavLink></li>

               </ul>
            </div>
         </nav>
      </div >
   );
}

export default Header;