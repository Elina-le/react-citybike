import Axios from "axios";

const baseUrl = "https://localhost:7077/api/Journeys";

// const getPaginatedJourneys = (pageIndex, pageSize) => {

//     try {
//         const request = Axios.get(baseUrl, {
//             params: {
//                 page: pageIndex,
//                 pageSize: pageSize
//             }
//         });

//         return request.then(response => response.data)
//     } catch(error) {
//         console.log(error);
//     }
// }

const getPaginatedJourneys = async (pageIndex, pageSize) => {
      try {
      const response = await Axios.get(baseUrl, {
        params: {
          page: pageIndex,
          pageSize: pageSize
        }
      })

      const responseData = response.data;
      const totalPageCount = response.headers["x-total-pages"];

      return { responseData, totalPageCount };
    }
      catch (error) {
        console.log(error);
        throw error; // Re-throw the error to handle it in the component where this function is called
      }
  };

export default { getPaginatedJourneys }