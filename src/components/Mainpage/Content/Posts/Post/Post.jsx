import post from './Post.module.css'
import React from 'react'
import { addLikeCountActionCreater } from '../../../../redux/userpage-reducer'


const Post = (props) => {
   // console.log(props.index)
   let addLike = (e) => {
      let a = e.target
      // console.log(a)
      props.dispatch(addLikeCountActionCreater(props.index, a))
   }

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
         <p onClick={addLike}
         >
            Like: {props.likesCount}
         </p>
      </div >
   )
}
export default Post