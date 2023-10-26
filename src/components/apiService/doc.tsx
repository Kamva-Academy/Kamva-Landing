import axios from 'axios';

const apiUrl = 'https://backend.kamva.academy/api/fsm/articles/?page=1'; 

export const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
};
