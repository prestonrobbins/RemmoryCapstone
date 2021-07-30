import React from "react";
import { useHistory } from "react-router";
import { Button, Card, CardBody } from "reactstrap";
import { deleteTagById, getAllTags } from "../../modules/tagManager";


const ParentCard = ({ parent }) => {
    const history = useHistory();

    return (
        
            <div>
                <button>
                <Link to={`/user/parent/${parent.id}`}>{parent.FirstName}</Link>
                </button>
            </div>

    )
}

export default ParentCard