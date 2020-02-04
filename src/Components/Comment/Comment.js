import React from 'react';
import Comments from '../../Controllers/CommentsPage/CommentsPage';

const Comment = (props) => {
    var comment = props.comment;
  return (
    <div>
    <p>{comment.user} <i>says</i> {comment.content}</p>
        {/* <Comments comments={comment.comments}/> */}
    </div>
  )  
}
export default Comment;