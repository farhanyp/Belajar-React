import Get from "./Get"
import Post from "./Post"
import Delete from "./Delete"
import Put from "./Put"

// Post
const postData = (data) => Post('posts/', true , data)

// Get
const getBlogPost = () => Get('posts?_sort=id&_order=desc', true)
const getPhoto = () => Get('photos', false)

// Delete
const deleteData = (data) => Delete(`posts/${data}`)

// Put
const putData = (id,data) => Put(`posts/${id}`, data)


const API = {
    postData,
    getBlogPost,
    getPhoto,
    deleteData,
    putData
}

export default API