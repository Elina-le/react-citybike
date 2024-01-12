import Axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_URL}/api/Journeys`;

const getPaginatedJourneys = async (pageIndex, pageSize) => {
  
  var responseData = [];
  var totalPageCount = 0;

  await Axios
    .get(baseUrl, {
      params: {
        page: pageIndex,
        pageSize: pageSize
    }})
    .then(response => {
      responseData = response.data;
      totalPageCount = response.headers["x-total-pages"];
    })
    .catch(error => {
      throw error;
    });

  return { responseData, totalPageCount };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getPaginatedJourneys }