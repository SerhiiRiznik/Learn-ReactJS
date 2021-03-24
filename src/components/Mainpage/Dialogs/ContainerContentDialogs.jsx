import React from 'react'
import { connect } from "react-redux";
import { compose } from 'redux';
import { withAutorized } from '../../HOC/withAuthorized';
import { sentMessag } from '../../redux/messages-reducer';
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



export default compose(

   withAutorized,
   connect(mapStateToProps, { sentMessag }),
)(ContainerContentDialogs)






