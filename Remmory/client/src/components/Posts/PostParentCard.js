import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import * as moment from 'moment';


export const PostParentCard = ({ post }) => {
    const history = useHistory();


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
                <h3 className="NavHeader">{post.title}</h3>
                <p>{post.textContent}</p>
                <p>Date Created: {post.dateTimeCreated}</p>
                <p>Date Recieved: {post.dateTimeToPost}</p>
            </div>
        </div>

    )
}

// export default ChildCard