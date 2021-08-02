import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export const AddChildCard = ({ child, CreatePCR  }) => {
    const history = useHistory();

    return (
        
            <div>
                <h4>{`${child.firstName} ${child.lastName}`}</h4>
                <button>
                    <Link to={`/PostsChildView/${child.id}`}>Add Child</Link>
                </button>
            </div>

    )
}

// export default ChildCard