import React from 'react';
import users from './Users.module.css'

const Users = (props) => {
   debugger
   if (props.users.length === 0) {

      axios.get('')



      props.setUsers(
         { id: 1, photoUrl: 'https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223', followed: false, fullName: 'Serg', status: 'i`m a boss', location: { country: 'Ukraine', city: 'Smila' } },
         { id: 2, photoUrl: 'https://www.w3schools.com/w3images/avatar6.png', followed: true, fullName: 'Viki', status: 'i`m HR mananger', location: { country: 'Chech Republick', city: 'Brumovice' } },
         { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FFEG8-qN43QTGV-FfYcYZCREDy_MeOYzREiuM9EswneMyLbFVPYjCO9R2shuZWUKYQ8&usqp=CAU', followed: true, fullName: 'Vasia', status: 'i`m Freelance', location: { country: 'Ukraine', city: 'Kiev' } },
         { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTK-ngpWCjKOd5TDmP8JmRSAD40hLharEf9PbSuT_ZArZzRBedZgWWTV1FXFvw0UO4_M&usqp=CAU', followed: false, fullName: 'David', status: 'looking for work', location: { country: 'London', city: null } },
      )
   }



   return (
      <div className={users.wrapp}>
         {
            props.users.map(user => {
               return (
                  <div className={users.user__wrapp} key={user.id}>
                     <div className={users.user__wrapp__img}>
                        <img className={users.user__avatar} src={user.photoUrl} alt="Avatar User" />
                        {
                           user.followed ?
                              <button onClick={() => { props.unfollow(user.id) }}>unFollow</button>
                              : <button onClick={() => { props.follow(user.id) }}>Follow</button>
                        }
                     </div>
                     <div className={users.user__wrapp__info}>
                        <div>
                           <p>{user.fullName}</p>
                           <p>{user.status}</p>
                        </div>
                        <div>
                           <p>{user.location.country}</p>
                           <p>{user.location.city}</p>
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