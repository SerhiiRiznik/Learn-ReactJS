import { NavLink } from 'react-router-dom';
import contentDialogs from './ContentDialogs.module.css'

const DialogItem = (props) => {
   return (
      <div className={contentDialogs.dialog + ' ' + contentDialogs.active}>
         <NavLink to={'/Dialogs/ContentDialogs/' + props.id} >{props.name}</NavLink>
      </div >
   )
}
export default DialogItem;