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
      <>
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
               <img src={props.userProfile.photos.small || UserPhoto} alt='UserLogo'></img>
               <div className={style.content__user__info}>
                  <div><b>User Name:</b> {props.userProfile.fullName}</div>
                  <div><b>About Me:</b> {props.userProfile.aboutMe}</div>
                  <UserStatus
                     aboutMe={props.userProfile.aboutMe}
                     updateStatus={props.updateStatus}
                     userStatus={props.status}
                     isOwner={props.isOwner}
                  />
                  <ul><b>Contacts:</b>
                     <li><b>facebook:</b> {props.userProfile.contacts.facebook}</li>
                     <li><b>github:</b> {props.userProfile.contacts.github}</li>
                     <li><b>instagram:</b> {props.userProfile.contacts.instagram}</li>
                     <li><b>twitter:</b> {props.userProfile.contacts.twitter}</li>
                     <li><b>vk:</b> {props.userProfile.contacts.vk}</li>
                     <li><b>website:</b> {props.userProfile.contacts.website}</li>
                     <li><b>youtube:</b> {props.userProfile.contacts.youtube}</li>
                  </ul>
                  <p><b>Looking for a job:</b> {props.userProfile.lookingForAJob ? <label>Looking <img src={lfj} alt='LookingForJob'></img></label> : <label>Have Job <img src={hj} alt='haveJob'></img></label>}</p>
                  <p><b>Job description:</b> {props.userProfile.lookingForAJobDescription && <label>{props.userProfile.lookingForAJobDescription}</label>}</p>
               </div>
            </div>
         </div>
      </>
   )
}
export default UserInfo;