import axios from "axios";
import { RootURL } from "./Config";

const Delete = (path) =>{
    return new Promise ((resolve, reject) => {
        axios.delete (`${RootURL}${path}`).then(res => resolve(res), (error) => reject(error))
    })
}

export default Delete