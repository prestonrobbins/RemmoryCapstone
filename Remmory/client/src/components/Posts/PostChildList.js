import React, { useEffect, useState } from "react";
import { getPostsByParentChildId } from "../../modules/PostManager";
import { PostChildCard } from "./PostChildCard";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const PostChildList = () => {
    const [posts, setPost] = useState([]);
    const history = useHistory();

    const {childId} = useParams()
    const getPosts = () => {
        getPostsByParentChildId(childId).then(post => setPost(post));
    };


    useEffect(() => {
        getPosts();
    }, [childId]);

    return (
        <>
            <button>
            <Link to={`/postCreate/${childId}`}>Create New Post</Link>
            </button>
            {console.log(posts)}
        <div>
            {posts.map((post) => {
                console.log(post)
                return (
                    <PostChildCard getPosts={getPosts} post={post} key={post.id} />)
            })}

        </div>
        </>
    );
}

// export default ChildList;
