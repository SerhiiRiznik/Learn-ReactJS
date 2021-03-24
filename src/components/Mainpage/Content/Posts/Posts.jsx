import React from 'react'
import Post from './Post/Post';
import posts from './Posts.module.css';
import { Form, Field } from 'react-final-form'
import { minValue, composeValidators } from '../../../common/FormValidated/FormValidate';





const Posts = (props) => {

   let post = props.userPage.map((post, index) => {
      return <Post
         key={index + 1}
         index={index + 1}
         dispatch={props.dispatch}
         massenges={post.messages}
         name={post.name}
      />
   })


   let formSubmit = (value) => {
      console.log('submit');
      console.log(value);
      props.addPost(value.postText)
   }
   return (

      <div className={posts.wrrap}>
         <div className={posts.user__new_post}>
            <h2>New post</h2>
            <NewPostForm onSubmit={formSubmit} />
         </div>
         <div className={posts.user__posts}>
            <h2>All Posts</h2>
            {post}
         </div>
      </div>

   )
}


const NewPostForm = (props) => {

   return (
      <Form
         onSubmit={props.onSubmit}
      >
         {({ handleSubmit, value }) => (
            <form onSubmit={handleSubmit}>
               <Field
                  name='postText'
                  placeholder='Enter post text'
                  validate={composeValidators(minValue(0))}
               >
                  {({ input, meta, placeholder }) => {
                     return (
                        <div>
                           <textarea {...input} type="textarea" placeholder={placeholder} />
                           { meta.error && meta.active && <span>{meta.error}</span>}
                        </div>
                     )
                  }}
               </Field>
               <button type='submit'>Submit</button>
            </form>

         )}
      </Form >
   )
}



export default Posts;