import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../../assets/images/userAvatarNull.png'
import { NavLink } from "react-router-dom";



const User = ({ user, follow, unfollow, followingTime }) => {

   return (
      <div className={styles.user__wrapp} key={user.id}>
         <div className={styles.user__wrapp__img}>
            <NavLink to={'/profile/' + user.id}>
               <img className={styles.user__avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar User" />
            </NavLink>
            {
               user.followed ?
                  <button disabled={followingTime} className='btn' onClick={() => {
                     unfollow(user.id)
                  }}>
                     {followingTime && <span className="spinner-border" role="status" aria-hidden="true"></span>}
                     unFollow</button>
                  : <button disabled={followingTime} className='btn' onClick={() => {
                     follow(user.id)
                  }}>
                     {followingTime && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                  Follow</button>
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