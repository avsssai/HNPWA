import React from 'react';
import Comments from '../Comments/Comments';
import classes from './Comment.module.css';

const Comment = (props) => {
    var comment = props.comment;
    var userURL = `/name/${comment.user}`;
  return (
    <div className={classes.Comment}>
    <div className={classes.CommentDetails}><a href={userURL} className={classes.User}>{comment.user}</a> <span className={classes.Time}><i>{comment.time_ago}</i></span> 
      <div className={classes.Content} dangerouslySetInnerHTML={{__html:comment.content}}></div>
    </div>
        <Comments comments={comment.comments}/>
    </div>
  )  
}
export default Comment;