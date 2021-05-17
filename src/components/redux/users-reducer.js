import { userAPI, usersPageAPI } from "../../API/api"

const SET_FOLLOWIN_TIME = 'SET_FOLLOWIN_TIME'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_LOADING = 'SET_LOADING'
const SET_PORTION_NUMBER = 'SET_PORTION_NUMBER'

let initialState = {
   isLoading: false,
   users: [],
   followingTime: false,
   pageSize: 5,
   totalUsersCount: null,
   currentPage: 1,
   portionSize: 10,
   portionNumber: 1,
}



let UsersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: true }
               }
               return user
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: false }
               }
               return user
            })
         }
      case SET_FOLLOWIN_TIME:
         return { ...state, followingTime: action.payload }
      case SET_USERS:
         return { ...state, users: action.users }
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case SET_TOTAL_USER_COUNT:
         return { ...state, totalUsersCount: action.usersCount }
      case SET_PORTION_NUMBER:
         return { ...state, portionNumber: action.portionNumber }
      case SET_LOADING:
         return { ...state, isLoading: action.loading }
      default:
         return state
   }

}

// -----------------------ACTION------------------
export const setFollowingTime = (payload) => ({ type: SET_FOLLOWIN_TIME, payload })
export const setFollow = (userId) => ({ type: FOLLOW, userId })
export const setUnfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USER_COUNT, usersCount })
export const setLoading = (loading) => ({ type: SET_LOADING, loading })
export const setPortionNumber = (portionNumber) => ({ type: SET_PORTION_NUMBER, portionNumber })
// ---------------------THUNK CREATOR-----------------
export const getUsersPages = (currentPage, pageSize) => {
   return async (dispatch) => {
      dispatch(setLoading(true))

      let response = await userAPI.getUsersPage(currentPage, pageSize)

      dispatch(setUsers(response.data.items))
      dispatch(setTotalUsersCount(response.data.totalCount))
      dispatch(setLoading(false))


   }
}
export const getUsersPagesChanged = (pageNumber, pageSize) => {
   return async (dispatch) => {
      dispatch(setLoading(true))
      dispatch(setCurrentPage(pageNumber))
      let response = await userAPI.getUsersPage(pageNumber, pageSize)

      dispatch(setUsers(response.data.items))
      dispatch(setLoading(false))


   }
}
export const unFollow = (userId) => async (dispatch) => {
   dispatch(setFollowingTime(true))
   let response = await usersPageAPI.setUnfollowUser(userId)

   if (response.data.resultCode === 0) {
      dispatch(setUnfollow(userId))
   }
   dispatch(setFollowingTime(false))
}
export const follow = (userId) => async (dispatch) => {
   dispatch(setFollowingTime(true))
   let response = await usersPageAPI.setFollowUser(userId)

   if (response.data.resultCode === 0) {
      dispatch(setFollow(userId))
   }
   dispatch(setFollowingTime(false))
}


export default UsersReducer