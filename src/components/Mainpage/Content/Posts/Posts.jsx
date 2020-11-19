import Post from './Post/Post';
import posts from './Posts.module.css';

function Posts(props) {

   const post = props.postData.map((post) => {
      return <Post id={post.id} massenges={post.messages} name={post.name} />
   })

   return (
      <div className={posts.user__posts}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <textarea></textarea>
            <button type="submit" value="Sent">Submit</button>
         </div>
         <div className={posts.user__posts}>
            <h2>All Posts</h2>
            {post}
         </div>
      </div>
   )
}
export default Posts;