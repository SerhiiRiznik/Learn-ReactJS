import React from 'react'
import Posts from './Posts/Posts'
import UserInfo from './UserInfo/User';

const ContentUser = (props) => {
   console.log(props)
   return (
      <div>
         <UserInfo />
         <Posts store={props.store}
         />
      </div>
   )
}

export default ContentUser;
