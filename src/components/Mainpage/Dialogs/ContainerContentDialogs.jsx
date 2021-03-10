import { connect } from "react-redux";
import { newMessagActionCreater, sentMessagActionCreater } from '../../redux/messages-reducer';
import ContentDialogs from "./ContentDialogs";

const mapStateToProps = (state) => {
   // debugger
   return {
      dialogItem: state._messages.dialogItem,
      _messag: state._messages._messag,
   }
}
const mapDispatchToProps = (dispatch, messag) => {
   return {
      sentMessag: () => {
         dispatch(sentMessagActionCreater())
      },
      newMassegText: () => {
         dispatch(newMessagActionCreater(messag))
      },
   }
}

const ContainerContentDialogs = connect(mapStateToProps, mapDispatchToProps)(ContentDialogs)


export default ContainerContentDialogs





