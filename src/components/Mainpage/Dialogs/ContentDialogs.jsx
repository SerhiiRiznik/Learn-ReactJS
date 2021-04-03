import React from 'react'
import { Field, Form } from 'react-final-form';
import { composeValidators, minValue } from '../../common/FormValidated/FormValidate';
import contentDialogs from './ContentDialogs.module.css'
import DialogItem from './Dialog/DialogItem';
import MessageItem from './Message/MessageItem';



const ContentDialogs = (props) => {

   const dialogs = props.dialogItem.map((dialogs, idx) => <DialogItem name={dialogs.name} id={dialogs.id} key={idx} />)
   const messages = props.messag.map((messages, idx) => <MessageItem message={messages.message} key={idx} />)

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
               <Field
                  name='text'
                  placeholder='Enter your messeg'
                  validate={composeValidators(minValue(0))}
               >
                  {({ input, meta, placeholder }) => (
                     <div>
                        <textarea {...input}
                           className={contentDialogs.newMessag}
                           type="textarea" placeholder={placeholder} />
                        { meta.error && meta.active && <span>{meta.error}</span>}
                     </div>
                  )}
               </Field>
               <button className={contentDialogs.addMessag}>Отправить</button>
            </form>
         )}
      </Form>

   )













}



export default ContentDialogs;