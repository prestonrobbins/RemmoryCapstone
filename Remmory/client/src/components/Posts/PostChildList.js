import React, { useEffect, useState } from "react";
import { getPostsByParentChildId } from "../../modules/PostManager";
import { getUser } from "../../modules/UserProfileManager";
import { PostChildCard } from "./PostChildCard";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as moment from 'moment';


export const PostChildList = () => {
    const [posts, setPost] = useState([]);
    const [user, setUser] = useState({});

    const history = useHistory();

    const {childId} = useParams()
    const getPosts = () => {
        getPostsByParentChildId(childId).then(post => setPost(post));
    };

    const getUserById = () => {
        getUser(childId).then(user => setUser(user));
    };
    const dateFixer = () => {
        const date = new Date(user.dateOfBirth);
        const cutDate = moment(date).format("YYYY-MM-DD")
        user.dateOfBirth = cutDate
    };
    dateFixer()



    useEffect(() => {
        getPosts();
        getUserById();
    }, [childId]);

    return (
        <>
        <div className="ViewHolder">
        <div className="userTopHolder">
            <h2 className="UserInfoTop">Your Parent: {user.firstName} {user.lastName}</h2> 
            
            
                <h2 className="UserInfoTop"> Birthday: {user.dateOfBirth}</h2>
                <Link to={`/postCreate/${childId}`}>
            <button className="CreateNewPostButton">
                Create New Post
            </button>
            </Link>
        </div>

            {console.log(posts)}
        <div className="ScrollView">
            {posts.map((post) => {
                console.log(post)
                return (
                    <PostChildCard getPosts={getPosts} post={post} key={post.id} />)
            })}

        </div>
        </div>
        </>
    );
}

// export default ChildList;
