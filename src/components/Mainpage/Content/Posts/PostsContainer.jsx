
import { addPostActionCreater, newPostTextActionCreater } from '../../../redux/userpage-reducer';
import { connect } from 'react-redux';
import Posts from "./Posts";


let mapStateToProps = (state) => {

   return {
      userPage: state.userPage.posts,
      postText: state.userPage.postText,

   }
}
let mapDispatchToProps = (dispatch) => {

   return {
      addPost: () => {
         dispatch(addPostActionCreater())
      },
      newPostText: (text) => {
         dispatch(newPostTextActionCreater(text))
      }
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer