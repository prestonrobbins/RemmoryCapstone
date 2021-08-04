import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ChildList } from "../NavBar/ChildList"

export const AddChildCard = ({ child, CreatePCR  }) => {
    const history = useHistory();
    console.log("child id", child.id)

    return (
        
            <div>
                <h4>{`${child.firstName} ${child.lastName}`}</h4>
                <button onClick={() => CreatePCR({childId: child.id})}>
                    <Link to={`/PostsChildView/${child.id}`}>Add Child</Link>
                </button>
            </div>

    )
}

// export default ChildCard