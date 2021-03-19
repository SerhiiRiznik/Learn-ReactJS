import React from 'react'


class UserStatus extends React.Component {
   constructor(props) {
      super(props)
      this.editMode = this.editMode.bind(this);
   }
   state = {
      editMode: false
   }



   editMode() {

      this.setState({
         editMode: true
      })
   }
   render() {
      return (
         <>

            {(this.state.editMode) ? <input value={this.state.aboutMe} type="text" /> :
               <p onDoubleClick={this.editMode}><b>About me:</b> {this.props.aboutMe}</p>}

         </>
      )



   }
}

export default UserStatus