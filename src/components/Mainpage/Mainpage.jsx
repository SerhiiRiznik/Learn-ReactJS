
import ContentMusic from "./Music/ContentMusic";
import ContentNews from "./News/ContentNews";
import ContentSetting from "./Setting/ContentSetting";
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
                     <Route path='/Content/ContentUser' component={ContentUser} />
                     <Route path='/Dialogs/ContentDialogs' component={ContentDialogs} />
                     <Route path='/News/ContentNews' component={ContentNews} />
                     <Route path='/Music/ContentMusic' component={ContentMusic} />
                     <Route path='/Setting/ContentSetting' component={ContentSetting} />
                  </div>
               </div>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default Mainpage;