import axios from "axios"
import { RootURL,PhotoURL } from "./Config"

const Post = (path,root,data) => {
    return new Promise((resolve, reject) => {
        axios.post(`${root ? RootURL : PhotoURL}${path}`, data).then((res) => {resolve(res.data)},(error) => {reject(error)})
    })
}

export default Post