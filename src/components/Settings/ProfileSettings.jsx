import React from "react";
import style from './Settings.module.css'
import { Form, Field } from 'react-final-form'
import { required } from '../common/FormValidated/FormValidate'
import { FORM_ERROR } from "final-form";



const ProfileSettings = ({ profile, settingProfile }) => {

   const onSubmit = async (values) => {

      console.log(values);
      let dataMesseg = await settingProfile(values)

      return { [FORM_ERROR]: dataMesseg };
   }

   return (
      <Form
         onSubmit={onSubmit}>
         {({
            handleSubmit,
            submitting,
            values,
            submitError
         }) => (
            <form onSubmit={handleSubmit}>
               <ul className={style.wrap}>
                  <Field
                     name="aboutMe"
                     validate={required}
                     initialValue={profile.aboutMe}

                  >
                     {({ input, meta }) => (
                        <li className={style.item}>
                           <label ><b>aboutMe</b></label>
                           <input className={meta.error && style.required} type="text" {...input} />
                           {meta.touched && meta.error && <span className={style.spanRequired}>*</span>}
                        </li>
                     )}
                  </Field>
                  <ul>
                     {
                        Object.keys(profile.contacts).map((key) => {
                           return <Field initialValue={profile.contacts[key]} key={key} name={`${`contacts`}.${key}`}>
                              {({ input, meta }) => {
                                 return <li className={style.item}>
                                    <label className={style}><b>{key}:</b></label>
                                    <input type="text" {...input} />
                                 </li>
                              }}
                           </Field>
                        })
                     }
                  </ul>
                  <Field name='fullName'
                     validate={required}
                     initialValue={profile.fullName}
                  >
                     {({ input, meta }) => (
                        <li className={style.item}>
                           <label><b>fullName</b></label>
                           <input className={meta.error && style.required} type="text" {...input} />
                           {meta.touched && meta.error && <span className={style.spanRequired}>*</span>}
                        </li>
                     )}
                  </Field>
                  <Field name='lookingForAJob' type="checkbox"
                     initialValue={profile.lookingForAJob}
                  >
                     {({ input, meta }) => (
                        <li className={style.item}>
                           <label><b>lookingForAJob</b></label>
                           <input className={meta.error && style.required}  {...input} />
                           {meta.touched && meta.error && <span className={style.spanRequired}>*</span>}
                        </li>
                     )}
                  </Field>
                  {<Field name='lookingForAJobDescription'
                     validate={required}
                     initialValue={profile.lookingForAJobDescription}
                  >
                     {({ input, meta }) => (
                        <li className={style.item}>
                           <label><b>lookingForAJobDescription:</b></label>
                           <input className={meta.error && style.required} type="text" {...input} />
                           {meta.touched && meta.error && <span className={style.spanRequired}>*</span>}
                        </li>
                     )}
                  </Field>}
                  {
                     Object.keys(profile.photos).map((key) => {
                        return <Field key={key} name={key} >
                           {({ input, meta }) => (
                              <li className={style.item}>
                                 <label htmlFor="file" className={style}><b>{key}:</b></label>
                                 <input id="file" type='file' {...input} placeholder={profile.contacts[key]} />
                                 {meta.touched && meta.error && <span>{meta.error}</span>}
                              </li>
                           )}
                        </Field>
                     }
                     )
                  }
               </ul>
               {submitError && <div className={style.messeg}>{submitError}</div>}
               <button type="submit" disabled={submitting}>Save</button><br />
               <button type="reset" disabled={submitting}>Cansel</button>
               <pre>{JSON.stringify(values, undefined, 2)}</pre>
            </form>
         )
         }
      </Form>
   )
}

export default ProfileSettings