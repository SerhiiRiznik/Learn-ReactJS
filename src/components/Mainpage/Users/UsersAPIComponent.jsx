import axios from 'axios';
import React from 'react';

import Users from './Users';

class UsersAPIComponent extends React.Component {

   // constructor(props) {
   //    super(props)

   // }

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            console.log(response);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
         })
      // debugger
   }
   componentWillUnmount() {
      // debugger
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

      return <Users onPageChanged={onPageChanged} />

   }
}

export default UsersAPIComponent