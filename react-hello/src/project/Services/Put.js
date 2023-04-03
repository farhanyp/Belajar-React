import axios from "axios";
import { RootURL } from "./Config";

const Put = (path,data ) => {
    return new Promise((resolve, reject) => {
        axios.put(`${RootURL}${path}`, data ).then(res => resolve(res), (error) => reject(error))
    })
}

export default Put