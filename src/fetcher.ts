import axios from "axios";
const API_KEY = "SQXV-1OXR-TFB5-6M7B";

// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

export const getPopularMoviesQuery = async (): Promise<any[] | []> => {
  try {
    const { data } = await axios.get(
      `https://randomapi.com/api/?key=${API_KEY}`
    );
    return data;
  } catch (e) {
    alert(e);
    return [];
  }
};
