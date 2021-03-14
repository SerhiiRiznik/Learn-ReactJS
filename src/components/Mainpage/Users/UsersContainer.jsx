import React from 'react';
import { connect } from "react-redux";
import {
   follow, setUsers, unfollow,
   setCurrentPage, setTotalUsersCount, setLoading
} from "../../redux/users-reducer";
import Users from './Users';
import Loader from '../../Loader/Loader';
import { userAPI } from '../../../API/api';



class UsersContainer extends React.Component {

   componentDidMount() {

      this.props.setLoading(true)

      userAPI.getUsersPage(this.props.currentPage, this.props.pageSize)
         .then(response => {
            console.log(response);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setLoading(false)

         })
   }

   onPageChanged = (pageNumber) => {

      this.props.setLoading(true)
      this.props.setCurrentPage(pageNumber)
      userAPI.getUsersPage(pageNumber, this.props.pageSize)
         .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setLoading(false);

         })
   }


   render() {
      return <>
         {this.props.isLoading ? <Loader /> : <Users

            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
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


const ContainerUsers = connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   setLoading,

})(UsersContainer)

export default ContainerUsers
