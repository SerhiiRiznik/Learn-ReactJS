import React from 'react'
import UserInfo from './UserInfo/UserInfo';
import PostsContainer from "./Posts/PostsContainer";
import Loader from '../../common/Loader/Loader';

const ContentUser = React.memo((props) => {
   if (!props.userProfile) {
      return <Loader />
   } else {
      return (
         <>
            {props.loading ? <Loader /> : <>
               <UserInfo
                  userProfile={props.userProfile}
                  updateStatus={props.updateStatus}
                  status={props.status}
                  loadPhoto={props.loadPhoto}
                  isOwner={props.isOwner}
               />
               <PostsContainer />
            </>}
         </>

      )
   }
})

export default ContentUser;
