
import ContentMusic from "./Music/ContentMusic";
import ContentNews from "./News/ContentNews";
import Setting from "./Setting/Setting";
import ContentUser from "./Content/ContentUser";
import ContentDialogs from "./Dialogs/ContentDialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";



const Mainpage = (props) => {

   // console.log(props.state.userPage)

   return (
      <BrowserRouter>
         <div className='mainpage'>
            <div className='container'>
               <div className='mainpage__wrapper'>
                  <Navbar />
                  <div className='wrapper-content'>
                     <Route path='/user' render={() => <ContentUser
                        store={props.store}
                     // addLikes={props.addLikes}
                     />} />
                     <Route path='/dialogs' render={() => <ContentDialogs
                        state={props.store._state._messages}
                     />} />
                     <Route path='/news' render={() => <ContentNews />} />
                     <Route path='/music' render={() => <ContentMusic />} />
                     <Route path='/settings' render={() => <Setting />} />
                  </div>
               </div>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default Mainpage;