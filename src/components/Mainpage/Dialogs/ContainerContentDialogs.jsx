import React from 'react'
import { connect } from "react-redux";
import { compose } from 'redux';
import { withAutorized } from '../../HOC/withAuthorized';
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


export default compose(

   connect(mapStateToProps, mapDispatchToProps),
   withAutorized,

)(ContainerContentDialogs)






