import React, { useEffect, useState } from "react";
import { getPostsByParentChildIdDate } from "../../modules/PostManager";
import { getUser } from "../../modules/UserProfileManager"
import { PostParentCard } from "./PostParentCard"
import { useHistory, useParams } from "react-router-dom";
import * as moment from 'moment';


export const PostParentList = () => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();
    const [user, setUser] = useState({});
    const {parentId} = useParams()

    const getPosts = () => {
        getPostsByParentChildIdDate(parentId).then(posts => setPosts(posts));
    };

    const getUserById = () => {
        getUser(parentId).then(user => setUser(user));
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
    }, [parentId]);

    return (
        <>
        <div className="ViewHolder">
        <div className="userTopHolder">
            <h2 className="UserInfoTop">Your Parent: {user.firstName} {user.lastName}</h2> 
            <h2 className="UserInfoTop">{user.firstName}s Birthday: {user.dateOfBirth}</h2>
            </div>
            {posts.map((post) => {
                console.log(post)
                return (
                    <PostParentCard post={post} key={post.id} />)
            })}

        </div>
        </>
    );
}

// export default ChildList;
