import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {
   setPortionNumber,
   unFollow, follow,
   getUsersPages,
   getUsersPagesChanged,
} from "../../redux/users-reducer";
import Users from './Users';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getLoading } from './Selectors'
import Pagination from '../../common/Pagination/Pagination'
import UsersLoader from './UsersLoader'



const UsersContainer = (props) => {

   console.log(props);

   useEffect(() => {
      props.getUsersPages(props.currentPage, props.pageSize)
   }, [])

   const onPageChanged = (pageNumber) => {
      props.getUsersPagesChanged(pageNumber, props.pageSize)
   }

   return (
      <>
         <Pagination
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            portionSize={props.portionSize}
            portionNumber={props.portionNumber}
            setPortionNumber={props.setPortionNumber}
         />
         {
            props.isLoading ?
               ((Array.from(new Array(props.pageSize))).map((item, index) => (
                  <UsersLoader key={index} />
               )))
               :
               <Users
                  followingTime={props.followingTime}
                  users={props.users}
                  unfollow={props.unFollow}
                  follow={props.follow}
               />

         }



      </>
   )
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isLoading: getLoading(state),
      portionSize: state.usersPage.portionSize,
      portionNumber: state.usersPage.portionNumber,
      followingTime: state.usersPage.followingTime
   }
}

export default compose(
   connect(mapStateToProps, {
      setPortionNumber,
      unFollow,
      follow,
      getUsersPages,
      getUsersPagesChanged,
   }))(UsersContainer)
