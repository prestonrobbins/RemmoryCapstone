import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const PostParentCard = ({ post }) => {
    const history = useHistory();


    return (
        
            <div>
                <h3>{post.title}</h3>
                <p>{post.textContent}</p>

                {/* <button>
                <Link to={`/PostsParentView/${child.id}`}>{child.firstName}</Link>
                </button> */}
            </div>

    )
}

// export default ChildCard