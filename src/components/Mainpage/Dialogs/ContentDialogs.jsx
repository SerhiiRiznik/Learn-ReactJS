import React from 'react'
import contentDialogs from './ContentDialogs.module.css'
import DialogItem from './Dialog/DialogItem';
import MessageItem from './Message/MessageItem';



const ContentDialogs = (props) => {

   // debugger
   const dialogs = props.dialogItem.map((dialogs, idx) => <DialogItem name={dialogs.name} id={dialogs.id} key={idx} />)

   const messages = props._messag.map((messages, idx) => <MessageItem message={messages.message} key={idx} />)


   let newMessagItem = React.createRef()


   let sentMessag = () => {
      props.sentMessag()

   }
   let newMassegText = () => {
      let messag = newMessagItem.current.value
      props.newMassegText(messag)
   }

   return (
      <div >
         <div className={contentDialogs.wrapper}>
            <div className={contentDialogs.dialogs}>
               {dialogs}
            </div>
            <div className={contentDialogs.messages}>
               {messages}
            </div>
         </div>
         <div className={contentDialogs.createMessag}>
            <textarea className={contentDialogs.newMessag}
               placeholder='Enter your masseg'
               ref={newMessagItem}
               value={props.messagText}
               onChange={newMassegText}
            ></textarea>
            <button className={contentDialogs.addMessag}
               onClick={sentMessag}
            >Отправить</button>
         </div>
      </div>
   )
}
export default ContentDialogs;