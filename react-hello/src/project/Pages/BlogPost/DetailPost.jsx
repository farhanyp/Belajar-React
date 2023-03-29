import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import './DetailPost.css'
import axios from "axios";

const DetailPost = () => {
    const [post, setPost] = useState("");
    const param = useParams() 


    const getPost = async () => {
        try{
            axios.get(`http://localhost:3004/posts/${param.id}`).then((result) => setPost(result.data))

        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        getPost()
    }, []);
    

    return(
        <>
        <div className="p-detail-post">
            <p className="detail-title">{post.title}</p>
            <p className="detail-body">{post.body}</p>
        </div>
        </>
    )
}

export default DetailPost