import { NavLink } from "react-router-dom";

function Navbar() {
   return (
      <div className='mainpage__navbar'>
         <ul>
            <li><NavLink to='/Content/ContentUser'>Profile</NavLink></li>
            <li><NavLink to='/Dialogs/ContentDialogs'>Massagers</NavLink></li>
            <li><NavLink to='/News/ContentNews'>News</NavLink></li>
            <li><NavLink to='/Music/ContentMusic'>Music</NavLink></li>
            <li><NavLink to='/Setting/ContentSetting'>Setting</NavLink></li>

         </ul>
      </div>
   )
}

export default Navbar;