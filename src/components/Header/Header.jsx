import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
   // console.log(props,`Header Render`);
   if (!props.authUser.authorized) {
      return (
         <nav className='navbar container justify-content-end'>
            <ul className='nav nav-tabs' style={{ height: '50px' }}>
               <li className='nav-item'></li>
               <li className='nav-item'></li>
               <li className='nav-item'></li>
               <li className='nav-item'>
            <NavLink className='btn btn-outline-secondary nav-link' to='login'>LogIn</NavLink>
                  </li>
            </ul>
         </nav>
      )
   } else {
      return (
         <nav className='navbar container justify-content-end'>
               <ul className='nav nav-tabs justify-content-end align-items-center' style={{ height: '50px' }}>
                  <li  className='nav-item' title={'User Id: '+props.authUser.userId + ', Login: ' + props.authUser.login} >
                  PhotoUser
                  </li>
                  <li style={{ paddingLeft: '5px' }} className='nav-item'>Email: {props.authUser.email}</li>
                  <li style={{ paddingLeft: '5px' }} className='nav-item'>
                     <button style={{ paddingLeft: '5px' }} className='btn btn-outline-secondary' 
                     type="button"
                     onClick={props.Logout}
                     >
                        LogOut
                        
                     </button>
                  </li>
               </ul>
         </nav>
      );
   }

}

export default Header;