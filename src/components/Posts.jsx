// import './Posts.modul.css';
import posts from './Posts.module.css';

function Posts() {
   return (
      <div className={posts.user__posts}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <textarea></textarea>
            <button type="submit" value="Sent">Submit</button>
         </div>
         <div className={posts.user__posts}>
            <h2>All Posts</h2>
            <div className={posts.item}>
               <p>
                  here new post 1
            </p>
            </div>
            <div className={posts.item}>
               <p>
                  here new post 2
            </p>
            </div>
         </div>
      </div>
   )
}
export default Posts;