import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ChildList } from "../NavBar/ChildList"

export const AddChildCard = ({ child, CreatePCR  }) => {
    const history = useHistory();
    console.log("child id", child.id)

    return (
        
            <div className="ChildCardHolder">
                <h4 className="AddChildCardName">{`${child.firstName} ${child.lastName}`}</h4>
                
                    <Link to={`/PostsChildView/${child.id}`}>
                    <button className="AddChildCardButton" onClick={() => CreatePCR({childId: child.id})}>Add Child</button>
                    </Link>
            </div>

    )
}

// export default ChildCard