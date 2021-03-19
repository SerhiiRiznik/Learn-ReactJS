import user from './User.module.css'
import lfj from '../../../../assets/images/lookingForJob.png'
import hj from '../../../../assets/images/businessman.png'
import UserStatus from './UserStatus'

const UserInfo = (props) => {


   return (
      <>
         <div className={user.wrrap}>
            <div className='mainpage__img'>
               <img src={props.userProfile.photos.large} alt="imgPage" />
            </div>
            <div className='content-user'>
               <img src={props.userProfile.photos.small} alt='UserLogo'></img>
               <div className={user.content__user__info}>
                  <p><b>User Name:</b> {props.userProfile.fullName} </p>



                  <UserStatus aboutMe={'userProfile.aboutMe'} />





                  <ul><b>Contacts:</b>
                     <li><b>facebook:</b> {props.userProfile.contacts.facebook}</li>
                     <li><b>github:</b> {props.userProfile.contacts.github}</li>
                     <li><b>instagram:</b> {props.userProfile.contacts.instagramk}</li>
                     <li><b>twitter:</b> {props.userProfile.contacts.twitter}</li>
                     <li><b>vk:</b> {props.userProfile.contacts.vk}</li>
                     <li><b>website:</b> {props.userProfile.contacts.website}</li>
                     <li><b>youtube:</b> {props.userProfile.contacts.youtube}</li>
                  </ul>
                  <p>lookingForAJob: {!props.userProfile.lookingForAJob ? <label>Looking for Job<img src={lfj} alt='LookingForJob'></img></label> : <label>Have Job<img src={hj} alt='haveJob'></img></label>}</p>
                  <p>Web Site

                  </p>
               </div>
            </div>
         </div>
      </>
   )

}
export default UserInfo;