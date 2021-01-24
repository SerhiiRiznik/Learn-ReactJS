import post from './Post.module.css'
import React from 'react'
import { addLikeCountActionCreater } from '../../../../redux/state'


const Post = (props) => {
   // console.log(props.index)
   let addLike = () => {

      props.dispatch(addLikeCountActionCreater(props.index))
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
         <p onClick={addLike}>
            Like: {props.likesCount}
         </p>
      </div >
   )
}
export default Post