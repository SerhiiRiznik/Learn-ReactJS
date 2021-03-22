import React from 'react'


class UserStatus extends React.Component {




   constructor(props) {
      super(props)
      this.toggleEditMode = this.toggleEditMode.bind(this);
      this.changeStatus = this.changeStatus.bind(this);
   }
   state = {
      editMode: false,
      status: ''
   }
   changeStatus(e) {
      this.setState({ status: e.target.value })
   }
   toggleEditMode() {
      if (this.state.editMode) {
         this.setState({ editMode: false })
         this.props.updateStatus(this.state.status)
         // this.forceUpdate()
      } else {
         this.setState({ editMode: true })
      }

   }
   componentDidUpdate(prevProps, prevState) {
      if (prevProps.userStatus !== this.props.userStatus) {
         this.setState({
            status: this.state.status
         })
      }
   }

   render() {
      // debugger
      return (
         <>

            {
               (this.state.editMode) ?
                  <p><b>Status:</b>
                     <input autoFocus
                        onChange={this.changeStatus}
                        onBlur={this.toggleEditMode}
                        value={this.state.status}
                        type="text" />
                  </p> :
                  <p onDoubleClick={this.toggleEditMode}>
                     <b>Status:</b> {this.props.userStatus}
                  </p>
            }

         </>
      )



   }
}

export default UserStatus