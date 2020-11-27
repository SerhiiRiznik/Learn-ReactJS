import React from 'react'
import Posts from './Posts/Posts'
import UserInfo from './UserInfo/User';

const ContentUser = (props) => {

   console.log(props.state.posts)
   return (
      <div>
         <UserInfo />
         <Posts state={props.state.posts} />
      </div>
   )
}

export default ContentUser;
