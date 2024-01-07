
import axios from 'axios';

let baseUrl = "http://localhost:9000/products";

const getAllProducts = () => {
    return axios.get(baseUrl);
}

export {getAllProducts};