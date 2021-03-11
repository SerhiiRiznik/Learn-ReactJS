import React from 'react'
import Post from './Post/Post';
import posts from './Posts.module.css';
// import { addPostActionCreater, newPostTextActionCreater } from '../../../redux/userpage-reducer';




const Posts = (props) => {

   let post = props.userPage.map((post, index) => {
      return <Post
         key={index + 1}
         index={index + 1}
         dispatch={props.dispatch}
         massenges={post.messages}
         name={post.name}
         likesCount={post.likesCount}
      />
   })

   let newPostElement = React.createRef()

   let addPost = () => {
      props.addPost()
   }

   let newPostText = () => {
      let text = newPostElement.current.value
      props.newPostText(text)
   }

   return (

      <div className={posts.wrrap}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <textarea ref={newPostElement}
               value={props.postText}
               onChange={newPostText} />
            <button onClick={addPost}>Submit</button>
         </div>
         <div className={posts.user__posts}>
            <h2>All Posts</h2>
            {post}
         </div>
      </div>

   )
}



export default Posts;