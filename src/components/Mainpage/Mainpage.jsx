
import ContentMusic from "./Music/ContentMusic";
import ContentNews from "./News/ContentNews";
import Setting from "./Setting/Setting";
import ContentUser from "./Content/ContentUser";
import { Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import UserInfo from "./Content/UserInfo/UserInfo";
import ContainerContentDialogs from "./Dialogs/ContainerContentDialogs";
import ContainerUsers from "./Users/ContainerUsers";



const Mainpage = () => {


   return (

      <div className='mainpage'>
         <div className='container'>
            <div className='mainpage__wrapper'>
               <Navbar />
               <div className='wrapper-content'>


                  <Route path='/about' render={() => <UserInfo />} />
                  <Route path='/main' render={() => <ContentUser />} />
                  <Route path='/dialogs' render={() => <ContainerContentDialogs />} />
                  <Route path='/news' render={() => <ContentNews />} />
                  <Route path='/music' render={() => <ContentMusic />} />
                  <Route path='/settings' render={() => <Setting />} />

                  <Route path='/users' render={() => <ContainerUsers />} />

               </div>
            </div>
         </div>
      </div>

   )
}

export default Mainpage;