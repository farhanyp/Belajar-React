import React from "react";
import { useParams } from "react-router";
import './DetailPost.css'

const DetailPost = () => {
    const param = useParams() 
    return(
        <>
        .p-detail
        <h1>{`Detail post dengan id: ${param.id}`}</h1>
        </>
    )
}

export default DetailPost