import { NavLink } from "react-router-dom";
import classNames from 'classnames'
import style from './Navbar.module.css'
import { connect } from "react-redux"
import Navigation from "../../Header/Navigation";

const Navbar = ({ mobileBurger, }) => {
   return (
      <>
         {!mobileBurger &&
            <div className={classNames('col-3 p-0-left', { [style.mainpage__navbar]: true })}>
               <Navigation />
            </div>}
      </>
   )
}

let mapStateToProps = (state) => {

   return {
      mobileBurger: state.mobileReducer.windowWidth
   }
}

export default connect(mapStateToProps, null)(Navbar)