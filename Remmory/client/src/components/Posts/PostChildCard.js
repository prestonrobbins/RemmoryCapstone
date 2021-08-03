import React from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { deletePost } from "../../modules/PostManager"

export const PostChildCard = ({ post, getPosts }) => {
    const history = useHistory();
    const {childId} = useParams();

    const handleDelete = (postId) => {
        deletePost(postId).then(() => getPosts())
    }



    return (
        
            <div>
                <h3>{post.title}</h3>
                <p>{post.textContent}</p>
                <img src={post.mediaUrl} style ={{width: '300px' }}></img>
                <button>
                <Link to={`/PostEdit/${post.id}`}>Edit</Link>
                </button>
                <button onClick={() => handleDelete(post.id)}>
                <Link to={`/PostsChildView/${childId}`}>Delete</Link>
                </button>
            </div>

    )
}

// export default ChildCard