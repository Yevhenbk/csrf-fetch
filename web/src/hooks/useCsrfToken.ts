// useData.js
import { useState, useEffect } from 'react';

const useCsrfToken = (url: string) => {
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await response.json()
      setCsrfToken(data.csrfToken)
      console.log(csrfToken)
    } catch (error) {
      console.error('Error fetching CSRF token:', error)
    }
  };

  return csrfToken;
};

export default useCsrfToken;
