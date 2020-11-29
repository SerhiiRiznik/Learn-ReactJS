import React from 'react'
import Post from './Post/Post';
import posts from './Posts.module.css';



const Posts = (props) => {

   console.log(props)
   let post = props.store._state.userPage.posts.map((post) => {
      return <Post massenges={post.messages} name={post.name}
         likesCount={post.likesCount}
      // addLikes={props.addLikes} 

      />
   })

   let newPostElement = React.createRef()

   let addPost = () => {
      props.store.addPost()
      props.store.newPostText('')
   }

   let newPostText = () => {
      let text = newPostElement.current.value
      props.store.newPostText(text)
   }

   console.log(props)

   return (
      <div className={posts.wrrap}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <textarea ref={newPostElement} value={props.store._state.userPage.postText} onChange={newPostText} />
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