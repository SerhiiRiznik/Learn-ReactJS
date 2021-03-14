import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../../assets/images/userAvatarNull.png'
import { NavLink } from "react-router-dom";
import { userAPI } from "../../../API/api";



let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   return (
      <div className={styles.wrapp}>
         <div>
            {pages.map((p, idx) => {
               return (
                  <span
                     key={idx + 1}
                     className={props.currentPage === p ? styles.selectedPage : null}
                     onClick={(e) => { props.onPageChanged(p) }}
                  >{p}
                  </span>
               )
            })}

         </div>
         {
            props.users.map(user => {
               return (
                  <div className={styles.user__wrapp} key={user.id}>
                     <div className={styles.user__wrapp__img}>
                        <NavLink to={'/profile/' + user.id}>
                           <img className={styles.user__avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar User" />
                        </NavLink>
                        {
                           user.followed ?
                              <button onClick={() => {

                                 userAPI.setUnfollowUser(user.id)
                                    .then(response => {
                                       if (response.data.resultCode === 0) {
                                          debugger
                                          props.unfollow(user.id)
                                       }
                                    })


                              }}>unFollow</button>
                              : <button onClick={() => {
                                 userAPI.setFollowUser(user.id)
                                    .then(response => {
                                       debugger
                                       if (response.data.resultCode === 0) {
                                          debugger
                                          props.follow(user.id)
                                       }
                                    })

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
                  </div >
               )
            })
         }
      </div >
   )
}

export default Users