import { NavLink } from 'react-router-dom'
import contentDialogs from './ContentDialogs.module.css'
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';


const ContentDialogs = () => {
   return (
      <div className={contentDialogs.wrapper}>
         <div className={contentDialogs.dialogs}>
            <DialogItem name='Viki' id='1' />
            <DialogItem name='Sveta' id='2' />
            <DialogItem name='Ivan' id='3' />
            <DialogItem name='Serg' id='4' />
         </div>
         <div className={contentDialogs.massages}>
            <MessageItem message='Hi, i`m Sveta' />
            <MessageItem message='How are your?' />
            <MessageItem message='I`m ok, & your?' />
            <MessageItem message='I`m ok, too' />
         </div>
      </div>
   )
}
export default ContentDialogs;