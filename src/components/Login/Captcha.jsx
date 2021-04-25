import React from 'react'
import style from './Login.module.css'

const Captcha = ({ captchaUrl, input, meta }) => {

   return (
      <div className={style.captcha}>
         <img src={captchaUrl} alt="captcha" />
         <input
            {...input}
            className={meta.touched && meta.error ? style.visited : style.input}
            type="text"
         />
      </div>
   )
}

export default Captcha
