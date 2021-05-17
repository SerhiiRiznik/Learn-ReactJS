import React from 'react'
import { NavLink } from 'react-router-dom';
import BurgerNav from './BurgerNav';
import style from './Header.module.css'

const Header = ({ isMobileBurger, ...props }) => {
   // console.log(props, `Header Render`);

   return (
      <div className={`${style.header}`}>
         {isMobileBurger && <BurgerNav />}
         <div className={style.navRight}>
            <ul className='align-items-center'>

               {props.authUser.authorized &&
                  <>
                     <li className='nav-item' title={'User Id: ' + props.authUser.userId + ', Login: ' + props.authUser.login} >
                        <img className={style.navUserAvatar} src={props.userPhoto.small} alt="" />
                     </li>
                     <li className='nav-item'>Email: {props.authUser.email}</li>
                     <li className='nav-item'>
                        <button className={`btn btn-outline-success ${style.headerButton}`}
                           type="button"
                           onClick={props.logout}
                        >
                           LogOut
                     </button>
                     </li>
                  </>
               }

               {!props.authUser.authorized && <NavLink className={`btn btn-outline-success ${style.headerButton}`} to='login'>LogIn</NavLink>}
            </ul>
         </div>
      </div>
   );
}

export default Header;