import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../../assets/images/userAvatarNull.png'



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
                        <img className={styles.user__avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar User" />
                        {
                           user.followed ?
                              <button onClick={() => { props.unfollow(user.id) }}>unFollow</button>
                              : <button onClick={() => { props.follow(user.id) }}>Follow</button>
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
            })
         }
      </div>
   )
}

export default Users