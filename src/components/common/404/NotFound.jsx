import React from 'react'
import { Link } from 'react-router-dom'
import style from './NotFound.module.css'

import { withRouter } from "react-router-dom";
import { compose } from 'redux';

const NotFound = (props) => {

   // const location = props.location.state.prevPath;
   console.log(props);
   // console.log(location);
   return (

      <div className={style.pageWrap}>
         <div className="container">
            <div className={style.row}>
               <div className="col-md-12">
                  <h3 className="display-1 d-block">404</h3>
                  <div className="mb-4 lead">The page you are looking for was not found.</div>
                  <Link to="/">Back to Home</Link><br />
               </div>
            </div>
         </div>
      </div>
   )
}


export default compose(
   withRouter
)(NotFound)
