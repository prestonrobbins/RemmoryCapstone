import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const PostParentCard = ({ post }) => {
    const history = useHistory();


    return (
        
            <div>
                <h3>{post.title}</h3>
                <p>{post.textContent}</p>
                <img src={post.mediaUrl} style ={{width: '300px' }}></img>
            </div>

    )
}

// export default ChildCard