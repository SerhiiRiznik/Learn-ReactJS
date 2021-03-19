import React from 'react';
import { connect } from "react-redux";
import {
   setUnFollow, setFollow,
   getUsersPages,
   getUsersPagesChanged,
} from "../../redux/users-reducer";
import Users from './Users';
import Loader from '../../Loader/Loader';
import { compose } from 'redux';



class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsersPages(this.props.currentPage, this.props.pageSize)

   }

   onPageChanged = (pageNumber) => {
      this.props.getUsersPagesChanged(pageNumber, this.props.pageSize)
   }


   render() {

      return <>
         {
            this.props.isLoading ? <Loader /> : <Users

               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               unfollow={this.props.setUnFollow}
               follow={this.props.setFollow}
            />}
      </>
   }
}


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isLoading: state.usersPage.isLoading
   }
}


export default compose(
   connect(mapStateToProps, {
      setUnFollow,
      setFollow,
      getUsersPages,
      getUsersPagesChanged,
   })
)(UsersContainer)
