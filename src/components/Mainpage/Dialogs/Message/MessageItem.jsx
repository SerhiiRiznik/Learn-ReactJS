import contentDialogs from './../ContentDialogs.module.css'

const MessageItem = (props) => {
   return (
      <div className={contentDialogs.messagesItem}>
         <img src='https://www.011global.com/Account/Slices/user-anonymous.png' alt=''></img>
         { props.message}
      </div>
   )
}

export default MessageItem;