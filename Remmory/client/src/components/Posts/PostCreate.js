import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { CreatePost } from '../../modules/PostManager';
import { getPCRByCurrentAndChildId } from '../../modules/ParentChildRelManager'
import { useParams } from "react-router-dom";
import * as moment from 'moment';

export const PostCreate = () => {
    const [image, setImage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({})
    const [PCRel, setPCRel] = useState({})
    const history = useHistory()

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'darwin')
        setLoading(true)
        const res = await fetch (
          '	https://api.cloudinary.com/v1_1/drnzrvhyi/image/upload', 
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json()
    
        setImage(file.secure_url)
        console.log("FILE URL", file.secure_url)
        setLoading(false)

        post.mediaUrl = file.secure_url
      }

      

    //   console.log(file.secure_url)

    const dateFixer = () => {
        const date = new Date(post.dateTimeToPost);
        const cutDate = moment(date).format("YYYY-MM-DD")
        post.dateTimeToPost = cutDate
    };

    // export const momentDateFixer = (property) => {
    //     const date = new Date(property.lastService);
    //     const cutDate = moment(date).format("YYYY-MM-DD")
    //     return cutDate
    // };

    const handleControlledInputChange = (event) => {
        let newPost = { ...post }
        let selectedVal = event.target.value
        console.log(selectedVal)
        newPost[event.target.id] = selectedVal
        setPost(newPost);
    };

//     var jsonDate = (new Date()).toJSON();
// var backToDate = new Date(jsonDate);

// console.log(jsonDate); //2015-10-26T07:46:36.611Z

// const handleDateTime = (event) => {
//     let newPost = { ...post }
//         let selectedVal = event.target.value
//         console.log(selectedVal)
//         var date = selectedVal;
// var day = date.getDate();       // yields date
// var month = date.getMonth() + 1;    // yields month (add one as '.getMonth()' is zero indexed)
// var year = date.getFullYear();  // yields year
// var hour = date.getHours();     // yields hours 
// var minute = date.getMinutes(); // yields minutes
// var second = date.getSeconds(); // yields seconds

// // After this construct a string with the above results as below
// var time = day + "/" + month + "/" + year + " " + hour + ':' + minute + ':' + second; 
//         newPost[event.target.id] = time
//         setPost(newPost);
// }

useEffect(() => {
    getPCRByCurrentAndChildId(childId).then(setPCRel);
}, []);

const {childId} = useParams();

    const handleClickSavePost = (event) => {
        dateFixer();
        post.ParentChildRelId = PCRel.id;
        event.preventDefault();
        setIsLoading(true);
        let newPost = { ...post };
        console.log(newPost)
        CreatePost(newPost).then(() => history.push(`/PostsChildView/${childId}`))
    };

    const handleClickCancel = (event) => {
        event.preventDefault();
        history.push(`/PostsChildView/${childId}`)
    };

    return (
        
        <>
            <form>
                    {/* <label for="type" sm={2}>Select Type</label>

                    <input type="select" name="select" id="type" value={transaction.type} onChange={handleControlledInputChange} required>

                        <option value={0}>Expense</option>
                        <option value={1}>Payment</option>
                    </input> */}

                    <h1>Upload Images</h1>
                        <input 
                        type="file"
                        name="file" 
                        placeholder="Upload an Image"
                        onChange={uploadImage}
                        />
                        {loading ? (
                            <h3>Loading</h3>
                        ): (
                            <img src={image} style ={{width: '300px' }} />
                        )}

                    <label for="title">Title</label>
                    <input type="text" id="title" placeholder="Title" value={post.title} onChange={handleControlledInputChange} />
                    <label for="textContent">Description</label>
                    <input type="text" id="textContent" placeholder="Description" value={post.textContent} onChange={handleControlledInputChange} />
                    <label for="dateToPost">Post Date</label>
                    <input type="date" id="dateTimeToPost"  format="YYYY-MM-DD" value={post.dateTimeToPost} onChange={handleControlledInputChange} />
                <button className="btn btn-primary" onClick={handleClickSavePost}>Save Post</button>
                <button className="btn btn-primary" onClick={handleClickCancel}>Cancel</button>
            </form>
        </>
    )

};