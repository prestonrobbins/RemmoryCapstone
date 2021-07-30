import React, { useEffect, useState } from "react";
import { getChildrenByParentId } from "../../modules/UserProfileManager";
import { ChildCard } from "./ChildCard";
import { useHistory } from "react-router-dom";

const ChildList = () => {
    const [children, setChildren] = useState([]);
    const history = useHistory();

    const getChildren = () => {
        getChildrenByParentId().then(children => setChildren(children));
    };

    useEffect(() => {
        getChildren();
    }, []);

    return (
        <>
            
        <div>
            {children.map((children) => {
                console.log(children)
                return (
                    <ChildCard child={child} key={child.id} />)
            })}

        </div>
        </>
    );
}

export default ChildList;
