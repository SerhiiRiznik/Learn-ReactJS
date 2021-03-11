import { connect } from "react-redux";
import { newMessagActionCreater, sentMessagActionCreater } from '../../redux/messages-reducer';
import ContentDialogs from "./ContentDialogs";

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

const ContainerContentDialogs = connect(mapStateToProps, mapDispatchToProps)(ContentDialogs)


export default ContainerContentDialogs





