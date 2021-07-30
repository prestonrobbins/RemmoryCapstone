

import React, { useEffect, useState } from "react";
import ParentCard from "./ParentCard"
import {useHistory} from "react-router-dom";
import { getParentsByChildId } from "../../modules/UserProfileManager"

export const ParentList = () => {
    const [parents, setParents] = useState([]);
    const history = useHistory();

    const getParents = () => {
        getParentsByChildId().then(parents => setParents(parents));
    };

    useEffect(() => {
        getParents();
    }, []);

    return (
        <>
            
        <div>
            {parents.map((parent) => {
                console.log(parent)
                return (
                    <ParentCard parent={parent} key={parent.id} />)
            })}
        </div>
        </>
    );
}

// export default ParentList;