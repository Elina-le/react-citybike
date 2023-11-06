import Axios from "axios";

const baseUrl = "https://localhost:7077/api/Journeys";

const getPaginatedJourneys = (pageIndex, pageSize) => {
    try {
        const request = Axios.get(baseUrl, {
            params: {
                pageIndex: pageIndex,
                pageSize: pageSize
            }
        });
        return request.then(response => response.data)
    } catch(error) {
        console.log(error);
    }
}

export default { getPaginatedJourneys }