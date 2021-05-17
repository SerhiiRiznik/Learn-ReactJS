import React from "react";
import style from './Settings.module.css'
import { Form, Field } from 'react-final-form'
// import { required } from '../common/FormValidated/FormValidate'
// import { FORM_ERROR } from "final-form";



const ProfileSettings = (props) => {


   const loadPhoto = (event) => {
      console.log('event.target');
      console.log(event.target);
      // props.loadPhoto(event.target.files[0])
   }
   return (

      <div >
         <img src={props.profilePhoto.small} alt='profilePhoto' />
         <div className={style.wrap}>

            <label
               htmlFor="file" className={style.input__file__upload}>
               Upload new photo
                           </label>
            <input onChange={loadPhoto} id="file" type='file' accept=".jpg, .jpeg, .png"></input>
         </div>
         <button type="submit">Save</button>
      </div>
   )
}

export default ProfileSettings