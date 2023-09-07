import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../Hooks/useData";
import { GameQuery } from "../App";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "87500a509c1e48bb85e2602e63e69343",
  },
});
class apiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getData = () => {
    return axiosInstance
      .get<FetchResponse<
      T>>(this.endpoint)
      .then((res) => res.data.results);
  };
  getAllData = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default apiClient;
