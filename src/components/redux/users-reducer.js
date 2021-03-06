const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_LOADING = 'SET_LOADING'

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isLoading: false,
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
      case SET_USERS:
         return { ...state, users: action.users }
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case SET_TOTAL_USER_COUNT:
         return { ...state, totalUsersCount: action.usersCount }
      case SET_LOADING:
         return { ...state, isLoading: action.loading }
      default:
         return state
   }

}

export default UsersReducer


export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USER_COUNT, usersCount })
export const setLoading = (loading) => ({ type: SET_LOADING, loading })