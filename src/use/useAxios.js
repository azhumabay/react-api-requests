import { useCallback, useState } from "react";
import axiosAPI from "../api/axios-api";
import { delayDecorator } from "../tools";

export default function useAxios(initialValue = []) {
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const delayedAxiosAPI = delayDecorator(axiosAPI, 1000);

  const axiosData = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      const response = await delayedAxiosAPI(...args);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading, axiosData };
}
