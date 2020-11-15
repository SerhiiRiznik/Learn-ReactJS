const { default: Content } = require("./Content");
const { default: Navbar } = require("./Navbar");


function Mainpage() {
   return (
      <div className='mainpage'>
         <div className='container'>
            <div className='mainpage__wrapper'>
               <Navbar />
               <Content />
            </div>
         </div>
      </div>
   )
}

export default Mainpage;