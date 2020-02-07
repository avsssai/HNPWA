import React from 'react';
import Comment from '../Comment/Comment';

const Comments = (props) => {
    
    // var comments = props.comments.map(comment => {
    //     return <Comment key={comment.id} comment={comment}/>
    // })
    if(props.comments && props.comments.length>0){
        var subComments = props.comments.map(comment => {
            
            return <Comment key={comment.id} comment={comment} />
        });
    }
    
  return (
      <div>
        {subComments}

      </div>

  )  
}
export default Comments;