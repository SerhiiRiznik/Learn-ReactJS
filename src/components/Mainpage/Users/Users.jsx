import axios from 'axios';
import React, { useEffect } from 'react';
import users from './Users.module.css'
import userPhoto from '../../../assets/images/userAvatarNull.png'

const Users = (props) => {

   useEffect(() => {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
            console.log(response.data.items);
            props.setUsers(response.data.items)
         })
   }, [])






   return (

      <div className={users.wrapp}>
         {/* <button onClick={SetUsers}>Set Users</button> */}
         {
            props.users.map(user => {
               return (
                  <div className={users.user__wrapp} key={user.id}>
                     <div className={users.user__wrapp__img}>
                        <img className={users.user__avatar} src={user.photos.small != null ? user.photos.small : userPhoto} alt="Avatar User" />
                        {
                           user.followed ?
                              <button onClick={() => { props.unfollow(user.id) }}>unFollow</button>
                              : <button onClick={() => { props.follow(user.id) }}>Follow</button>
                        }
                     </div>
                     <div className={users.user__wrapp__info}>
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