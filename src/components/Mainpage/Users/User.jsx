import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../../assets/images/userAvatarNull.png'
import { NavLink } from "react-router-dom";



const User = ({ user, follow, unfollow }) => {

   return (
      <div className={styles.user__wrapp} key={user.id}>
         <div className={styles.user__wrapp__img}>
            <NavLink to={'/profile/' + user.id}>
               <img className={styles.user__avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar User" />
            </NavLink>
            {
               user.followed ?
                  <button onClick={() => {
                     unfollow(user.id)
                  }}>unFollow</button>
                  : <button onClick={() => {
                     follow(user.id)
                  }}>Follow</button>
            }
         </div>
         <div className={styles.user__wrapp__info}>
            <div>
               <p>{user.name}</p>
               <p>{user.status}</p>
            </div>
            <div>
               <p>{'user.location.country'}</p>
               <p>{'user.location.city'}</p>
            </div>
         </div>
      </div>
   )
}

export default User