import { useEffect, useState } from 'react';

const useFetchData = (apiMethod, endPoint, body) => {
  const [data, setData] = useState([]);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    try {
      const { data: response } = await apiMethod(endPoint, body);
      setData(response);
    }
    catch (error) {
      if (error.response.data.error.infos.statusCode) setFailed(true);
    }
    setLoading(false);
  }, [apiMethod, endPoint, body]);

  return {
    data,
    loading,
    failed,
  };
};

export default useFetchData;
