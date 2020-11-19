// const { default: Posts } = require("./Posts/Posts");
import Posts from './Posts/Posts'

function ContentUser(props) {


   let postData = [
      { id: 1, messages: 'Massenges #1', age: 25, likesCount: 32, name: 'viki', },
      { id: 2, messages: 'Massenges #1', age: 22, likesCount: 32, name: 'viki', },
      { id: 3, messages: 'Massenges #1', age: 25, likesCount: 32, name: 'viki', },
      { id: 4, messages: 'Massenges #2', age: 5, likesCount: 12, name: 'serg', },
      { id: 5, messages: 'Massenges #3', age: 26, likesCount: 12, name: '', },
      { id: 6, messages: 'Massenges #3', age: 26, likesCount: 12, name: '', },
      { id: 7, messages: 'Massenges #3', age: 76, likesCount: 12, name: 'Vera', },
      { id: 8, messages: 'Massenges #3', age: 26, likesCount: 12, name: '', },
      { id: 9, messages: 'Massenges #3', age: 12, likesCount: 12, name: 'Andry', },
   ]


   return (
      <div>
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
         <Posts postData={postData} />
      </div>
   )
}

export default ContentUser;
