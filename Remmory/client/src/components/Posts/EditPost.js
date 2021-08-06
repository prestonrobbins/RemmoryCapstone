import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { updatePost } from '../../modules/PostManager';
import { getPCRByCurrentAndChildId } from '../../modules/ParentChildRelManager'
import { getPostById } from "../../modules/PostManager"
import { useParams } from "react-router-dom";
import * as moment from 'moment';

export const PostEdit = () => {
    const [image, setImage] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({})
    // const [PCRel, setPCRel] = useState({})
    const history = useHistory()
    const {postId} = useParams();

const getPostToEdit = () => {
    getPostById(postId).then(fetchedPost => { setPost(fetchedPost)
        setImage(fetchedPost.mediaUrl)
    })
}
console.log("HERE", post)

useEffect(() => {
    getPostToEdit()
}, []);

// setImage(post.mediaUrl)


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

    const dateFixer = () => {
        const date = new Date(post.dateTimeToPost);
        const cutDate = moment(date).format("YYYY-MM-DD")
        post.dateTimeToPost = cutDate
    };


    const handleControlledInputChange = (event) => {
        let newPost = { ...post }
        let selectedVal = event.target.value
        console.log(selectedVal)
        newPost[event.target.id] = selectedVal
        setPost(newPost);
    };

    const handleClickSavePost = (event) => {
        dateFixer();
        // post.ParentChildRelId = PCRel.id;
        event.preventDefault();
        setIsLoading(true);
        let newPost = { ...post };
        console.log(newPost)
        if(newPost.title == null){
            alert("Please give your post a title.")
        if(newPost.textContent == null){
            alert("Please give your post a Description.")}
        if(newPost.mediaUrl == null){
            alert("Please add a photo to your post.")}
        if(newPost.dateTimeToPost == null){
            alert("Please add a photo to your post.")}
        } else {
        updatePost(newPost).then(() => history.push(`/`))
        }
    };

    const handleClickCancel = (event) => {
        event.preventDefault();
        history.push(`PostsChildView/{}`)
    };
    console.log(image)
    return (
        
        <>
            <form>
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
                            <img src={image}  style ={{width: '300px' }} />
                        )}

                    <label for="title">Title</label>
                    <input type="text" id="title" placeholder="Title" value={post.title} onChange={handleControlledInputChange} />
                    <label for="textContent">Description</label>
                    <input type="text" id="textContent" placeholder="Description" value={post.textContent} onChange={handleControlledInputChange} />
                    <label for="dateToPost">Post Date</label>
                    <input type="date" id="dateTimeToPost"  format="YYYY-MM-DD" defaultValue={dateFixer(post.dateTimeToPost)} value={post.dateTimeToPost} onChange={handleControlledInputChange} />
                <button className="btn btn-primary" onClick={handleClickSavePost}>Save Post</button>
                <button className="btn btn-primary" onClick={handleClickCancel}>Cancel</button>
            </form>
        </>
    )

};

