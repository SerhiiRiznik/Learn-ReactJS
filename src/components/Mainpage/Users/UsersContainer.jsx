import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {
   setPortionNumber,
   setUnFollow, setFollow,
   getUsersPages,
   getUsersPagesChanged,
} from "../../redux/users-reducer";
import Users from './Users';
import Loader from '../../common/Loader/Loader';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getLoading } from './Selectors';
import Pagination from '../../common/Pagination/Pagination';



const UsersContainer = (props) => {
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
            props.isLoading ? <Loader /> : <Users

               users={props.users}
               unfollow={props.setUnFollow}
               follow={props.setFollow}
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
   }
}

export default compose(
   connect(mapStateToProps, {
      setPortionNumber,
      setUnFollow,
      setFollow,
      getUsersPages,
      getUsersPagesChanged,
   }))(UsersContainer)
