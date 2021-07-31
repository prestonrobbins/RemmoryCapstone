// import React, { useEffect, useState } from "react";
// import { editEquipment, getEquipmentById } from "../../modules/equipmentManager";
// import { useParams } from "react-router-dom";
// import { useHistory } from "react-router";

//Name of the page, this contains all of what is to be written below
export const EditPost = () => {
    return ( <h1>waddup</h1>)
    //used when the 
    // const [post, setPost] = useState({});
    // //used for when the page is loading so that the user isnt staring at nothing
    // const [isLoading, setIsLoading] = useState(false);
    // //can i use params? i thought we werent supposed to pass any of this through the front end?
    // const { id } = useParams();
    // //used when navigating, not too sure on the absolute need for it. can be interchanged with "links" i think
    // const history = useHistory();

    // //this runs so that while other portions of the page are loading we can already have the fetch call running.
    // const getPostsByUserId = () => {
    //     return getPostById(id).then(post => {
    //         setEquipment(post)
    //     });
    // };
    // //i have no clue what this is doing
    // const handleControlledInputChange = (event) => {
    //     let editedPost = { ...post };
    //     let selectedVal = event.target.value

    //     if (event.target.id.includes('Id')) {
    //         selectedVal = parseInt(selectedVal)
    //     }

    //     editedPost[event.target.id] = selectedVal
    //     setPost(editedPost)
    // };
    // //updates the database and sends the user to another page.
    // const handleClickSaveEquipment = (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    //     let editedPost = { ...post };
    //     editPost(editedPost).then(() => history.push('/Posts'))
    // };
    // //used on the button below to cancel the edit and go back to specified page
    // const handleClickCancel = (event) => {
    //     event.preventDefault();
    //     history.push('/Posts')
    // };
    // //rerenders the page when ever this is changed, also rerenders when the page loads in the first time so that we can display the data instaed of nothing. 
    // useEffect(() => {
    //     getPostsByUserId()
    // }, []);

    // return (
    //     <>
    //         <form>
    //             <h2>Edit Your Post</h2>
    //                 <label for="type">Title</label>
    //                 <input type="text" id="type" placeholder="Equipment type" value={equipment.type} onChange={handleControlledInputChange} />
    //                 <label for="make">Media Upload</label>
    //                 <input type="text" id="make" placeholder="Make" value={equipment.make} onChange={handleControlledInputChange} />
    //                 <label for="model">Content</label>
    //                 <input type="text" id="model" placeholder="Model" value={equipment.model} onChange={handleControlledInputChange} />
                
    //             <button className="btn btn-primary" onClick={handleClickSaveEquipment}>Save Equipment</button>
    //             <button className="btn btn-primary" onClick={handleClickCancel}>Cancel</button>
    //         </form>
    //     </>
    // )
}