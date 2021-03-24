import axios from "axios"

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': 'ccd31d52-0270-4a1e-8fd8-8ea64ac769db'
   }
});



export const userAPI = {
   getUser(userId) {

      return instance.get(`profile/` + userId)
         .then(response => (response.data))
   },
   getUsersPage(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
   },




}
export const userPageAPI = {

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

   updateStatus(userStatus) {

      return instance.put(`/profile/status`, { status: userStatus })

   },
   status(userIdStatus) {
      return instance.get(`/profile/status/${userIdStatus}`)
   }

}


export const authorized = {
   getUserAuth() {
      return instance.get(`auth/me`,)
         .then(response => (response.data))
   },

   login(email, password, rememderMe, captcha = true) {
      return instance.post(`auth/login`, { email, password, rememderMe, captcha })

   },
   logout() {
      return instance.delete(`auth/login`)

   },
}