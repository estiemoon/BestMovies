import { useEffect, useState } from "react";

export const STATUS = {
    pending: 'pending',
    resolved: 'resolved',
    error: 'error',
  };
  
  const { pending, resolved, error } = STATUS;
  
  const useFetchData = (api) => {
    const [status, setStatus] = useState(pending);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setStatus(pending);
        try {
          const response = await fetch(api);
          const jsonData = await response.json();
          setData(jsonData);
          setStatus(resolved);
        } catch (e) {
        }
      };
  
      fetchData(api);
    }, []);
  
    return [status, data, error];
  };