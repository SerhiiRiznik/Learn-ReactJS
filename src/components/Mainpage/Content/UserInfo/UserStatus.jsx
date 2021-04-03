import React, { useEffect, useState } from 'react'


const UserStatus = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.userStatus)


   useEffect(() => {
      setStatus(props.userStatus)
   }, [props.userStatus])

   const changeStatus = (e) => {
      setStatus(e.target.value)
   }

   const toggleEditMode = () => {
      if (editMode) {
         setEditMode(false)
         props.updateStatus(status)

      } else {
         setEditMode(true)
      }

   }

   return (
      <>
         {
            (editMode) ?
               <p><b>Status:</b>
                  <input className='form-control' autoFocus
                     onChange={changeStatus}
                     onBlur={toggleEditMode}
                     value={status}
                     type="text" />
               </p> :
               <p onDoubleClick={toggleEditMode}>
                  <b>Status:</b> {!props.userStatus ? <span>Enter your status</span> : props.userStatus}
               </p>
         }

      </>
   )
}

export default UserStatus