import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const ParentCard = ({ parent }) => {
    const history = useHistory();

    return (
        
            <div className="NavButtonsAlign">
                <Link to={`/PostsParentView/${parent.id}`}>
                <button className="NavPersonButton">{parent.firstName}
                </button>
                </Link>
            </div>

    )
}

export default ParentCard