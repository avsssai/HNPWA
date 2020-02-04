import React from 'react';
import Comment from '../Comment/Comment';
import Loader from '../Loader/Loader';

const Comments = (props) => {
    
    // var comments = props.comments.map(comment => {
    //     return <Comment key={comment.id} comment={comment}/>
    // })
    if(props.comments){
        var comments = props.comments.map(comment => {
            
            return <Comment key={comment.id} comment={comment} />
        });
    }
    
  return (
      <div>
        {comments}

      </div>

  )  
}
export default Comments;