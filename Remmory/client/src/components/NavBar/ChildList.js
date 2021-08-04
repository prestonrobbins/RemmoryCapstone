import React, { useEffect, useState } from "react";
import { getChildrenByParentId } from "../../modules/UserProfileManager";
import { ChildCard } from "./ChildCard";
import { useHistory, useParams } from "react-router-dom";

export const ChildList = ({childToggle, setChildToggle}) => {
    const [children, setChildren] = useState([]);
    const history = useHistory();

    const getChildren = () => {
        getChildrenByParentId().then(children => setChildren(children));
    };
    
    let {childId} = useParams()
    setChildToggle(childId);

    console.log("child id", childId)




    useEffect(() => {
        getChildren(); 
    }, [useParams()]);

    return (
        <>
            
        <div>
            {children.map((child) => {
                return (
                    <ChildCard child={child} key={child.id} />)
            })}

        </div>
        </>
    );
}

// export default ChildList;
