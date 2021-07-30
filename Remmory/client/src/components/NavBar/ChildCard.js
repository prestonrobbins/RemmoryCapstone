import React from "react";
import { useHistory } from "react-router";
import { Button, Card, CardBody } from "reactstrap";
import { deleteTagById, getAllTags } from "../../modules/tagManager";


const ChildCard = ({ child }) => {
    const history = useHistory();

    return (
        
            <div>
                <button>
                <Link to={`/user/child/${child.id}`}>{child.FirstName}</Link>
                </button>
            </div>

    )
}

export default ChildCard