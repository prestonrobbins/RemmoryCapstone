import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const ChildCard = ({ child }) => {
    const history = useHistory();

    return (
        
            <div>
                <button>
                <Link to={`/user/child/${child.id}`}>{child.firstName}</Link>
                </button>
            </div>

    )
}

// export default ChildCard