import React from "react";
import classes from "./NewsItem.module.css";


const NewsItem = props => {
  const item = props.item;
  const id = item.id;
  var commentsRoute = `/comments/${id}`;
  var profileURL = `/name/${item.user}`
  return (
    <div className={classes.NewsItem}>
      <div className={classes.Title}>
        {/* <div className={classes.Srl}>{props.srlNumber}. </div> */}
        <div className={classes.Score}>{item.points} &#9733; </div>

        <a href={item.url}>{item.title}        <span className={classes.Domain}> ({item.domain})</span>
</a>

      </div>
      <div className={classes.Details}>
          <div className={classes.Time}>{item.time_ago}</div>
        <div className={classes.By}>
          by <a className={classes.Name} href={profileURL}>{item.user}</a>
        </div>
        <a
          className={classes.Comments}
          href={commentsRoute}
        >
          comments({item.comments_count})
        </a>
      </div>
    </div>
  );
};
export default NewsItem;
