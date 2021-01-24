
import ContentMusic from "./Music/ContentMusic";
import ContentNews from "./News/ContentNews";
import Setting from "./Setting/Setting";
import ContentUser from "./Content/ContentUser";
import ContentDialogs from "./Dialogs/ContentDialogs";
import { Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import UserInfo from "./Content/UserInfo/UserInfo";



const Mainpage = (props) => {

   // console.log(props.state.userPage)

   return (

      <div className='mainpage'>
         <div className='container'>
            <div className='mainpage__wrapper'>
               <Navbar />
               <div className='wrapper-content'>
                  <Route path='/about' render={() => <UserInfo />} />
                  <Route path='/main' render={() => <ContentUser
                     state={props.state}
                     dispatch={props.dispatch}

                  // addLikes={props.addLikes}
                  />} />
                  <Route path='/dialogs' render={() => <ContentDialogs
                     state={props.state._messages}
                  />} />
                  <Route path='/news' render={() => <ContentNews />} />
                  <Route path='/music' render={() => <ContentMusic />} />
                  <Route path='/settings' render={() => <Setting />} />
               </div>
            </div>
         </div>
      </div>

   )
}

export default Mainpage;