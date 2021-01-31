import React from 'react'
import { addPostActionCreater, newPostTextActionCreater } from '../../../redux/userpage-reducer';
import Post from './Post/Post';
import posts from './Posts.module.css';



const Posts = (props) => {
   // console.log(props)
   debugger
   let post = props.state.userPage.posts.map((post, index) => {
      return <Post
         key={index + 1}
         index={index + 1}
         dispatch={props.dispatch}
         massenges={post.messages}
         name={post.name}
         likesCount={post.likesCount}
      />
   })
   // debugger


   // ----------------------------------------------------
   // Нужно использовать Bind(store) в index.js чтобы функция 
   // которую мы вызиваем в постах ссылалась на обэкт в котором она сидит,
   // при изменении Store в независимости от имени функция работала   
   // ----------------------------------------------------
   let newPostElement = React.createRef()

   let addPost = () => {
      props.dispatch(addPostActionCreater())
   }

   let newPostText = () => {
      let text = newPostElement.current.value
      props.dispatch(newPostTextActionCreater(text))
   }

   return (
      <div className={posts.wrrap}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <textarea ref={newPostElement} value={props.state.userPage.postText} onChange={newPostText} />
            <button onClick={addPost}>Submit</button>
            {/* <button >DANGER</button> */}
         </div>
         <div className={posts.user__posts}>
            <h2>All Posts</h2>
            {post}
         </div>
      </div >
   )

}
export default Posts;