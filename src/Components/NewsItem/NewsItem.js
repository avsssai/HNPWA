import React from "react";
import classes from "./NewsItem.module.css";


const NewsItem = props => {
  const item = props.item;
  const id = item.id;
  var commentsRoute = `/comments/${id}`;

  return (
    <div className={classes.NewsItem}>
      <div className={classes.Title}>
        <div className={classes.Srl}>{props.srlNumber}. </div>
        <a href={item.url}>{item.title}</a>

        <span className={classes.Domain}> ({item.domain})</span>
      </div>
      <div className={classes.Details}>
        <div className={classes.Score}>{item.points} points</div>

        <div className={classes.By}>
          by <span className={classes.Name}>{item.user}</span>
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
