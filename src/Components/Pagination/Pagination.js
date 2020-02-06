import React from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
    // var numberLimit = Math.floor(props.numberOfPages/10);

  const slider = (
    <div className={classes.Slider}>
      <div className={classes.LeftArrow} onClick={props.LeftArrowClickHandler}> &lt; prev
         </div>
      <div className={classes.PageNumber}>{props.pageNumber}/{props.pageLimit}</div>
      <div className={classes.RightArrow} onClick={props.RightArrowClickHandler}> next &gt;	</div>
    </div>
  )
  return(
    <div className={classes.Pagination} >
        {slider}
    </div>
  )
}
export default Pagination;