import React from 'react';
import { connect } from "react-redux";
import {
   follow, setUsers, unfollow,
   setCurrentPage, setTotalUsersCount, setLoading
} from "../../redux/users-reducer";
import axios from "axios";
import Users from './Users';
import Loader from '../../Loader/Loader';



class UsersContainer extends React.Component {

   componentDidMount() {

      this.props.setLoading(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            console.log(response);
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
