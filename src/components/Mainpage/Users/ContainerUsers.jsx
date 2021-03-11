import { connect } from "react-redux";
import Users from "./Users";
import { folowAC, setUsersAC, unfolowAC } from "../../redux/users-reducer";




const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
}
const mapDisputchToProps = (dispatch) => {
   return {
      follow: (userId) => { dispatch(folowAC(userId)) },
      unfollow: (userId) => { dispatch(unfolowAC(userId)) },
      setUsers: (users) => { dispatch(setUsersAC(users)) },
   }
}


const ContainerUsers = connect(mapStateToProps, mapDisputchToProps)(Users)

export default ContainerUsers
