
import { addPost } from '../../../redux/userpage-reducer';
import { connect } from 'react-redux';
import Posts from "./Posts";


let mapStateToProps = (state) => {

   return {
      userPage: state.userPage.posts,
      postText: state.userPage.postText,
   }
}
const PostsContainer = connect(mapStateToProps, { addPost })(Posts)

export default PostsContainer
