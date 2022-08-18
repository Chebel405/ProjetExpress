// LEs methodes
import axios from "axios";
import 'dotenv/config';

export class userModel {

    URI = process.env.URI
    
    getUser = () => {
        return axios.get(`${this.URI}`)
    }
    getUserById = (id: string) => {
        return axios.get(`${this.URI}/${id}`)
    }

    deleteUser = (id:string) => {
        axios.delete(`${this.URI}/${id} `);
    }

    addUser = () => {
        return axios.post(`${this.URI}`);
    }

}
