import React from "react";
import axios from "axios";
import "./BlogPost.css"
import Post from "./Post"

class BlogPost extends React.Component{
    state = {
        post: []
    }

    getDataAPI = () => {
        // Menggunakan Axios
        axios.get('http://localhost:3004/posts').then((res) => {
            this.setState({
                post: res.data
            })
        })
    }

    handleRemove = (id) =>{
        axios.delete(`http://localhost:3004/posts/${id}`).then((data) => console.log(data))
        this.getDataAPI()
    }

    componentDidMount(){
        
        this.getDataAPI()

        // Menggunakan Fetch
        // fetch('http://localhost:3004/posts')
        // .then(response => response.json()).then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })

    }


    render(){
        return(
            <>
            <p className="section-title"></p>
            {
            this.state.post.map((post) => {
                return <Post key={post.id} data={post} remove = {this.handleRemove}/>
            })
            }
            
            </>
        )
    }
}

export default BlogPost