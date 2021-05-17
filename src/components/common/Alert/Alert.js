import React from 'react'
import style from './Alert.module.css'


const Alert = ({ message, info, hideAlert }) => {

   return (
      <>

         <div className={`${style.alert}  ${info}`} role="alert">
            {message}
            <button onClick={hideAlert} type="button" className="btn-close"></button>
         </div>



      </>
   )
}


export default Alert
