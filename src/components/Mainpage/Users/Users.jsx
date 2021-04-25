import React from "react";
import styles from './Users.module.css'
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";



const Users = (props) => {

   return (
      <div className={styles.wrapp}>


         {
            props.users.map((user, index) => <User key={index} user={user} follow={props.follow} unfollow={props.unfollow} />)
         }
      </div>
   )
}

export default Users