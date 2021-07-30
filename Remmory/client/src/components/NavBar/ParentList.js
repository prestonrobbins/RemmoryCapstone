

import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../modules/postManager";
import ParentCard from "./ParentCard"
import {useHistory} from "react-router-dom";

const ParentList = () => {
    const [parents, setParents] = useState([]);
    const history = useHistory();

    const getParents = () => {
        getAllParents().then(parents => setParents(parents));
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

export default ParentList;