import React from 'react'
import { Field, Form } from 'react-final-form';
import contentDialogs from './ContentDialogs.module.css'
import DialogItem from './Dialog/DialogItem';
import MessageItem from './Message/MessageItem';



const ContentDialogs = (props) => {


   const dialogs = props.dialogItem.map((dialogs, idx) => <DialogItem name={dialogs.name} id={dialogs.id} key={idx} />)

   const messages = props._messag.map((messages, idx) => <MessageItem message={messages.message} key={idx} />)


   let addNewMasseg = (value) => {

      props.sentMessag(value.text)
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
            <MessagForm onSubmit={addNewMasseg} />
         </div>
      </div>
   )
}


const MessagForm = (props) => {


   return (
      <Form onSubmit={props.onSubmit}>
         {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
               <Field className={contentDialogs.newMessag} name='text' component="textarea" />

               <button className={contentDialogs.addMessag}>Отправить</button>
            </form>
         )}
      </Form >

   )













}



export default ContentDialogs;