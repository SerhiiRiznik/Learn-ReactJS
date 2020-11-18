// import './Posts.modul.css';
import Post from './Post/Post';
import posts from './Posts.module.css';

function Posts(props) {

   let postData = [
      { id: 1, messages: 'Massenges #1', age: 25, likesCount: 32, name: 'viki', },
      { id: 2, messages: 'Massenges #2', age: "2", likesCount: 12, name: 'serg', },
      { id: 3, messages: 'Massenges #3', age: 26, likesCount: 12, name: '', },
   ]



   return (
      <div className={posts.user__posts}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <textarea></textarea>
            <button type="submit" value="Sent">Submit</button>
         </div>
         <div className={posts.user__posts}>
            <h2>All Posts</h2>
            <Post massenges={postData[0].messages} name={postData[0].name} />
            <Post name={postData[1].name} age={postData[1].age} likesCount={postData[1].likesCount} />
            <Post massenges={postData[2].messages} age={postData[2].age} likesCount={postData[2].likesCount} />
         </div>
      </div>
   )
}
export default Posts;