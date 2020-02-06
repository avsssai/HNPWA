import React from 'react';
import Comments from '../Comments/Comments';
import classes from './Comment.module.css';

const Comment = (props) => {
    var comment = props.comment;
  return (
    <div className={classes.Comment}>
    <div className={classes.CommentDetails}>{comment.user} <span className={classes.Time}>{comment.time_ago}</span> 
      <div className={classes.Content} dangerouslySetInnerHTML={{__html:comment.content}}></div>
    </div>
        <Comments comments={comment.comments}/>
    </div>
  )  
}
export default Comment;