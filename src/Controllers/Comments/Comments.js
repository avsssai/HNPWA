import React,{Component} from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
    
    
    let { id } = useParams();
        return (
            <div>
    <h3>Comments for post number : {id}</h3>
            </div>
        )
    
}

export default Comments;