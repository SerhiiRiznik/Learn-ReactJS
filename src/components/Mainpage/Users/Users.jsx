import React from "react";
import User from "./User";
import styles from './Users.module.css';




const Users = ({ users, follow, unfollow, followingTime }) => {

   return (
      <div className={styles.wrapp}>

         {
            users.map((user, index) => <User key={index} user={user} follow={follow} unfollow={unfollow} followingTime={followingTime} />)

         }
      </div>
   )
}

export default Users