import React from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { deletePost } from "../../modules/PostManager"
import * as moment from 'moment';



export const PostChildCard = ({ post, getPosts }) => {
    const history = useHistory();
    const {childId} = useParams();

    const handleDelete = (postId) => {
        deletePost(postId).then(() => getPosts())
    }

    const dateFixerToPost = () => {
        const date = new Date(post.dateTimeToPost);
        const cutDate = moment(date).format("YYYY-MM-DD")
        post.dateTimeToPost = cutDate
        
    };

    const dateFixerToCreate = () => {
        const date = new Date(post.dateTimeCreated);
        const cutDate = moment(date).format("YYYY-MM-DD")
        post.dateTimeCreated = cutDate
    };

    dateFixerToPost()
    dateFixerToCreate()
 



    return (
        
                <div className="Content">
                <img src={post.mediaUrl} className="UserImage"></img>
                <div className="TextContentHolder">
                    <h3>{post.title}</h3>
                    <p>{post.textContent}</p>
                    <p>Date Created: {post.dateTimeCreated}</p>
                    <p>Date Sent: {post.dateTimeToPost}</p>
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