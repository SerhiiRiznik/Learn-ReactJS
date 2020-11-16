const { default: ContentUser } = require("./Content/ContentUser");
const { default: Dialogs } = require("./Dialogs/Dialogs");
const { default: Navbar } = require("./Navbar/Navbar");


function Mainpage() {
   return (
      <div className='mainpage'>
         <div className='container'>
            <div className='mainpage__wrapper'>
               <Navbar />
               {/* <ContentUser name='Serg' age='26' /> */}
               <Dialogs />
            </div>
         </div>
      </div>
   )
}

export default Mainpage;