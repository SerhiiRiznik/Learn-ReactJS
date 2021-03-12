import { connect } from "react-redux";
import UsersAPIComponent from "./UsersAPIComponent";
import { folowAC, setUsersAC, unfolowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";




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


const ContainerUsers = connect(mapStateToProps, mapDisputchToProps)(UsersAPIComponent)

export default ContainerUsers
