import post from './Post.module.css'
import React from 'react'

const Post = (props) => {


   // let newPostElement = React.createRef()

   // let a = (likes) => {
   //    let like = newLike.innerHTML
   //    props.addLikes(like)
   //    rerenderEntireTree(state)
   // }


   // let addLikes = () => {

   //    props.addLikes()
   //    rerenderEntireTree(state)
   // }


   return (
      <div className={post.item}>
         <p>
            {/* Id: {props.key} */}
         </p>
         <p>
            massenge: {props.massenges}
         </p>
            name: { props.name}
         <p>
            {/* age: {props.age} */}
         </p>
         <p >
            Like: {props.likesCount}
         </p>
      </div >
   )
}
export default Post