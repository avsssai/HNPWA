import React from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
    // var numberLimit = Math.floor(props.numberOfPages/10);

  const slider = (
    <div className={classes.Slider}>
      <div className={classes.LeftArrow} onClick={props.LeftArrowClickHandler}>&#x2190; </div>
      <div className={classes.PageNumber}>{props.pageNumber}/{props.pageLimit}</div>
      <div className={classes.RightArrow} onClick={props.RightArrowClickHandler}>  &#x2192;</div>
    </div>
  )
  return(
    <div className={classes.Pagination}>
        {slider}
    </div>
  )
}
export default Pagination;