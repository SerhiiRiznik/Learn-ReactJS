import React from 'react'
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from "./Posts/PostsContainer";
import Loader from '../../Loader/Loader';

const ContentUser = (props) => {
   if (!props.userProfile) {
      return <Loader />
   } else {
      return (

         <div>
            <UserInfo userProfile={props.userProfile} />
            <PostsContainer />
         </div>

      )
   }
}

export default ContentUser;
