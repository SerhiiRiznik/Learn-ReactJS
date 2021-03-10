
import { addPostActionCreater, newPostTextActionCreater } from '../../../redux/userpage-reducer';
import { connect } from 'react-redux';
import Posts from "./Posts";


let mapStateToProps = (state) => {

   console.log(state);
   return {
      userPage: state.userPage
   }
}
let mapDispatchToProps = (dispatch) => {

   return {
      addPost: () => {
         dispatch(addPostActionCreater())
      },
      newPostText: (text) => {
         // let text = newPostElement.current.value
         dispatch(newPostTextActionCreater(text))
      }
   }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer