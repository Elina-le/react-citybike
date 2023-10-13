import Axios from "axios";

const baseUrl = "https://localhost:7077/api/Stations";

const getAll = () => {
    try {
        const request = Axios.get(baseUrl);
        return request.then(response => response.data)
    } catch(error) {
        console.log(error);
    }
    
}

const getById = (id) => {
    try {
        const request = Axios.get(`${baseUrl}/${id}`);
        return request.then(response => response.data)
    } catch(error) {
        console.log(error);
    }
    
}

export default { getAll, getById }