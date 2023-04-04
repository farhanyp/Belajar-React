import React from "react";
import "./BlogPost.css"
import Post from "./Post"
import { Link } from "react-router-dom";
import API from "../../Services/Service";

class BlogPost extends React.Component{
    state = {
        post: [],
        blogPostForm: {
            userId:1,
            id:"",
            title:"",
            body:""
        },
        isUpdate: false,
        photo: []
    }

    getDataAPI = async () => {
        API.getBlogPost().then((res) => {
            this.setState({
                post: res
            })
        })

        API.getPhoto().then((res) => {
            this.setState({
                photo: res
            })
        })
    }

    postDataToAPI = () => {
        API.postData(this.state.blogPostForm).then(() => {
            this.getDataAPI()
            this.setState({
                blogPostForm: {
                    userId:1,
                    id:"",
                    title:"",
                    body:""
                }
            })
        })
    }

    putDataToAPI = () =>{
        API.putData(this.state.blogPostForm.id, this.state.blogPostForm).then(() => {
            this.getDataAPI()
            this.setState({
                blogPostForm: {
                    userId:1,
                    id:"",
                    title:"",
                    body:""
                },
                isUpdate: false
            })
        })
    }

    handleEvent = (event) =>{
        let blogPostFormNew = {...this.state.blogPostForm}
        const timestamp = new Date().getTime()
        if(!this.state.isUpdate){
            blogPostFormNew['id'] = timestamp
        }
        blogPostFormNew[event.target.name]=event.target.value
        this.setState({
            blogPostForm: blogPostFormNew
        })
    }

    handleRemove = (id) =>{
        API.deleteData(id)

        this.getDataAPI()
        
    }

    handleUpdate = (data) =>{
        this.setState({
            blogPostForm: data,
            isUpdate: true
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI()
        }else{
            this.postDataToAPI()
        }
    }

    handleDetail = (id) =>{
        <Link to={`/product`}/>
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
            <p className="section-title">Blog Post</p>
            <div className="form-add-post">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={this.state.blogPostForm.title} placeholder="add title" onChange={this.handleEvent}/>
                <label htmlFor="body">Blog Content</label>
                <textarea name="body" id="body" cols="30" rows="10" placeholder="add body" onChange={this.handleEvent} value={this.state.blogPostForm.body}></textarea>
                <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
            </div>
            {
            this.state.post.map((post) => {
                return <Post key={post.id} data={post} remove = {this.handleRemove} update = {this.handleUpdate} detail = {this.handleDetail}/>
            })
            }
            
            </>
        )
    }
}

export default BlogPost