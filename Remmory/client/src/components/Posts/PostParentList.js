import React, { useEffect, useState } from "react";
import { getPostsByParentChildIdDate } from "../../modules/PostManager";
import { PostParentCard } from "./PostParentCard"
import { useHistory, useParams } from "react-router-dom";

export const PostParentList = () => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    const {parentId} = useParams()
    const getPosts = () => {
        getPostsByParentChildIdDate(parentId).then(posts => setPosts(posts));
    };


    useEffect(() => {
        getPosts();
    }, [parentId]);

    return (
        <>
        
            
        <div>
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
