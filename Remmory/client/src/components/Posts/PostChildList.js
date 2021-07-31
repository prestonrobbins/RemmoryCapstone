import React, { useEffect, useState } from "react";
import { getChildrenByParentId } from "../../modules/UserProfileManager";
import { ChildCard } from "./ChildCard";
import { useHistory } from "react-router-dom";

export const PostList = () => {
    const [posts, setPost] = useState([]);
    const history = useHistory();

    const getPosts = () => {
        getChildrenByParentId().then(children => setChildren(children));
    };


    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            
        <div>
            {children.map((child) => {
                console.log(child)
                return (
                    <ChildCard child={child} key={child.id} />)
            })}

        </div>
        </>
    );
}

// export default ChildList;
