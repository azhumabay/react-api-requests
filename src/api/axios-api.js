import axios from "axios";
import { BASE_API_URL } from "../const/api";

const axiosAPI = async (url) => {
  const data = await axios.get(`${BASE_API_URL}${url}`);
  return data.data;
};

export default axiosAPI;
