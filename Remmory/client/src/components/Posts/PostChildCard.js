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
        
                <div className="Content">
                <img src={post.mediaUrl} className="UserImage"></img>
                <div className="TextContentHolder">
                    <h3>{post.title}</h3>
                    <p>{post.textContent}</p>
                    <div className="CardButtonHolder">
                    <Link to={`/PostEdit/${post.id}`}>
                        <button>
                        Edit
                        </button>
                    </Link>
                    <Link to={`/PostsChildView/${childId}`}>
                        <button onClick={() => handleDelete(post.id)}>
                        Delete
                        </button>
                    </Link>
                    </div>
                </div>
                </div>

    )
}

// export default ChildCard