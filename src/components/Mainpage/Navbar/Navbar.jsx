import { NavLink } from "react-router-dom";

function Navbar() {
   return (
      <div className='mainpage__navbar'>
         <ul>
            <li><NavLink to='/user'>Profile</NavLink></li>
            <li><NavLink to='/dialogs'>Massagers</NavLink></li>
            <li><NavLink to='/news'>News</NavLink></li>
            <li><NavLink to='/music'>Music</NavLink></li>
            <li><NavLink to='/settings'>Setting</NavLink></li>

         </ul>
      </div>
   )
}

export default Navbar;