import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAutorized } from '../../HOC/withAuthorized';
import { sentMessag } from '../../redux/messages-reducer';
import ContentDialogs from './ContentDialogs';
import { getDialogItem, get_messag, getmessagText } from './selectors'


const ContainerContentDialogs = (props) => {

   return <ContentDialogs {...props} />
}

const mapStateToProps = (state) => {

   return {
      dialogItem: getDialogItem(state),
      messag: get_messag(state),
      messagText: getmessagText(state),

   }
}
export default compose(

   withAutorized,
   connect(mapStateToProps, { sentMessag }),
)(ContainerContentDialogs)






