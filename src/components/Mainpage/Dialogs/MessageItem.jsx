import contentDialogs from './ContentDialogs.module.css'

const MessageItem = (props) => {
   return (
      <div className={contentDialogs.massagesItem}>
         { props.message}
      </div>
   )
}

export default MessageItem;