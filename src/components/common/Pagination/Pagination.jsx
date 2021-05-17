import React from "react";
import style from './Pagination.module.css'
import classNames from 'classnames'



const Pagination = React.memo(({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10, portionNumber, setPortionNumber }) => {

   let pagesCount = Math.ceil(totalUsersCount / pageSize)
   let pages = []

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }


   let portionCount = Math.ceil(pagesCount / portionSize)
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rightPortionPageNumber = portionNumber * portionSize


   return (
      <ul className={classNames('pagination')}>

         {
            portionNumber > 1 &&
            <button className={classNames(style.paginationBtn, {
               'page-link': true,
            })}
               onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>
         }
         {
            pages
               .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
               .map((p, idx) => {
                  return <li
                     className={
                        classNames({
                           'page-item': true,
                           'active': currentPage === p
                        })
                     }
                     key={idx + 1}


                  >
                     <button className={
                        classNames({
                           'page-link': true,

                        })
                     }
                        onClick={(e) => { onPageChanged(p) }}
                        disabled={currentPage === p && 'disabled'}
                     >
                        {p}</button>
                  </li>

               })}
         {
            portionCount > portionNumber &&
            <button className={classNames(style.paginationBtn, {
               'page-link': true,
               'btn': true,
            })}
               onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
         }

      </ul>
   )
})

export default Pagination

