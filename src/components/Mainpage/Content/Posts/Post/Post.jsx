import post from './Post.module.css'


function Post(props) {
   return (
      <div className={post.item}>
         <p>
            massenge: {props.massenges}
         </p>
            name: {props.name}
         <br />
         <span>age: {props.age}</span>

         <p>
            Like: {props.likesCount}
         </p>
      </div>
   )
}
export default Post