import ContentMusic from "./Music/ContentMusic";
import ContentNews from "./News/ContentNews";
import Setting from "./Setting/Setting";
import { Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import UserInfo from "./Content/UserInfo/UserInfo";
import UsersContainer from "./Users/UsersContainer";
import ContentUserContainer from "./Content/ContentUserContainer";

import ContainerContentDialogs from "./Dialogs/ContainerContentDialogs";



const Mainpage = () => {


   return (

      <div className='mainpage'>
         <div className='container'>
            <div className='mainpage__wrapper'>
               <Navbar />
               <div className='wrapper-content'>


                  <Route path='/about' render={() => <UserInfo />} />

                  <Route path='/profile/:userId?' render={() => <ContentUserContainer />} />
                  <Route path='/dialogs' render={() => <ContainerContentDialogs />} />
                  <Route path='/news' render={() => <ContentNews />} />
                  <Route path='/music' render={() => <ContentMusic />} />
                  <Route path='/settings' render={() => <Setting />} />
                  <Route path='/users' render={() => <UsersContainer />} />

               </div>
            </div>
         </div>
      </div>

   )
}

export default Mainpage;