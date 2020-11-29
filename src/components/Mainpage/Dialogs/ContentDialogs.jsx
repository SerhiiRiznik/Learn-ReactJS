import React from 'react'
import contentDialogs from './ContentDialogs.module.css'
import DialogItem from './Dialog/DialogItem';
import MessageItem from './Message/MessageItem';



const ContentDialogs = (props) => {
   console.log(props)
   const dialogs = props.state.dialogItem.map((dialogs) => {
      return <DialogItem name={dialogs.name} id={dialogs.id} />
   })

   const messages = props.state._messag.map((messages) => {
      return <MessageItem message={messages.message} />
   })


   let newMessagItem = React.createRef()
   let sentMessag = () => {
      let messag = newMessagItem.current.value
      alert(messag)
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
            <textarea className={contentDialogs.newMessag} ref={newMessagItem}></textarea>
            <button className={contentDialogs.addMessag} onClick={sentMessag}>Отправить</button>
         </div>
      </div>
   )
}
export default ContentDialogs;