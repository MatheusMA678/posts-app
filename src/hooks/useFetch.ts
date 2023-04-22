import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false));
  }, []);

  return { data, isFetching, error };
}
