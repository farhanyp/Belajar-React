import axios from "axios";
import { RootURL, PhotoURL } from "./Config";

const Get = (path, root) => {
    return new Promise ((resolve, reject) => {
        axios.get(`${root ? RootURL : PhotoURL}${path}`).then((res) => {resolve( res.data)},(error) => {reject(error)})
    })
}

export default Get