import React from 'react'
import style from './User.module.css'
import lfj from '../../../../assets/images/lookingForJob.png'
import hj from '../../../../assets/images/businessman.png'
import UserStatus from './UserStatus'
import UserPhoto from '../../../../assets/images/userAvatarNull.png'
import { useState } from 'react'

const UserInfo = (props) => {
   let [showInput, setShowInput] = useState(false)

   const loadPhoto = (event) => {
      props.loadPhoto(event.target.files[0])
   }

   return (
      <div className={style.wrrap}>
         <div className={style.photo}>
            <img
               onMouseEnter={() => setShowInput(true)}
               onMouseLeave={() => setShowInput(false)}
               src={props.userProfile.photos.large || UserPhoto} alt="imgPage" />

            {props.isOwner && showInput ? <div>
               <label
                  onMouseEnter={() => setShowInput(true)}
                  onMouseLeave={() => setShowInput(false)}
                  htmlFor="file" className={style.input__file__upload}>
                  Upload new photo
                  </label>
               <input onChange={loadPhoto} id="file" type='file' accept=".jpg, .jpeg, .png"></input>
            </div> : null}
         </div>
         <div className='content-user'>
            <div className={style.content__user__info}>
               <div><span>User Name:</span> {props.userProfile.fullName}</div>
               <div><span>About Me:</span> {props.userProfile.aboutMe}</div>
               <UserStatus
                  aboutMe={props.userProfile.aboutMe}
                  updateStatus={props.updateStatus}
                  userStatus={props.status}
                  isOwner={props.isOwner}
               />
               <ul><span>Contacts:</span>
                  <li><span>facebook:</span> {props.userProfile.contacts.facebook}</li>
                  <li><span>github:</span> {props.userProfile.contacts.github}</li>
                  <li><span>instagram:</span> {props.userProfile.contacts.instagram}</li>
                  <li><span>twitter:</span> {props.userProfile.contacts.twitter}</li>
                  <li><span>vk:</span> {props.userProfile.contacts.vk}</li>
                  <li><span>website:</span> {props.userProfile.contacts.website}</li>
                  <li><span>youtube:</span> {props.userProfile.contacts.youtube}</li>
               </ul>
               <p><span>Looking for a job:</span> {props.userProfile.lookingForAJob ? <label>Looking <img src={lfj} alt='LookingForJob'></img></label> : <label>Have Job <img src={hj} alt='haveJob'></img></label>}</p>
               <p><span>Job description:</span> {props.userProfile.lookingForAJobDescription && <label>{props.userProfile.lookingForAJobDescription}</label>}</p>
            </div>
         </div>
      </div>
   )
}
export default UserInfo;