import axios from "axios";

const axiosAPI = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data.data;
};

export default axiosAPI;
