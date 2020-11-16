// import './Posts.modul.css';
import Post from './Post/Post';
import posts from './Posts.module.css';

function Posts(props) {
   return (
      <div className={posts.user__posts}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <textarea></textarea>
            <button type="submit" value="Sent">Submit</button>
         </div>
         <div className={posts.user__posts}>
            <h2>All Posts</h2>
            <Post massenges='Hi my friend' />
            <Post name={props.name} age={props.age} likesCount='12' />
            <Post massenges='Massenges #3' age={props.age} likesCount='3' />
         </div>
      </div>
   )
}
export default Posts;