import { NavLink } from 'react-router-dom';
import contentDialogs from './../ContentDialogs.module.css'

const DialogItem = (props) => {
   return (
      <div className={contentDialogs.dialog + ' ' + contentDialogs.active}>
         {/* <img src='https://www.011global.com/Account/Slices/user-anonymous.png'></img> */}

         <NavLink to={'/dialogs/' + props.id} >
            <img src='https://www.011global.com/Account/Slices/user-anonymous.png'></img>
            {props.name}
         </NavLink>
      </div >
   )
}
export default DialogItem;