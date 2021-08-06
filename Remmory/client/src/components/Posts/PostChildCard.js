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
                    <div className="DateFlexBox">
                <h4 className="DateName">Date Created: {post.dateTimeCreated}</h4>
                    <h4>Date To Send: {post.dateTimeToPost}</h4>
                    </div>
                    <h2>{post.title}</h2>
                    <p>{post.textContent}</p>
                    <div className="CardButtonHolder">
                    <Link to={`/PostEdit/${post.id}`}>
                        <button className="CardButton">
                        Edit
                        </button>
                    </Link>
                    <Link to={`/PostsChildView/${childId}`}>
                        <button className="CardButton" onClick={() => handleDelete(post.id)}>
                        Delete
                        </button>
                    </Link>
                    </div>
                </div>
                </div>

    )
}

// export default ChildCard