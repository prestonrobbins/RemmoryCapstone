import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const ParentCard = ({ parent }) => {
    const history = useHistory();

    return (
        
            <div>
                <button>
                <Link to={`/PostsParentView/${parent.id}`}>{parent.firstName}</Link>
                </button>
            </div>

    )
}

export default ParentCard