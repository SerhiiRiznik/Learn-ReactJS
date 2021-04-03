import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {
   setUnFollow, setFollow,
   getUsersPages,
   getUsersPagesChanged,
} from "../../redux/users-reducer";
import Users from './Users';
import Loader from '../../common/Loader/Loader';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getLoading } from './Selectors';



const UsersContainer = (props) => {
   useEffect(() => {
      props.getUsersPages(props.currentPage, props.pageSize)
   }, [props.currentPage, props.pageSize])

   const onPageChanged = (pageNumber) => {
      props.getUsersPagesChanged(pageNumber, props.pageSize)
   }

   return (
      props.isLoading ? <Loader /> : <Users
         totalUsersCount={props.totalUsersCount}
         pageSize={props.pageSize}
         currentPage={props.currentPage}
         onPageChanged={onPageChanged}
         users={props.users}
         unfollow={props.setUnFollow}
         follow={props.setFollow}
      />
   )
}

const mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isLoading: getLoading(state)
   }
}

export default compose(
   connect(mapStateToProps, {
      setUnFollow,
      setFollow,
      getUsersPages,
      getUsersPagesChanged,
   }))(UsersContainer)
