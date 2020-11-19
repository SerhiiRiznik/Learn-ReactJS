import { NavLink } from 'react-router-dom'
import contentDialogs from './ContentDialogs.module.css'
import DialogItem from './Dialog/DialogItem';
import MessageItem from './Message/MessageItem';


let dialogsItemData = [
   { id: 1, name: 'Viki' },
   { id: 2, name: 'Sveta' },
   { id: 3, name: 'Ivan' },
   { id: 4, name: 'Serg' },
   { id: 5, name: 'Andry' },
   { id: 6, name: 'Kolya' },
]
let MessageItemData = [
   { id: 1, message: 'Hi, i`m Sveta' },
   { id: 2, message: 'How are your?' },
   { id: 3, message: 'I`m ok, & your?' },
   { id: 4, message: 'I`m ok, too' },
   { id: 5, message: 'Dekuje, by' },
   { id: 6, message: '' },
]

const ContentDialogs = () => {

   const messages = MessageItemData.map((massages) => {
      return <MessageItem message={massages.message} />
   })

   const dialogs = dialogsItemData.map((dialogs) => {
      return <DialogItem name={dialogs.name} id={dialogs.id} />
   })



   return (
      <div className={contentDialogs.wrapper}>
         <div className={contentDialogs.dialogs}>
            {dialogs}
         </div>
         <div className={contentDialogs.massages}>
            {messages}
         </div>
      </div>
   )
}
export default ContentDialogs;