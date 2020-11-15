const { default: Posts } = require("./Posts");

function Content() {
   return (
      <div className='mainpage__content'>
         <div className='mainpage__img'>
            <img src='https://smartlogic.io/images/brand-assets/smartlogic-logo-yellow-1000.png'></img>
         </div>
         <div className='content-user'>
            <img src='https://www.011global.com/Account/Slices/user-anonymous.png'></img>
            <div className='content-user__info'>
               <p>User Name</p>
               <p>Date of Birth</p>
               <p>City</p>
               <p>Web Site</p>
            </div>
         </div>
         <Posts />
      </div>
   )
}

export default Content;
