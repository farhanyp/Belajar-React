import axios from "axios";
import React from "react";
import "./BlogPost.css"
import Post from "./Post"

class BlogPost extends React.Component{
    state = {
        post: []
    }

    componentDidMount(){

        // Menggunakan Fetch
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json).then(json => console.log(json))

        // Menggunakan Axios
        // axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        //     this.setState({
        //         post: res.data
        //     })
        // })

    }


    render(){
        return(
            <>
            <p className="section-title"></p>
            {
            this.state.post.map((data) => {
                return <Post key={data.id} title ={data.title} desc={data.body}/>
            })
            }
            
            </>
        )
    }
}

export default BlogPost