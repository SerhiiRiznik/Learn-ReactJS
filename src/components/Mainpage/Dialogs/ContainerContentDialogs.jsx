import React from 'react'
import { connect } from "react-redux";
import { newMessagActionCreater, sentMessagActionCreater } from '../../redux/messages-reducer';
import ContentDialogs from "./ContentDialogs";


class ContainerContentDialogs extends React.Component {


   render() {

      return (
         <ContentDialogs {...this.props} />
      )

   }
}




const mapStateToProps = (state) => {

   return {

      dialogItem: state._messages.dialogItem,
      _messag: state._messages._messag,
      messagText: state._messages.massegText,
      authUser: state.auth.authorized
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      sentMessag: () => {
         dispatch(sentMessagActionCreater())
      },
      newMassegText: (messag) => {
         dispatch(newMessagActionCreater(messag))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerContentDialogs)






