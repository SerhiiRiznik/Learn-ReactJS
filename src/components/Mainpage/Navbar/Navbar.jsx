import { NavLink } from "react-router-dom";

const Navbar = (props) => {
   return (
      <div className='mainpage__navbar'>
         <ul>
            <li><NavLink to='/main'>Profile</NavLink></li>
            <li><NavLink to='/dialogs'>Massagers</NavLink></li>
            <li><NavLink to='/news'>News</NavLink></li>
            <li><NavLink to='/music'>Music</NavLink></li><br />
            <li><NavLink to='/users'>Users</NavLink></li><br />
            <li><NavLink to='/settings'>Setting</NavLink></li>

         </ul>
      </div>
   )
}

export default Navbar;