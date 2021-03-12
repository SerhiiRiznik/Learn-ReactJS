import React from 'react';
import { connect } from "react-redux";
import { folowAC, setUsersAC, unfolowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";
import axios from "axios";
import Users from './Users';


class UsersContainer extends React.Component {

   componentDidMount() {

      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            console.log(response);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            console.log(response);
            this.props.setUsers(response.data.items)
         })
   }


   render() {

      return <Users

         totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         onPageChanged={this.onPageChanged}
         users={this.props.users}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
      />

   }
}


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
   }
}
const mapDisputchToProps = (dispatch) => {
   return {
      follow: (userId) => { dispatch(folowAC(userId)) },
      unfollow: (userId) => { dispatch(unfolowAC(userId)) },
      setUsers: (users) => { dispatch(setUsersAC(users)) },
      setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
      setTotalUsersCount: (currentPage) => { dispatch(setTotalUsersCountAC(currentPage)) },
   }
}


const ContainerUsers = connect(mapStateToProps, mapDisputchToProps)(UsersContainer)

export default ContainerUsers
