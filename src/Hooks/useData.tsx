import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const UseData = function <T>(
  endpoint: string,
  requestConfig ?: AxiosRequestConfig,
  deps?: any[]
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoding] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      setLoding(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoding(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoding(false);
        });
      return () => {
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, error, loading };
};
export default UseData;
