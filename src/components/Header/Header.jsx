import React from 'react'


const Header = (props) => {
  
   if (!props.authUser.authorized) {
      return (
         <div className=' container'>
            <nav className='d'>
               <div className='d'>
                  <ul className='nav nav-tabs justify-content-end' style={{ height: '50px' }}>

                     <li className='nav-item '></li>
                     <li className='nav-item'></li>
                     <li className='nav-item'></li>
                     <li className='nav-item'>
                        <button className='btn btn-outline-secondary' type="button">
                           LogIn
                        </button></li>

                  </ul>
               </div>
            </nav>
         </div>
      )
   } else {
      return (
         <div className=' container'>
            <nav className='d'>
               <div className='d'>
                  {/* <img className='' style={{ width: '100px' }} src='https://yoursite.com/wp-content/uploads/2020/06/logo-ys.png'></img> */}
                  <ul className='nav nav-tabs justify-content-end align-items-center' style={{ height: '50px' }}>


                     <li  className='nav-item' title={'User Id: '+props.authUser.userId + ', Login: ' + props.authUser.login} >
                     PhotoUser
                     </li>
                     {/* <li className='nav-item'>Login: {props.authUser.login}</li> */}
                     <li style={{ paddingLeft: '5px' }} className='nav-item'>Email: {props.authUser.email}</li>
                     <li style={{ paddingLeft: '5px' }} className='nav-item'>
                        <button style={{ paddingLeft: '5px' }} className='btn btn-outline-secondary' type="button">
                           LogOut
                           
                        </button>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      );
   }

}

export default Header;