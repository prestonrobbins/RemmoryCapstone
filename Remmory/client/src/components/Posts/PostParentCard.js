import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const PostParentCard = ({ post }) => {
    const history = useHistory();


    return (
        
        <div className="Content">    
            <img src={post.mediaUrl} className="UserImage"></img>
            <div className="TextContentHolder">
                <h3 className="NavHeader">{post.title}</h3>
                <p>{post.textContent}</p>
            </div>
        </div>

    )
}

// export default ChildCard