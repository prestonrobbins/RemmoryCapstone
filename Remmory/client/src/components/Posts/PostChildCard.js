import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { deletePost } from "../../modules/PostManager"

export const PostChildCard = ({ post }) => {
    const history = useHistory();


    return (
        
            <div>
                <h3>{post.title}</h3>
                <p>{post.textContent}</p>

                <button>
                <Link to={`/PostEdit/${post.id}`}>Edit</Link>
                </button>
                <button onClick={() => deletePost(post.id)}>
                <Link to={`/PostsChildView/${post.id}`}>Delete</Link>
                </button>
            </div>

    )
}

// export default ChildCard