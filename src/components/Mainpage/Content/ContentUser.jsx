import React from 'react'
import Posts from './Posts/Posts'
import UserInfo from './UserInfo/UserInfo';

const ContentUser = (props) => {
   // console.log(props)
   return (
      <div>
         <UserInfo />
         <Posts state={props.state} dispatch={props.dispatch}
         />
      </div>
   )
}

export default ContentUser;
