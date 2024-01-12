import Axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_URL}/api/Stations`;

const getAll = () => {

    const request = Axios.get(baseUrl);
    return request
        .then(response => response.data)
        .catch(error => {
            throw (error);
        }) 
};
    
const getById = (id) => {
    const request = Axios.get(`${baseUrl}/${id}`);
    return request
        .then(response => response.data)
        .catch(error => {
            throw (error)
        }) 
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getById }