import user from './User.module.css'

const UserInfo = (props) => {
   return (
      <div className={user.wrrap}>
         <div className='mainpage__img'>
            {/* <img src='https://smartlogic.io/images/brand-assets/smartlogic-logo-yellow-1000.png' alt='UserImg'></img> */}
         </div>
         <div className='content-user'>
            <img src='https://www.011global.com/Account/Slices/user-anonymous.png' alt='UserLogo'></img>
            <div className='content-user__info'>
               {/* <input type="text" placeholder='name' />
               <input type="text" placeholder='age' /> */}
               <p>User Name: </p>
               <p>Date of Birth: </p>
               <p>City</p>
               <p>Web Site</p>
            </div>
         </div>
      </div>
   )
}
export default UserInfo;