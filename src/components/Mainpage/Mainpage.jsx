
import ContentMusic from "./Music/ContentMusic";
import ContentNews from "./News/ContentNews";
import Setting from "./Setting/Setting";
import ContentUser from "./Content/ContentUser";
import ContentDialogs from "./Dialogs/ContentDialogs";

const { Route, BrowserRouter } = require("react-router-dom");
const { default: Navbar } = require("./Navbar/Navbar");

function Mainpage() {
   return (
      <BrowserRouter>
         <div className='mainpage'>
            <div className='container'>
               <div className='mainpage__wrapper'>
                  <Navbar />
                  <div className='wrapper-content'>
                     <Route path='/user' component={ContentUser} />
                     <Route path='/dialogs' component={ContentDialogs} />
                     <Route path='/news' component={ContentNews} />
                     <Route path='/music' component={ContentMusic} />
                     <Route path='/settings' component={Setting} />
                  </div>
               </div>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default Mainpage;