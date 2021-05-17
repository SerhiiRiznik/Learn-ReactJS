import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import style from './Users.module.css'

import classNames from 'classnames/bind';

export default function UsersLoader() {
   return (
      <div className={style.skeleton}>
         <div>
            <Skeleton className={classNames({
               [style.avatar]: true,
            })} animation="wave" variant="rect" width={185} height={185} />
            <Skeleton className={classNames({
               [style.button]: true,
            })} animation="wave" />
         </div>
         <div className={style.info}>
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
         </div>
      </div>
   );
}