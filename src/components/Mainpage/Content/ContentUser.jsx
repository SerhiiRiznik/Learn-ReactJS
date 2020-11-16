const { default: Posts } = require("./Posts/Posts");

function ContentUser(props) {
   return (
      <div className='mainpage__content'>
         <div className='mainpage__img'>
            <img src='https://smartlogic.io/images/brand-assets/smartlogic-logo-yellow-1000.png'></img>
         </div>
         <div className='content-user'>
            <img src='https://www.011global.com/Account/Slices/user-anonymous.png'></img>
            <div className='content-user__info'>
               {/* <input type="text" placeholder='name' />
               <input type="text" placeholder='age' /> */}
               <p>User Name: {props.name}</p>
               <p>Date of Birth: {props.age}</p>
               <p>City</p>
               <p>Web Site</p>
            </div>
         </div>
         <Posts name={props.name} age={props.age} />
      </div>
   )
}

export default ContentUser;
