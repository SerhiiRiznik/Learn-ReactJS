import React from 'react'
import Post from './Post/Post';
import posts from './Posts.module.css';



const Posts = (props) => {
   console.log(props)

   let post = props.state.map((post) => {
      return <Post id={post.id} massenges={post.messages} name={post.name} />
   })

   let newPostElement = React.createRef()

   let addPost = () => {
      let text = newPostElement.current.value
      alert(text)
   }

   return (
      <div className={posts.wrrap}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <textarea ref={newPostElement}></textarea>
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