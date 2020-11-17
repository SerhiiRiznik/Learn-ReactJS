import contentDialogs from './ContentDialogs.module.css'

const ContentDialogs = () => {
   return (
      <div className={contentDialogs.wrapper}>
         <div className={contentDialogs.dialogs}>
            <div className={contentDialogs.dialog + ' ' + contentDialogs.active}>
               Viki
            </div>
            <div className={contentDialogs.dialog}>
               Sveta
            </div>
            <div className={contentDialogs.dialog}>
               Ivan
            </div>
            <div className={contentDialogs.dialog}>
               Serg
            </div>
         </div>
         <div className={contentDialogs.massages}>
            <div className={contentDialogs.massagesItem}>
               Hi
            </div>
            <div className={contentDialogs.massagesItem}>
               Hi, i`m Sveta
            </div>
            <div className={contentDialogs.massagesItem}>
               How are your?
            </div>
            <div className={contentDialogs.massagesItem}>
               I`m ok, & your?
            </div>
         </div>
      </div>
   )
}
export default ContentDialogs;