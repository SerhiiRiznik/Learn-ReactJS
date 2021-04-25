import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAutorized } from '../../HOC/withAuthorized';
import { sentMessag } from '../../redux/messages-reducer';
import ContentDialogs from './ContentDialogs';
import { getDialogItem, getMessag, } from './selectors'


const ContainerContentDialogs = (props) => {

   return <ContentDialogs {...props} />
}

const mapStateToProps = (state) => {

   return {
      dialogItem: getDialogItem(state),
      messag: getMessag(state),
   }
}
export default compose(

   withAutorized,
   connect(mapStateToProps, { sentMessag }),
)(ContainerContentDialogs)






