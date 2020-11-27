import post from './Post.module.css'


const Post = (props) => {
   return (
      <div className={post.item}>
         <p>
            Id: {props.key}
         </p>
         <p>
            massenge: {props.massenges}
         </p>
            name: { props.name}
         <p>
            age: {props.age}
         </p>
         <p>
            Like: {props.likesCount}
         </p>
      </div >
   )
}
export default Post