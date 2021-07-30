import React, { useEffect, useState } from "react";
import { getChildrenByParentId } from "../../modules/UserProfileManager";
import { ChildCard } from "./ChildCard";
import { useHistory } from "react-router-dom";

export const ChildList = () => {
    const [children, setChildren] = useState([]);
    const history = useHistory();

    const getChildren = () => {
        getChildrenByParentId().then(children => setChildren(children));
    };

    console.log("get dem kids", getChildren())

    useEffect(() => {
        getChildren();
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
