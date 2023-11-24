import axios from 'axios';



export const fetchData = async (api:string) => {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    throw error;
  }
};
