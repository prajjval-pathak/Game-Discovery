import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../Hooks/useData";
import { GameQuery } from "../types";

const axiosInstance = axios.create({
  baseURL: "/api",


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
  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
export default apiClient;
