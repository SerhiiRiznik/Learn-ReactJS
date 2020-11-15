function Posts() {
   return (
      <div className='user__posts'>
         <div className='user__new-post'>
            <h2>New post</h2>
            <textarea></textarea>
            <button type="submit" value="Sent">Submit</button>
         </div>
         <div className='user__posts'>
            <h2>All Posts</h2>
            <div className='post__item'>
               <p>
                  here new post 1
            </p>
            </div>
            <div className='post__item'>
               <p>
                  here new post 2
            </p>
            </div>
         </div>
      </div>
   )
}
export default Posts;