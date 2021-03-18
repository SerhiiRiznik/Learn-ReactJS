import axios from "axios"

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': 'ccd31d52-0270-4a1e-8fd8-8ea64ac769db'
   }
});

export const authAPI = {
   getUserAuth() {
      return instance.get(`auth/me`,)
         .then(response => (response.data))
   },
}
export const userAPI = {
   getUser(userId) {

      return instance.get(`profile/` + userId)
         .then(response => (response.data))
   },
   getUsersPage(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
   },
   getFollow(userId) {
      return instance.get(`profile/` + userId)
         .then(response => (response.data))
   },


   setUnfollowUser(userId) {
      return instance.delete(`follow/${userId}`,)
   },
   setFollowUser(userId) {
      return instance.post(`follow/${userId}`,)
   },

}

