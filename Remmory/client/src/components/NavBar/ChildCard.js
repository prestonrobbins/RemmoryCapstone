import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


export const ChildCard = ({ child }) => {
    const history = useHistory();

    return (
        
            <div className="NavButtonsAlign">
                <Link to={`/PostsChildView/${child.id}`}>
                <button className="NavPersonButton">{child.firstName}
                </button>
                </Link>
            </div>

    )
}

// export default ChildCard