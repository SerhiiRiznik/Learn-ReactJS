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
   getUsersPhoto(photo) {
      const formData = new FormData();
      formData.append('image', photo)
      return instance.put(`/profile/photo`, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
   },
}
export const usersPageAPI = {
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
   },
   settingsProfile(settings) {

      return instance.put(`/profile`, settings)
   }
}


export const authorized = {
   getUserAuth() {
      return instance.get(`auth/me`,)
         .then(response => (response.data))
   },

   login(email, password, rememberMe = false, captcha = null) {
      return instance.post(`auth/login`, { email, password, rememberMe, captcha })

   },
   logout() {
      return instance.delete(`auth/login`)

   },
}
export const security = {
   getCaptchaUrl() {
      return instance.get(`security/get-captcha-url`)
   },
}