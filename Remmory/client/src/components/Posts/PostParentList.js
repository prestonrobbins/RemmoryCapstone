import React, { useEffect, useState } from "react";
import { getPostsByParentChildId } from "../../modules/PostManager";
import { PostParentCard } from "./PostParentCard"
import { useHistory, useParams } from "react-router-dom";

export const PostParentList = () => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    const {id} = useParams()
    const getPosts = () => {
        getPostsByParentChildId(id).then(posts => setPosts(posts));
    };


    useEffect(() => {
        getPosts();
    }, [id]);

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
