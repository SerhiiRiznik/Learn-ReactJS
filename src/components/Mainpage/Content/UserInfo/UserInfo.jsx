import user from './User.module.css'
import lfj from '../../../../assets/images/lookingForJob.png'
import hj from '../../../../assets/images/businessman.png'

const UserInfo = (props) => {


   return (
      <>
         <div className={user.wrrap}>
            <div className='mainpage__img'>
               {!props.userProfile.photos.large}
            </div>
            <div className='content-user'>
               <img src={props.userProfile.photos.small} alt='UserLogo'></img>
               <div className='content-user__info'>
                  <p>User Name:{props.userProfile.fullName} </p>
                  <p>About me: {props.userProfile.aboutMe} </p>
                  <ul>Contacts:
                     <li>facebook: {props.userProfile.contacts.facebook}</li>
                     <li>github: {props.userProfile.contacts.github}</li>
                     <li>instagram: {props.userProfile.contacts.instagramk}</li>
                     <li>twitter: {props.userProfile.contacts.twitter}</li>
                     <li>vk: {props.userProfile.contacts.vk}</li>
                     <li>website: {props.userProfile.contacts.website}</li>
                     <li>youtube: {props.userProfile.contacts.youtube}</li>
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