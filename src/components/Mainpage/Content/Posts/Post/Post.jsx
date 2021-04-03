import post from './Post.module.css'
import React from 'react'


const Post = (props) => {
   return (
      <div className={post.item}>
         <p>
         </p>
         <p>
            massenge: {props.massenges}
         </p>
            name: { props.name}
         <p>
         </p>
      </div>
   )
}
export default Post