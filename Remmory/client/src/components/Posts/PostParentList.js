import React, { useEffect, useState } from "react";
import { getPostsByParentChildId } from "../../modules/PostManager";
import { PostParentCard } from "./PostParentCard"
import { useHistory } from "react-router-dom";

export const PostParentList = () => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    const getPosts = () => {
        getPostsByParentChildId().then(posts => setPosts(posts));
    };


    useEffect(() => {
        getPosts();
    }, []);

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
