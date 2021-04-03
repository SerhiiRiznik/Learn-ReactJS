import { NavLink } from "react-router-dom";

const Navbar = (props) => {
   return (
      <div className='mainpage__navbar col-2'>
         <ul className='navbar-nav'>
            <li><NavLink to='/profile' className='nav-link'>Profile</NavLink></li>
            <li><NavLink to='/dialogs' className='nav-link'>Massagers</NavLink></li>
            <li><NavLink to='/news' className='nav-link'>News</NavLink></li>
            <li><NavLink to='/music' className='nav-link'>Music</NavLink></li><br />
            <li><NavLink to='/users' className='nav-link'>Users</NavLink></li><br />
            <li><NavLink to='/settings' className='nav-link'>Setting</NavLink></li>
         </ul>
      </div>
   )
}

export default Navbar;