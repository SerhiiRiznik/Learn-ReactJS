import { NavLink } from 'react-router-dom'
import contentDialogs from './ContentDialogs.module.css'
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';


const ContentDialogs = () => {

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

   return (
      <div className={contentDialogs.wrapper}>
         <div className={contentDialogs.dialogs}>
            <DialogItem name={dialogsItemData[0].name} id={dialogsItemData[0].id} />
            <DialogItem name={dialogsItemData[1].name} id={dialogsItemData[1].id} />
            <DialogItem name={dialogsItemData[2].name} id={dialogsItemData[2].id} />
            <DialogItem name={dialogsItemData[3].name} id={dialogsItemData[3].id} />
            <DialogItem name={dialogsItemData[4].name} id={dialogsItemData[4].id} />
            <DialogItem name={dialogsItemData[5].name} id={dialogsItemData[5].id} />
         </div>
         <div className={contentDialogs.massages}>
            <MessageItem message={MessageItemData[0].message} />
            <MessageItem message={MessageItemData[1].message} />
            <MessageItem message={MessageItemData[2].message} />
            <MessageItem message={MessageItemData[3].message} />
            <MessageItem message={MessageItemData[4].message} />
            <MessageItem message={MessageItemData[5].message} />

         </div>
      </div>
   )
}
export default ContentDialogs;